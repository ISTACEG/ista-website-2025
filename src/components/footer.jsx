"use client"

import { Mail, Linkedin, Instagram, Music, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-transparent via-[#05070a]/80 to-black text-white" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-[#05070a]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)]"></div>

      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#05070a]/30 to-[#05070a]/60"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About ISTA Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              About ISTA
            </h2>
            <p className="text-white/70 leading-relaxed">
              The Information Science and Technology Association (ISTA) is dedicated to fostering innovation and
              knowledge in the field of information science and technology. We organize events, publish magazines, and
              provide resources to help students excel.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  aria-label="Home"
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/exp_view"
                  aria-label="Placement Experiences"
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Placement Experiences
                </a>
              </li>
              <li>
                <a
                  href="/resource"
                  aria-label="Resources"
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  aria-label="Events"
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  aria-label="Our Team"
                  className="text-white/70 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Connect with us
            </h2>
            <div className="flex flex-wrap gap-4">
              {/* Email */}
              <a
                href="mailto:ista@auist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="Email ISTA"
              >
                <Mail className="size-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </a>

              {/* LinkedIn */}
              <a
                href="http://linkedin.com/company/ista-ceg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="ISTA LinkedIn"
              >
                <Linkedin className="size-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ista__ceg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="ISTA Instagram"
              >
                <Instagram className="size-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/show/4luAEN13rTMvrhrVzbEbXG?si=f44e4661aef540ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="ISTA Spotify"
              >
                <Music className="size-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ISTA_CEG_ist"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                aria-label="ISTA YouTube"
              >
                <Youtube className="size-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="text-center">
            <p className="text-white/60">
              Design & Developed by{" "}
              <span className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors cursor-pointer">
                ISTA Web Team
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    </footer>
  )
}
