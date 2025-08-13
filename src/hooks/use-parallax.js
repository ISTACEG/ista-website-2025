"use client"

import { useEffect, useRef, useCallback } from "react"

export function useParallax(targetRef, opts) {
  const valueRef = useRef(0)
  const rafRef = useRef(0)
  const tickingRef = useRef(false)

  const measure = useCallback(() => {
    const target = targetRef.current
    if (!target) {
      tickingRef.current = false
      return
    }

    const rect = target.getBoundingClientRect()
    const clamp01 = (v) => Math.min(1, Math.max(0, v))
    const ease = opts?.ease ?? ((t) => 1 - Math.pow(1 - t, 2))

    const raw = clamp01(-rect.top / rect.height)
    const newValue = ease(raw)

    if (Math.abs(newValue - valueRef.current) > 0.001) {
      valueRef.current = newValue
    }

    tickingRef.current = false
  }, [targetRef, opts?.ease])

  const onScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true
      rafRef.current = window.requestAnimationFrame(measure)
    }
  }, [measure])

  const onResize = useCallback(() => {
    clearTimeout(rafRef.current)
    rafRef.current = setTimeout(onScroll, 100)
  }, [onScroll])

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    onScroll() // initial compute

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        clearTimeout(rafRef.current)
      }
    }
  }, [onScroll, onResize])

  return valueRef
}
