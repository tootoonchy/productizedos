"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "MasterClass",
        id: "tier-masterclass",
        price: "$2,500",
        description: "The complete self-paced operating system for B2B experts.",
        features: [
            "Full Curriculum Access",
            "60+ Video Lessons",
            "Niche Mastery Framework",
            "Validation Checklists",
            "MVP Launch Templates",
            "Community Support",
        ],
        buttonText: "Get Instant Access",
        mostPopular: false,
    },
    {
        name: "Mastermind",
        id: "tier-mastermind",
        price: "$7,500",
        description: "High-touch coaching and community for rapid scaling.",
        features: [
            "Everything in MasterClass",
            "Weekly Group Coaching",
            "1-on-1 Strategy Calls",
            "Private Slack Channel",
            "Done-with-you Systems",
            "Exit Advisory",
        ],
        buttonText: "Apply for Mastermind",
        mostPopular: true,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Two Ways to Build Your Startup
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Whether you want to move at your own pace or need hands-on guidance, we have a path for you.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-border sm:p-10 ${tier.mostPopular ? "bg-primary text-white shadow-elevated scale-105" : "bg-surface"
                                }`}
                        >
                            <div>
                                <h3 className={`text-2xl font-bold leading-8 ${tier.mostPopular ? "text-white" : "text-primary"}`}>
                                    {tier.name}
                                </h3>
                                <p className={`mt-4 text-base leading-7 ${tier.mostPopular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                                </p>
                                <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${tier.mostPopular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className={`h-6 w-5 flex-none ${tier.mostPopular ? "text-emerald-400" : "text-primary"}`} aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.mostPopular
                                        ? "bg-white text-primary hover:bg-gray-100"
                                        : "bg-primary text-white hover:bg-primary/90"
                                    } transition-colors`}
                            >
                                {tier.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
