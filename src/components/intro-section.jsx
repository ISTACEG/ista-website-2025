"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import FestSection from "./fest-section";
import StatisticsSection from "./statistics-section";
import OtherSection from "./other-section";
import TeamSection from "./team-section";
import DotGrid from "./dot-grid";
import { AnimatedElement } from "../hooks/useScrollAnimation";
import "../animations.css";

export default function IntroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Information Science and Technology Association",
    "Empowering innovation through technology and knowledge",
    "At ISTA, we work together to grow together.",
  ];

  // Custom typing animation effect
  useEffect(() => {
    let timeout;
    const currentFullText = texts[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isTyping, texts]);

  return (
    <section id="intro" className="relative w-full  text-white">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-t from-transparent via-[#05070a]/50 to-[#05070a] z-20"></div>
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-t from-transparent to-black/30 z-20"></div>

      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={8}
          gap={18}
          baseColor="#3a3a5e"
          activeColor="#00ffff"
          proximity={120}
          className="opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Heading with fixed height and centered */}
        <AnimatedElement animation="fadeIn" duration={0.2}>
          <div className="flex items-center justify-center min-h-[250px] mb-16">
            <div className="text-center max-w-4xl">
              <span
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight prospec-font"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #00FFFF 0%, #00E5FF 20%, #00BFFF 40%, #0099CC 60%, #006699 80%, #003366 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 3s ease infinite",
                  minHeight: "1.2em",
                }}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        </AnimatedElement>

        {/* Itrix'25 Section */}
        <AnimatedElement animation="slideInRight" delay={50} duration={0.25}>
          <div className="flex items-center justify-center mb-16">
            <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-cyan-400/5 to-transparent backdrop-blur-xl p-8 max-w-2xl text-center">
              {/* Glassy overlay effect */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,255,255,0.08) 0%, rgba(0,191,255,0.04) 50%, rgba(0,153,204,0.02) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
                  Itrix'25 is over bruh..
                </h2>
                <p className="text-lg text-cyan-100/80 mb-6">
                  Missed it? Check it out here
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 shadow-lg shadow-cyan-500/25"
                >
                  <a href="#" className="inline-flex items-center gap-2">
                    View Itrix'25
                    <span className="text-cyan-200">→</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* What We Do Section */}
        <AnimatedElement animation="fadeIn" delay={100} duration={0.3}>
          <div className="relative mb-20">
            {/* Section Header with underline */}
            <div className="text-center mb-16">
              <h1 className="title-head text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
                What We Do
              </h1>
              {/* Decorative underline */}
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
              </div>
            </div>

            {/* Magazine Box */}
            <div className="magazine-box space-y-12">
              <AnimatedElement animation="slideInUp" delay={150}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">
                  Magazines & Newsletters
                </h2>
              </AnimatedElement>

              <AnimatedElement animation="fadeIn" delay={200}>
                <p className="text-desc text-lg text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
                  Cache and instances are the magazines and newsletters created
                  by the ISTA to engage with the IST Department in a creative
                  and collaborative manner. This was initiated with the mindset
                  of providing prodigious opportunities to all the students in
                  the college who have an open interest for Information
                  Technology. From interviews with respected faculty and
                  articles on various achievements of student students, to
                  creative enigmatic puzzles, games, memes and contests, Cache
                  has it all.
                  <br />
                  <a
                    href="https://publications.istaceg.in/?tab=publications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mt-4 font-medium"
                  >
                    Visit site..
                    <ExternalLink className="size-4" />
                  </a>
                </p>
              </AnimatedElement>

              {/* Magazine Images - Each as individual cards */}
              <div className="magazine-images flex flex-wrap justify-center gap-12 mt-16">
                {/* First Magazine Card */}
                <AnimatedElement
                  animation="scaleIn"
                  delay={250}
                  className="animate-stagger"
                >
                  <div className="relative group">
                    {/* Background glow effects for individual card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 rounded-2xl blur-2xl"></div>

                    <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-6 group-hover:border-cyan-400/50 transition-all duration-500">
                      {/* Glassy overlay for individual card */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-80 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,255,255,0.06) 0%, rgba(34,211,238,0.04) 30%, rgba(103,232,249,0.03) 70%, rgba(165,243,252,0.02) 100%)",
                        }}
                      />

                      <div className="relative z-10">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/February-2022-Edition-JMXNsBH8e4wv0McqJNuNl6JCfZ2VQ5.png"
                          alt="Cover of the February 2022 Edition of ISTA Magazine"
                          loading="lazy"
                          className="w-80 h-auto max-h-[500px] object-contain rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter:
                              "drop-shadow(0 0 20px rgba(34,211,238,0.3))",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedElement>

                {/* Second Magazine Card */}
                <AnimatedElement
                  animation="scaleIn"
                  delay={300}
                  className="animate-stagger"
                >
                  <div className="relative group">
                    {/* Background glow effects for individual card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 rounded-2xl blur-2xl"></div>

                    <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-6 group-hover:border-cyan-400/50 transition-all duration-500">
                      {/* Glassy overlay for individual card */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-2xl group-hover:opacity-80 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,255,255,0.06) 0%, rgba(34,211,238,0.04) 30%, rgba(103,232,249,0.03) 70%, rgba(165,243,252,0.02) 100%)",
                        }}
                      />

                      <div className="relative z-10">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instance-image-jRfD6bBGGLxSOvct5CeQra1nTXKJwg.png"
                          alt="Cover of the December 2021 Edition of ISTA Magazine"
                          loading="lazy"
                          className="w-80 h-auto max-h-[500px] object-contain rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter:
                              "drop-shadow(0 0 20px rgba(34,211,238,0.3))",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Fests Section */}
        <AnimatedElement animation="slideInLeft" delay={350}>
          <FestSection />
        </AnimatedElement>

        {/* Statistics Section */}
        <AnimatedElement animation="bounceIn" delay={400}>
          <StatisticsSection />
        </AnimatedElement>

        {/* Other Section */}
        <AnimatedElement animation="slideInRight" delay={450}>
          <OtherSection />
        </AnimatedElement>

        {/* Team Section */}
        <AnimatedElement animation="fadeIn" delay={500}>
          <TeamSection />
        </AnimatedElement>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#05070a]/50 to-[#05070a] z-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-black/30 z-20"></div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2 text-cyan-300">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
