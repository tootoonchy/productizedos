"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const requirements = [
    "5+ years of experience in a B2B domain or niche.",
    "A deep understanding of a specific business problem.",
    "The drive to build something of your own.",
    "At least 5-10 hours per week to dedicate to your startup.",
    "Willingness to learn and implement a proven framework.",
];

export default function Suitability() {
    return (
        <section className="py-24 sm:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl rounded-3xl bg-primary p-8 sm:p-16 text-white shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
                            Is Productized OS Right for You?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/80 text-center">
                            We are selective. This framework is best suited for professionals who meet the following criteria:
                        </p>
                        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 text-lg">
                            {requirements.map((req, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
                                    <span>{req}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-12 flex justify-center">
                            <button className="rounded-md bg-white px-8 py-3.5 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors">
                                Apply to Join Next Batch
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
