"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        <span className="badge-pill bg-emerald-100 text-emerald-800 border border-emerald-200">
                            New: Batch 24 Open
                        </span>
                        <span className="badge-pill bg-orange-100 text-orange-800 border border-orange-200">
                            Limited Seats
                        </span>
                        <span className="badge-pill bg-sky-100 text-sky-800 border border-sky-200">
                            AI Powered Hub
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-4xl text-5xl font-extrabold tracking-tight text-primary sm:text-7xl"
                    >
                        Your B2B Expertise Into A $500K+ Business Without Quitting Your Job
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
                    >
                        Productized OS provides a comprehensive framework for professionals to transform their work experience into a scalable startup. Join the Next Cohort today.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
                    >
                        <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
                            Apply for Next Cohort
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4 bg-white shadow-sm">
                            <div className="flex items-center justify-center rounded-full bg-primary/10 p-1">
                                <Play className="h-4 w-4 fill-primary text-primary" />
                            </div>
                            How to Use RankPill
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-0 -z-10 h-full w-full opacity-30 blur-3xl">
                <div className="absolute left-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-sky-200" />
                <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-orange-100" />
            </div>
        </section>
    );
}
