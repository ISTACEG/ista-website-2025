"use client"

import { Button } from "@/components/ui/button"
import { Code, Lightbulb, Users, ExternalLink } from "lucide-react"

export default function OtherSection() {
  const activities = [
    {
      icon: <Code className="size-6 text-cyan-400" />,
      title: "Coding Workshops",
      description: "Regular hands-on coding sessions covering various programming languages and frameworks.",
      link: "#workshops",
    },
    {
      icon: <Lightbulb className="size-6 text-cyan-400" />,
      title: "Innovation Labs",
      description: "Collaborative spaces for students to work on innovative projects and research.",
      link: "#labs",
    },
    {
      icon: <Users className="size-6 text-cyan-400" />,
      title: "Mentorship Program",
      description: "Connect with industry professionals and senior students for career guidance.",
      link: "#mentorship",
    },
  ]

  return (
    <div className="relative mb-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
          More Activities
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {activities.map((activity, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-6 group-hover:border-cyan-400/50 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">{activity.description}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 bg-transparent"
                >
                  <a href={activity.link} className="inline-flex items-center gap-2">
                    Learn More
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-8 max-w-2xl mx-auto">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join ISTA?</h3>
            <p className="text-white/80 mb-6">
              Become part of our community and start your journey in information science and technology.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
