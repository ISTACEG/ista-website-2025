"use client"

import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScrollWrapper({ children }) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  const smootherRef = useRef(null)

  const handleResize = useCallback(() => {
    if (smootherRef.current) {
      smootherRef.current.refresh()
    }
  }, [])

  const handleAnchorClick = useCallback((e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return

    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    const target = document.getElementById(targetId)

    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true, "top 80px")
    }
  }, [])

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return

    smootherRef.current = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.0,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: 0.1,
    })

    document.addEventListener("click", handleAnchorClick)
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      window.removeEventListener("resize", handleResize)
      if (smootherRef.current) {
        smootherRef.current.kill()
        smootherRef.current = null
      }
      ScrollTrigger.killAll()
    }
  }, [handleAnchorClick, handleResize])

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="smooth-scroll-wrapper">
      <div ref={contentRef} id="smooth-content" className="smooth-scroll-content">
        {children}
      </div>
    </div>
  )
}
