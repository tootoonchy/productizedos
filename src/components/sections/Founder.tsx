"use client";

import { motion } from "framer-motion";

export default function Founder() {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="aspect-[4/5] rounded-3xl bg-muted overflow-hidden border border-border flex items-center justify-center relative">
                            <span className="text-muted-foreground font-medium italic">[Founder Portrait Placeholder]</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why I Built This</h2>
                        <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                            <p>
                                After a decade in corporate strategy, I realized that I was building someone else's assets while my own expertise was my biggest undervalued asset.
                            </p>
                            <p>
                                I spent 2 years failing to launch because I was trying to build 'tech' when I should have been building a 'productized service'. This framework is the shortcut I wish I had.
                            </p>
                            <p>
                                My goal is to help 1,000 professionals escape the 9-5 and build businesses that provide true freedom and equity.
                            </p>
                        </div>
                        <div className="mt-10">
                            <p className="text-xl font-bold text-primary">Founder Name</p>
                            <p className="text-base text-muted-foreground uppercase tracking-widest font-medium">Founder of Productized OS</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
