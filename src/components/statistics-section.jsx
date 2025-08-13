"use client"

import { Users, BookOpen, Award, Calendar } from "lucide-react"

export default function StatisticsSection() {
  const stats = [
    {
      icon: <Users className="size-8 text-cyan-400" />,
      number: "500+",
      label: "Active Members",
      description: "Students actively participating in ISTA activities",
    },
    {
      icon: <BookOpen className="size-8 text-cyan-400" />,
      number: "50+",
      label: "Publications",
      description: "Magazine issues and newsletters published",
    },
    {
      icon: <Award className="size-8 text-cyan-400" />,
      number: "25+",
      label: "Events",
      description: "Technical events and workshops conducted annually",
    },
    {
      icon: <Calendar className="size-8 text-cyan-400" />,
      number: "10+",
      label: "Years",
      description: "Years of fostering innovation and knowledge",
    },
  ]

  return (
    <div className="relative mb-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
          Our Impact
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-6 text-center group-hover:border-cyan-400/50 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">{stat.icon}</div>

                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>

                <div className="text-lg font-semibold text-cyan-300 mb-3">{stat.label}</div>

                <p className="text-sm text-white/70 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
