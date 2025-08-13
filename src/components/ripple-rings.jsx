"use client"

import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import { useMemo, useRef } from "react"

export default function RippleRings({
  pulseKey = 0,
  count = 26,
  radiusStart = 1.3,
  gap = 0.32,
  rippleActive = false,
  waveSpeed = 3.0, // units per second
  bandWidth = 0.6, // ring thickness influence
}) {
  const ringRefs = useRef([])
  const points = useMemo(() => circlePoints(1, 256), [])
  const rippleStartRef = useRef(null)
  const wasActiveRef = useRef(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Handle activation start time
    if (rippleActive && !wasActiveRef.current) {
      rippleStartRef.current = t
    }
    wasActiveRef.current = rippleActive

    // Compute wave radius
    let waveRadius = -1
    if (rippleActive && rippleStartRef.current !== null) {
      const elapsed = t - rippleStartRef.current
      // Loop the ripple every X seconds to keep continuous while hovered
      const period = 4.0
      const loopT = elapsed % period
      waveRadius = loopT * waveSpeed
    }

    const base = t * 0.8 + pulseKey * 1.2

    for (let i = 0; i < ringRefs.current.length; i++) {
      const obj = ringRefs.current[i]
      if (!obj) continue

      const r = radiusStart + i * gap

      // Existing subtle wobble
      const phase = base - i * 0.24
      const wobble = 1 + Math.sin(t * 0.6 + i * 0.35) * 0.005 + Math.max(0, Math.sin(phase)) * 0.002
      obj.scale.setScalar(r * wobble)

      // Material adjustments
      const anyMat = obj.material
      if (anyMat) {
        anyMat.transparent = true
        anyMat.depthWrite = false

        // Base opacity
        let opacity = 0.1 + 0.18 * Math.max(0, Math.sin(phase))

        // Ripple boost when the wavefront passes this ring radius
        if (waveRadius >= 0) {
          const d = Math.abs(r - waveRadius)
          const sigma = bandWidth
          const boost = Math.exp(-(d * d) / (2 * sigma * sigma)) // 0..1
          opacity += 0.35 * boost
          if (anyMat.color) {
            // Shift slightly towards neon cyan as the wave passes
            anyMat.color.setStyle("#bff6ff")
          }
        } else {
          if (anyMat.color) anyMat.color.setStyle("#e6f3ff")
        }

        // Clamp opacity
        anyMat.opacity = Math.min(0.95, opacity)
      }
    }
  })

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <Line
          key={i}
          ref={(el) => (ringRefs.current[i] = el || null)}
          points={points}
          color="#e6f3ff"
          lineWidth={1.0}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      ))}
    </group>
  )
}

function circlePoints(r, segments = 128) {
  const arr = []
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2
    arr.push([Math.cos(a) * r, Math.sin(a) * r, 0])
  }
  return arr
}
