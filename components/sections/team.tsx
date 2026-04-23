"use client";

import { Mail, Share2 } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "John Anderson",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years in digital transformation.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Technology innovator specializing in cloud and AI solutions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Head of Strategy",
    bio: "Strategic consultant with Fortune 500 corporate experience.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "VP of Client Success",
    bio: "Client-focused leader ensuring delivery excellence.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "David Kumar",
    role: "Director of Engineering",
    bio: "Engineering excellence advocate with 15+ years experience.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "Head of Operations",
    bio: "Operations strategist optimizing processes and delivery.",
    color: "from-cyan-500 to-blue-500",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Talented professionals dedicated to your success
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Avatar with color gradient */}
                <div className={`h-48 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                </div>

                {/* Info */}
                <div className="space-y-4 p-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 mt-1">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href="#"
                      className="rounded-lg bg-indigo-100 p-2.5 text-indigo-600 hover:bg-indigo-200 transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Share2 className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg bg-indigo-100 p-2.5 text-indigo-600 hover:bg-indigo-200 transition-all"
                      aria-label="Email Contact"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Careers CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-white">Join Our Team</h3>
              <p className="mt-3 text-white/90 text-lg">
                We&apos;re always looking for talented individuals to join our growing team.
              </p>
              <Link href="/careers" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 hover:shadow-xl transition-all hover:scale-105">
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
