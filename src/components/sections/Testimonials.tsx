"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Productized OS gave me the roadmap I needed to leave my Director role. I'm now making more while working 20 hours a week.",
        author: "Sarah J.",
        role: "Ex-Product Leader",
    },
    {
        quote: "The validation phase saved me months of building the wrong thing. My first client paid for the whole program 3x over.",
        author: "Michael R.",
        role: "B2B Consultant",
    },
    {
        quote: "Finally, a framework that understands the realities of building a business while having a family and a career.",
        author: "David L.",
        role: "Tech Executive",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Real People. Real Businesses.
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Join 200+ professionals who have transformed their expertise into digital products.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col justify-between rounded-2xl bg-surface border border-border p-8 shadow-card"
                        >
                            <div>
                                <Quote className="h-8 w-8 text-primary/10 mb-6" />
                                <p className="text-lg leading-relaxed text-primary italic font-medium">"{t.quote}"</p>
                            </div>
                            <div className="mt-8 flex items-center gap-x-4 border-t border-border pt-6">
                                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary">
                                    {t.author[0]}
                                </div>
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-primary">{t.author}</p>
                                    <p className="text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
