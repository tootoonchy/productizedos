"use client";

import { motion } from "framer-motion";

const steps = [
    { id: "01", name: "Niche Mastery", description: "Identify the high-value problem you solve better than anyone else." },
    { id: "02", name: "Validation", description: "Confirm market demand before building a single thing." },
    { id: "03", name: "Product Strategy", description: "Design a scalable service model that doesn't rely on your time." },
    { id: "04", name: "MVP Launch", description: "Get your first paying clients with a minimum viable offer." },
    { id: "05", name: "Scaling Systems", description: "Automate delivery and marketing to grow beyond yourself." },
    { id: "06", name: "Exit Readiness", description: "Build a business that is attractive to buyers from day one." },
];

export default function Framework() {
    return (
        <section className="py-24 sm:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">The Framework</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        A Repeatable 6-Stage Process
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We don't believe in guessing. Our framework is built on proven startup principles adapted for B2B experts.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative group overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-elevated"
                            >
                                <span className="text-4xl font-black text-primary/5 absolute -top-1 -right-2 transition-colors group-hover:text-primary/10">
                                    {step.id}
                                </span>
                                <h3 className="text-xl font-bold text-primary group-hover:text-primary/90">
                                    {step.name}
                                </h3>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
