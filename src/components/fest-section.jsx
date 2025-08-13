"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

export default function FestSection() {
  return (
    <div className="relative mb-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
          Our Events
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Itrix Event */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-8 group-hover:border-cyan-400/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="size-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Itrix</h3>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Our flagship technical symposium featuring coding competitions, hackathons, and technical workshops. A
                platform for students to showcase their skills and learn from industry experts.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar className="size-4 text-cyan-400" />
                  <span>Annual Event</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Users className="size-4 text-cyan-400" />
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="size-4 text-cyan-400" />
                  <span>CEG Campus</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Talks */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-8 group-hover:border-cyan-400/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="size-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Tech Talks</h3>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Regular sessions with industry professionals, alumni, and faculty members sharing insights on latest
                technologies, career guidance, and industry trends.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar className="size-4 text-cyan-400" />
                  <span>Monthly Sessions</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Users className="size-4 text-cyan-400" />
                  <span>100+ Attendees</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="size-4 text-cyan-400" />
                  <span>Virtual & In-Person</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0">
                Join Next Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
