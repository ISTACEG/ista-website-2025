import { Suspense, lazy } from "react"

const LazyAurora = lazy(() => import("./aurora.jsx"))
const LazyOrbitalBlob = lazy(() => import("./orbital-blob.jsx"))
const LazyIntroSection = lazy(() => import("./intro-section.jsx"))
const LazyFooter = lazy(() => import("./footer.jsx"))

const LazyLoadingFallback = ({ height = "400px" }) => (
  <div style={{ height }} className="flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

export const LazyAuroraWrapper = (props) => (
  <Suspense fallback={<LazyLoadingFallback height="100vh" />}>
    <LazyAurora {...props} />
  </Suspense>
)

export const LazyOrbitalBlobWrapper = (props) => (
  <Suspense fallback={<LazyLoadingFallback height="100vh" />}>
    <LazyOrbitalBlob {...props} />
  </Suspense>
)

export const LazyIntroSectionWrapper = (props) => (
  <Suspense fallback={<LazyLoadingFallback height="200vh" />}>
    <LazyIntroSection {...props} />
  </Suspense>
)

export const LazyFooterWrapper = (props) => (
  <Suspense fallback={<LazyLoadingFallback height="200px" />}>
    <LazyFooter {...props} />
  </Suspense>
)
