"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Total Revenue Generated", value: "$20M+" },
    { label: "Businesses Launched", value: "50+" },
    { label: "Average Exit Value", value: "7 Figures" },
];

export default function Stats() {
    return (
        <section className="bg-white py-12 border-y border-border">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
