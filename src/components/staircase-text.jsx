export default function StaircaseText() {
  return (
    <div className="absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-20 z-30 pointer-events-none">
      <div className="text-center">
        <div
          className="animate-stagger
            font-bold text-white tracking-wider opacity-100
            transition-all duration-1000 ease-out
          "
          style={{
            fontFamily: "Prospec, sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 6rem)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            WebkitTextStroke: "2px rgba(0, 255, 255, 0.6)", // Cyan outline
            textStroke: "2px rgba(0, 255, 255, 0.6)",
            filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.3))", // Subtle cyan glow
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          INFORMATION SCIENCE AND
        </div>

        <div
          className="animate-stagger
            font-bold text-white tracking-wider opacity-100 mt-1
            transition-all duration-1000 ease-out
          "
          style={{
            fontFamily: "Prospec, sans-serif",
            fontSize: "clamp(1.2rem, 3vw, 6rem)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            WebkitTextStroke: "2px rgba(0, 255, 255, 0.6)", // Cyan outline
            textStroke: "2px rgba(0, 255, 255, 0.6)",
            filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.3))", // Subtle cyan glow
            transitionDelay: "200ms",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          TECHNOLOGY ASSOCIATION
        </div>
      </div>
    </div>
  )
}
