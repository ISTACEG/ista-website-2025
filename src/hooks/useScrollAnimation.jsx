"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const { threshold = 0.3, rootMargin = "50px 0px 0px 0px", triggerOnce = false } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [elementRef, isVisible]
}

export function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.25, // Reduced default duration from 0.6 to 0.25 for faster animations
  className = "",
  triggerOnce = false,
  ...props
}) {
  const [ref, isVisible] = useScrollAnimation({ triggerOnce })

  const animationClass = isVisible ? `animate-${animation}` : `animate-${animation}-initial`

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}s`,
        animationFillMode: "both",
      }}
      {...props}
    >
      {children}
    </div>
  )
}
