"use client";

import { CheckCircle2, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    title: "Industry Expertise",
    description: "Deep knowledge across finance, healthcare, tech, and more.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Customer-Centric",
    description: "Your success is our priority. We build solutions for your goals.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Innovation First",
    description: "Latest technologies and proven methodologies for excellence.",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Global Reach",
    description: "Serving clients worldwide with local market understanding.",
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Proven Track Record",
    description: "98% client satisfaction with measurable ROI.",
    icon: CheckCircle2,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support for your mission-critical operations.",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Why Choose BPolyTix?
            </h2>
            <p className="text-lg text-gray-600">
              We combine strategic thinking with technical excellence to deliver transformative solutions for your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                    {feature.title}
                  </h3>
                  <div className="grid transition-[grid-template-rows,opacity,margin] duration-300 [grid-template-rows:0fr] group-hover:mt-4 group-hover:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About Content */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mt-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Our Story & Mission
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to revolutionize how businesses approach digital transformation, BPolyTix has grown to become a trusted partner for enterprises seeking innovation and excellence.
                </p>
                <p>
                  Our team of experts brings together years of experience in business process optimization, technology strategy, and digital transformation. We believe in building long-term partnerships that drive real business value.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="rounded-3xl bg-white p-8 h-full">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Commitment
                </h4>
                <ul className="space-y-4">
                  {[
                    "Delivering measurable business outcomes",
                    "Fostering innovation and continuous improvement",
                    "Building sustainable partnerships",
                    "Maintaining highest standards of integrity",
                  ].map((item, idx) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-orange-500 to-red-500"][idx]}`} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
