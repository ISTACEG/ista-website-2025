import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, memo, useState } from "react";
import LoadingScreen from "./components/loading-screen.jsx";

const Navbar = lazy(() => import("./components/navbar.jsx"));
const Home = lazy(() => import("./pages/home/Home.jsx"));
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
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LazyFallback height="60px" />}>
        <Navbar />
      </Suspense>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}
