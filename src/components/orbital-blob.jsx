"use client"

import ErrorBoundary from "./error-boundary.jsx"
import { useFrame } from "@react-three/fiber"
import { ContactShadows, Text3D, Center } from "@react-three/drei"
import { useRef, useState, useEffect, useMemo } from "react"
import RippleRings from "./ripple-rings.jsx"
import Orbiters from "./orbiters.jsx"
import { useProgress, Html } from "@react-three/drei"
import { Suspense } from "react"
import MicrochipLoader from "./microchip-loader.jsx"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <MicrochipLoader />
        <div className="text-sm opacity-70 mt-2">{Math.round(progress)}% loaded</div>
      </div>
    </Html>
  )
}

function DelayedLoader() {
  return (
    <Html center>
      <MicrochipLoader />
    </Html>
  )
}

export default function Scene({ pulseKey, onCenterClick, scrollRef }) {
  const [rippleActive, setRippleActive] = useState(false)
  const [showScene, setShowScene] = useState(false)
  const groupRef = useRef(null)

  const cameraAnimation = useMemo(() => {
    let lastP = 0
    return (camera, p) => {
      // Only update if scroll position changed significantly
      if (Math.abs(p - lastP) > 0.001) {
        const baseZ = 8
        const baseY = 1.6
        camera.position.z = baseZ - p * 1.2
        camera.position.y = baseY + p * 0.6
        camera.updateProjectionMatrix()
        lastP = p
      }
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScene(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useFrame(({ camera }) => {
    const p = scrollRef?.current ?? 0
    cameraAnimation(camera, p)

    if (groupRef.current) {
      groupRef.current.rotation.x = p * 0.08
      groupRef.current.position.y = p * 0.15
    }
  })

  if (!showScene) {
    return <DelayedLoader />
  }

  return (
    <Suspense fallback={<Loader />}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 6, 4]} intensity={0.8} castShadow shadow-mapSize={1024} />
        <directionalLight position={[-5, 4, -3]} intensity={0.2} />

        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <RippleRings pulseKey={pulseKey} rippleActive={rippleActive} />
        </group>

        <Orbiters count={24} radiusMin={2.2} radiusMax={6.6} y={0.15} rippleActive={rippleActive} />

        <ErrorBoundary>
          <IstaText onClick={onCenterClick} onHoverChange={(v) => setRippleActive(v)} />
        </ErrorBoundary>

        <ContactShadows frames={1} position={[0, 0, 0]} scale={12} blur={2.6} far={6} opacity={0.45} color="#0b0b0b" />
      </group>
    </Suspense>
  )
}

function IstaText({ onClick, onHoverChange }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      const s = hovered ? 1.08 : 1
      ref.current.position.y = 0.1 + Math.sin(t * 1.6) * 0.04
      ref.current.rotation.y = Math.sin(t * 0.4) * 0.08
      ref.current.scale.set(s, s, s)
    }
  })

  return (
    <group ref={ref}>
      <Center position={[0, 0.5, 0]}>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.9}
          height={0.24}
          bevelEnabled
          bevelThickness={0.035}
          bevelSize={0.015}
          curveSegments={24}
          onClick={onClick}
          onPointerOver={() => {
            setHovered(true)
            onHoverChange?.(true)
          }}
          onPointerOut={() => {
            setHovered(false)
            onHoverChange?.(false)
          }}
        >
          {"ISTA"}
          <meshPhysicalMaterial
            color="#f5f8ff"
            roughness={0.22}
            metalness={0.25}
            reflectivity={0.8}
            clearcoat={0.85}
            clearcoatRoughness={0.35}
          />
        </Text3D>
      </Center>
    </group>
  )
}
