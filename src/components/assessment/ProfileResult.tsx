"use client";

import { Profile } from "@/data/assessmentData";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, TrendingUp, Zap, Target, Users } from "lucide-react";
import Link from "next/link";

interface ProfileResultProps {
    profile: Profile;
}

export default function ProfileResult({ profile }: ProfileResultProps) {
    return (
        <div className="space-y-12">
            {/* Header Section */}
            <header className="text-center space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase"
                >
                    Your Founder DNA Result
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary">
                    {profile.name}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                    "{profile.tagline}"
                </p>
            </header>

            {/* Introduction */}
            <section className="surface-card p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary/10 transition-transform group-hover:scale-110">
                    <Zap size={120} />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Zap className="text-primary h-6 w-6" />
                        Who You Are as a Founder
                    </h2>
                    <p className="text-lg text-primary/80 leading-relaxed font-medium">
                        {profile.intro}
                    </p>
                </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Strengths */}
                <section className="bg-white border border-border rounded-3xl p-8 md:p-10">
                    <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-500 h-6 w-6" />
                        Entrepreneurial Strengths
                    </h2>
                    <ul className="space-y-4">
                        {profile.strengths.map((str, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                <span className="text-lg text-primary/70">{str}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Challenges */}
                <section className="bg-white border border-border rounded-3xl p-8 md:p-10">
                    <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <AlertCircle className="text-amber-500 h-6 w-6" />
                        Growth Challenges
                    </h2>
                    <ul className="space-y-4">
                        {profile.challenges.map((cha, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="h-2 w-2 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                                <span className="text-lg text-primary/70">{cha}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Business Models */}
            <section className="bg-primary text-white rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Target className="h-6 w-6" />
                            Ideal Business Models
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {profile.businessModels.map((model, idx) => (
                                <span key={idx} className="px-4 py-2 rounded-xl bg-white/10 font-bold border border-white/20">
                                    {model}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Link href="/pricing" className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-colors shrink-0">
                        Unlock Scaling Strategy
                    </Link>
                </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <button
                    onClick={() => window.print()}
                    className="btn-secondary w-full sm:w-auto"
                >
                    Download PDF Report
                </button>
                <Link href="/assessment" className="text-sm font-bold text-muted-foreground hover:text-primary underline flex items-center gap-2">
                    Retake Assessment
                </Link>
            </div>
        </div>
    );
}
