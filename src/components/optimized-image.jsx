"use client"

import { useState, useRef, useEffect } from "react"

const OptimizedImage = ({ src, alt, className = "", placeholder = "/loading-screen-animation.png", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {!isInView ? (
        <img
          src={placeholder || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover blur-sm transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <>
          {!isLoaded && (
            <img
              src={placeholder || "/placeholder.svg"}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover blur-sm transition-all duration-300"
              loading="lazy"
            />
          )}
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </>
      )}
    </div>
  )
}

export default OptimizedImage
