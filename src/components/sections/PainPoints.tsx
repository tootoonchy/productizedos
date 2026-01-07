"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Lock } from "lucide-react";

const pains = [
    {
        title: "Burned Out",
        description: "Giving your best energy to a company that could replace you tomorrow.",
        icon: AlertCircle,
    },
    {
        title: "Financial Ceiling",
        description: "Trading hours for dollars with no equity or long-term wealth building.",
        icon: TrendingDown,
    },
    {
        title: "Golden Handcuffs",
        description: "Afraid to leave the safety of a salary even though you're unfulfilled.",
        icon: Lock,
    },
];

export default function PainPoints() {
    return (
        <section className="py-24 sm:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Overworked, Underpaid and Scared to Leave?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        The traditional 9-5 path is broken. You're building someone else's dream while yours sits on the shelf.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {pains.map((pain, index) => (
                            <motion.div
                                key={pain.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center px-6"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                                    <pain.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-semibold leading-7 text-primary">
                                    {pain.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{pain.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
