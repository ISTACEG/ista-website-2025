import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, lazy, memo } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import { useParallax } from "./hooks/use-parallax.js";
import { useScrollAnimations } from "./hooks/use-scroll-animations.js";
import LoadingScreen from "./components/loading-screen.jsx";
import SmoothScrollWrapper from "./components/smooth-scroll-wrapper.jsx";

const Scene = lazy(() => import("./components/orbital-blob.jsx"));
const Navbar = lazy(() => import("./components/navbar.jsx"));
const IntroSection = lazy(() => import("./components/intro-section.jsx"));
const Aurora = lazy(() => import("./components/aurora.jsx"));
const StaircaseText = lazy(() => import("./components/staircase-text.jsx"));
const Footer = lazy(() => import("./components/footer.jsx"));

const Placement = lazy(() => import("./pages/placement/Placement.jsx"));
const Resources = lazy(() => import("./pages/resources/Resources.jsx"));

const LazyFallback = memo(({ height = "100px" }) => (
  <div
    style={{ height }}
    className="flex items-center justify-center bg-transparent"
  >
    <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
));

export default function App() {
  const [pulseKey, setPulseKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);

  // Only initialize parallax after loading is complete
  const scrollRef = useParallax(isLoading ? { current: null } : heroRef);

  useScrollAnimations();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Suspense fallback={<LazyFallback height="60px" />}>
        <Navbar />
      </Suspense>

      <SmoothScrollWrapper>
        <main className="relative w-full bg-black text-white animate-fade-in">
          {/* HERO: full-viewport 3D section */}
          <section
            id="hero"
            ref={heroRef}
            className="relative w-full h-[100svh] overflow-hidden will-change-transform"
          >
            {/* Subtle vignette background to match the reference */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(30,30,35,0.35) 0%, rgba(12,12,14,0.15) 35%, rgba(0,0,0,1) 70%)",
              }}
            />

            {/* Aurora overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[38svh] z-20">
              <Suspense fallback={<LazyFallback height="38vh" />}>
                <Aurora
                  className="w-full h-full"
                  colorStops={["#00FFFF", "#00BFFF", "#32CD32"]}
                  blend={0.5}
                  amplitude={1.0}
                  speed={0.5}
                />
              </Suspense>
            </div>

            {/* Added staircase text positioned above ISTA */}
            <Suspense fallback={null}>
              <StaircaseText />
            </Suspense>

            <Canvas
              shadows
              dpr={[1, 1.5]} // Reduced DPR from 1.75 to 1.5 for better performance
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                stencil: false,
                depth: true,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false,
              }}
              onCreated={({ gl }) => {
                const canvas = gl.getContext()?.canvas ?? null;
                if (canvas) {
                  const handleLost = (e) => {
                    e.preventDefault();
                  };
                  canvas.addEventListener("webglcontextlost", handleLost, {
                    passive: false,
                  });
                }
              }}
              camera={{ position: [0, 1.6, 8], fov: 40, near: 0.1, far: 100 }}
              className="relative z-0 will-change-transform"
            >
              <color attach="background" args={["#000000"]} />
              <fog attach="fog" args={["#000000", 12, 26]} />

              <Suspense fallback={null}>
                <Scene
                  pulseKey={pulseKey}
                  onCenterClick={() => setPulseKey((k) => k + 1)}
                  scrollRef={scrollRef}
                />
                {/* Studio-ish environment for soft reflections */}
                <Environment preset="studio" />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={(Math.PI / 2) * 1.08}
                target={[0, 0.4, 0]}
                enableDamping={true}
                dampingFactor={0.05}
              />
            </Canvas>

            {/* Bottom gradient fade into next section */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(5,7,10,1) 80%)",
              }}
            />
          </section>

          {/* INTRO SECTION BELOW HERO */}
          <div className="animate-on-scroll">
            <Suspense fallback={<LazyFallback height="200vh" />}>
              <IntroSection />
            </Suspense>
          </div>

          {/* FOOTER */}
          <div className="slide-in-left">
            <Suspense fallback={<LazyFallback height="200px" />}>
              <Footer />
            </Suspense>
          </div>
        </main>
      </SmoothScrollWrapper>
    </>
  );
}
