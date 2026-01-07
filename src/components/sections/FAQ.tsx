"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How much time do I need to commit?",
        answer: "Most of our successful founders spend 5-10 hours per week. The framework is designed for busy professionals.",
    },
    {
        question: "Do I need to know how to code?",
        answer: "Absolutely not. We focus on 'no-code' tools and building smart service-based businesses that can later be automated.",
    },
    {
        question: "What if I don't have a business idea?",
        answer: "That's exactly what Stage 1 (Niche Mastery) is for. We help you extract your expertise into a validated business concept.",
    },
    {
        question: "Can I do this while working a full-time job?",
        answer: "Yes. In fact, we recommend it. You shouldn't quit your job until your new business is generating consistent revenue.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 sm:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Common Questions
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Everything you need to know about starting your productized journey.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-3xl">
                    <dl className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="rounded-2xl border border-border bg-white overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex w-full items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-semibold text-primary">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5 text-muted-foreground" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-muted-foreground" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6 text-muted-foreground">
                                        <p className="leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
