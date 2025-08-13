"use client"

import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"

export default function Orbiters({
  count = 40,
  radiusMin = 2.0,
  radiusMax = 7.0,
  y = 0.12,
  rippleActive = false,
  waveSpeed = 3.0, // units per second
  bandWidth = 0.6, // band width for the wavefront
}) {
  const meshRefs = useRef([])
  const data = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const lerp = (a, b, t) => a + (b - a) * t
      temp.push({
        radius: lerp(radiusMin, radiusMax, Math.random()),
        speed: lerp(0.06, 0.35, Math.random()) * (Math.random() > 0.5 ? 1 : -1),
        phase: Math.random() * Math.PI * 2,
        size: lerp(0.03, 0.1, Math.random() ** 2),
        tilt: lerp(-0.08, 0.08, Math.random()),
      })
    }
    return temp
  }, [count, radiusMin, radiusMax])

  const rippleStartRef = useRef(null)
  const wasActiveRef = useRef(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (rippleActive && !wasActiveRef.current) {
      rippleStartRef.current = t
    }
    wasActiveRef.current = rippleActive

    let waveRadius = -1
    if (rippleActive && rippleStartRef.current !== null) {
      const elapsed = t - rippleStartRef.current
      const period = 4.0
      const loopT = elapsed % period
      waveRadius = loopT * waveSpeed
    }

    data.forEach((o, i) => {
      const a = t * o.speed + o.phase
      const x = Math.cos(a) * o.radius
      const z = Math.sin(a) * o.radius
      const m = meshRefs.current[i]
      if (m) {
        // Position and tilt animation
        m.position.set(x, y + Math.sin(a * 3) * 0.03, z)
        m.rotation.z = o.tilt

        // Base scale
        const baseS = o.size * 10

        // Distance from origin in XZ plane
        const dist = Math.sqrt(x * x + z * z)

        // Wavefront band
        let boost = 0
        if (waveRadius >= 0) {
          const d = Math.abs(dist - waveRadius)
          const sigma = bandWidth
          boost = Math.exp(-(d * d) / (2 * sigma * sigma)) // 0..1
        }

        // Apply scale "pop" and emissive boost
        const s = baseS * (1 + 0.75 * boost)
        m.scale.set(s, s, s)

        const mat = m.material
        if (mat) {
          mat.color.set("#22d3ee")
          mat.emissive.set("#67e8f9")
          mat.emissiveIntensity = 0.65 + 1.6 * boost
          // optional: mat.toneMapped = false // uncomment if you want stronger bloom with post-processing
        }
      }
    })
  })

  return (
    <group>
      {data.map((_, i) => (
        <mesh key={i} ref={(el) => (meshRefs.current[i] = el)} castShadow={false} receiveShadow={false}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#67e8f9" emissiveIntensity={0.65} />
        </mesh>
      ))}
    </group>
  )
}
