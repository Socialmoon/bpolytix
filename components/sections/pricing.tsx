"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: "$999",
    period: "/month",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Up to 5 team members",
      "Basic consulting",
      "Email support",
      "Monthly reports",
      "Standard SLA",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$2,999",
    period: "/month",
    color: "from-purple-500 to-pink-500",
    features: [
      "Up to 20 team members",
      "Advanced consulting",
      "Priority support",
      "Weekly reports",
      "99.5% SLA",
      "Custom integrations",
      "Dedicated account manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    period: "Contact us",
    color: "from-green-500 to-emerald-500",
    features: [
      "Unlimited team members",
      "Strategic consulting",
      "24/7 dedicated support",
      "Real-time analytics",
      "99.99% SLA",
      "Custom development",
      "Dedicated team",
      "On-premise options",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your business needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-purple-300 shadow-2xl shadow-purple-500/20 lg:scale-105 -translate-y-4"
                    : "border-gray-200 hover:border-gray-300"
                } bg-white p-10`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className={`rounded-full bg-gradient-to-r ${plan.color} px-5 py-1.5 text-xs font-bold text-white shadow-lg`}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Top border accent */}
                <div className={`h-1 w-12 bg-gradient-to-r ${plan.color} rounded-full mb-6`}></div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-sm font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:shadow-${plan.color}/30 hover:scale-105`
                        : "border-2 border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-indigo-300"
                    }`}
                  >
                    Get Started
                  </Link>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Info */}
          <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Have Questions?</h3>
            <p className="mt-3 text-gray-600 text-lg">
              All plans include a free 30-day trial and 24/7 customer support.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 transition-all hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
