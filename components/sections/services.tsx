"use client";

import Link from "next/link";
import {
  Zap,
  Cog,
  TrendingUp,
  Lightbulb,
  BarChart3,
  Users,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description: "Develop comprehensive business strategies aligned with your goals.",
    points: ["Digital transformation roadmap", "Market analysis", "Competitive positioning"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Technology Solutions",
    description: "Custom software and platform development tailored to your needs.",
    points: ["Cloud architecture", "Software development", "System integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cog,
    title: "Business Process Outsourcing",
    description: "Streamline operations with our world-class BPO services.",
    points: ["Process automation", "Cost optimization", "Efficiency improvement"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Scale your business with data-driven growth strategies.",
    points: ["Revenue growth", "Market expansion", "Customer acquisition"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Unlock actionable insights from your business data.",
    points: ["Data analytics", "BI solutions", "Performance metrics"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Talent Solutions",
    description: "Build and manage high-performing teams for success.",
    points: ["Recruitment", "Training", "Workforce management"],
    color: "from-cyan-500 to-blue-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions designed to drive your business forward
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="group h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Icon Background */}
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {service.title}
                    </h3>
                    <div className="grid transition-[grid-template-rows,opacity,margin] duration-300 [grid-template-rows:0fr] group-hover:mt-4 group-hover:[grid-template-rows:1fr]">
                      <div className="overflow-hidden">
                        <div className="space-y-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm leading-relaxed text-gray-600">
                            {service.description}
                          </p>

                          <ul className="space-y-3">
                            {service.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${service.color}`} />
                                {point}
                              </li>
                            ))}
                          </ul>

                          <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1">
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-white">
                Ready to Transform?
              </h3>
              <p className="mt-3 text-white/90 text-lg">
                Let&apos;s discuss how our services can revolutionize your business.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 hover:shadow-xl transition-all hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
