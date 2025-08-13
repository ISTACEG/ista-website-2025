"use client"

import { Linkedin, Mail, Github } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Vani Haridasan",
      role: "Faculty Advisor",
      image: "/ISTA OB/Vani_IST.webp",
      bio: "Leading research in information systems and guiding ISTA's academic initiatives.",
      social: {
        email: "vani@annauniv.edu",
        linkedin: "#",
      },
    },
    {
      name: "Selvi Ravindran",
      role: "President",
      image: "/ISTA OB/selviravindran.png",
      bio: "Computer Science student passionate about technology and community building.",
      social: {
        email: "president@ista.com",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <div className="relative mb-20" id="team">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-400 to-black bg-clip-text text-transparent">
          Our Team
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-cyan-300/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-cyan-300/5 backdrop-blur-xl p-6 group-hover:border-cyan-400/50 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 p-1">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-gray-800"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>

                <div className="text-cyan-300 font-medium mb-4">{member.role}</div>

                <p className="text-white/80 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="size-4 text-cyan-400" />
                    </a>
                  )}

                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="size-4 text-cyan-400" />
                    </a>
                  )}

                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="size-4 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
