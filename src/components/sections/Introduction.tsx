"use client";

import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Introducing Productized OS</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                            From Burned Out Professional to Startup Founder
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
                            Productized OS is more than just a course. It's a complete operating system for turning your B2B expertise into a high-margin, scalable service business.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
                            We help you escape the billable hour trap and build a business that works for you, not the other way around. No coding required, no quitting your job until you're ready.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden border border-border flex items-center justify-center">
                            <span className="text-muted-foreground font-medium italic">[Elegant Product Visual Placeholder]</span>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-4 -right-4 h-full w-full bg-primary/5 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
