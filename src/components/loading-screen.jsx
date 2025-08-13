"use client"

import { useState, useEffect } from "react"
import Hyperspeed from "./hyperspeed"
import { hyperspeedPresets } from "./hyperspeed-presets"

export default function LoadingScreen({ onLoadingComplete }) {
  const [stage, setStage] = useState("initial")

  useEffect(() => {
    // Start with a brief delay
    const initialTimer = setTimeout(() => {
      setStage("hyperspeed")
    }, 500)

    return () => clearTimeout(initialTimer)
  }, [])

  const handleHyperspeedComplete = () => {
    setStage("complete")
    // Brief delay before calling onLoadingComplete for smooth transition
    setTimeout(() => {
      onLoadingComplete()
    }, 300)
  }

  if (stage === "complete") {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-300 opacity-0">
       
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {stage === "hyperspeed" && (
        <Hyperspeed
          effectOptions={hyperspeedPresets.three}
          auto={{
            startDelayMs: 400,
            rampDurationMs: 2200,
            holdMs: 600,
          }}
          onFinished={handleHyperspeedComplete}
        />
      )}

      {stage === "initial" && (
        <div className="flex items-center justify-center h-full">
          <div className="text-white/40 text-lg animate-pulse">Loading...</div>
        </div>
      )}
    </div>
  )
}
