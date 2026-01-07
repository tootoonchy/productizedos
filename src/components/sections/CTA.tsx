"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative isolate overflow-hidden bg-primary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                    >
                        Your Expertise Is Worth More Than Your Salary.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80"
                    >
                        Stop building someone else's dream. Start building your own asset today with the Productized OS framework.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-6"
                    >
                        <button className="rounded-md bg-white px-8 py-4 text-lg font-bold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all flex items-center gap-2">
                            Start With Productized OS
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="text-lg font-bold leading-6 text-white hover:text-white/80 transition-all">
                            Schedule a Call <span aria-hidden="true">→</span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Background pattern */}
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#pattern)" fillOpacity="0.1" />
                <defs>
                    <radialGradient id="pattern">
                        <stop stopColor="white" />
                        <stop offset={1} stopColor="white" />
                    </radialGradient>
                </defs>
            </svg>
        </section>
    );
}
