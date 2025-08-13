"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimations = () => {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const animateElements = (selector, fromProps, toProps) => {
      const elements = document.querySelectorAll(selector)
      if (elements.length > 0) {
        gsap.fromTo(elements, fromProps, toProps)
      }
    }

    // Main scroll animations
    animateElements(
      ".animate-on-scroll",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".animate-on-scroll",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      },
    )

    animateElements(
      ".magazine-card",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".magazine-grid",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Left slide animations
    animateElements(
      ".slide-in-left",
      {
        opacity: 0,
        x: -60,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".slide-in-left",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    )

    animateElements(
      ".particle-section",
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".particle-section",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
