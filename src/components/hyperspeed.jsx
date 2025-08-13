"use client"

import { useEffect, useRef } from "react"

export default function Hyperspeed({ effectOptions, auto, onFinished }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const particles = []
    const numParticles = effectOptions?.particleCount || 100

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        speed: Math.random() * 2 + 1,
      })
    }

    const startTime = Date.now()
    let phase = "ramp" // ramp, hold, complete

    const animate = () => {
      const elapsed = Date.now() - startTime

      // Handle auto phases
      if (auto) {
        if (phase === "ramp" && elapsed > auto.startDelayMs + auto.rampDurationMs) {
          phase = "hold"
        } else if (phase === "hold" && elapsed > auto.startDelayMs + auto.rampDurationMs + auto.holdMs) {
          phase = "complete"
          onFinished?.()
          return
        }
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Move particle
        particle.z -= particle.speed * 10

        if (particle.z <= 0) {
          particle.z = 1000
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }

        // Project to 2D
        const x = (particle.x - canvas.width / 2) * (200 / particle.z) + canvas.width / 2
        const y = (particle.y - canvas.height / 2) * (200 / particle.z) + canvas.height / 2

        // Draw particle
        const size = (1 - particle.z / 1000) * 3
        ctx.fillStyle = `rgba(0, 255, 255, ${1 - particle.z / 1000})`
        ctx.fillRect(x, y, size, size)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation after delay
    setTimeout(() => {
      animate()
    }, auto?.startDelayMs || 0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [effectOptions, auto, onFinished])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ background: "black" }} />
}
