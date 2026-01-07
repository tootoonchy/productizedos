"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions, Dimension } from "@/data/assessmentData";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AssessmentWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Dimension>>({});
    const router = useRouter();

    const progress = ((currentStep + 1) / questions.length) * 100;
    const currentQuestion = questions[currentStep];

    const handleSelect = (dimension: Dimension) => {
        setAnswers({ ...answers, [currentQuestion.id]: dimension });
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
    };

    const calculateResult = () => {
        const tallies: Record<string, number> = {};

        // Tally dimensions
        Object.values(answers).forEach(dim => {
            tallies[dim] = (tallies[dim] || 0) + 1;
        });

        // Helper to find max with tiebreaker
        const findMax = (options: string[], tiebreaker: string) => {
            let maxVal = -1;
            let winners: string[] = [];
            options.forEach(opt => {
                const val = tallies[opt] || 0;
                if (val > maxVal) {
                    maxVal = val;
                    winners = [opt];
                } else if (val === maxVal) {
                    winners.push(opt);
                }
            });
            return winners.length === 1 ? winners[0] : tiebreaker;
        };

        const core = findMax(['PI', 'AR', 'CR', 'CO', 'AN'], answers[1] || 'PI');
        const style = findMax(['CA', 'OR', 'MA'], answers[4] || 'CA');
        const stance = findMax(['EF', 'CS'], 'EF');

        const dimensionMap: Record<string, string> = {
            PI: "pioneer", AR: "architect", CR: "craftsman", CO: "connector", AN: "analyst",
            CA: "catalyst", OR: "orchestrator", MA: "maker",
            EF: "effectual", CS: "causal"
        };

        const profileId = `${dimensionMap[core]}-${dimensionMap[style]}-${dimensionMap[stance]}`;
        router.push(`/profile/${profileId}`);
    };

    const isLastStep = currentStep === questions.length - 1;
    const isAnswered = currentQuestion ? !!answers[currentQuestion.id] : false;

    if (!currentQuestion) return null;

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/40 leading-none">
                            {currentQuestion.section}
                        </span>
                        <h2 className="text-sm font-semibold text-primary mt-1">
                            Question {currentStep + 1} of {questions.length}
                        </h2>
                    </div>
                    <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                        {currentQuestion.text}
                    </h3>

                    <div className="grid gap-4">
                        {currentQuestion.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelect(option.dimension)}
                                className={`group flex items-center justify-between p-6 rounded-2xl border-2 text-left transition-all ${answers[currentQuestion.id] === option.dimension
                                    ? "border-primary bg-primary/5 ring-4 ring-primary/5"
                                    : "border-border hover:border-primary/50 hover:bg-muted"
                                    }`}
                            >
                                <span className={`text-lg font-medium ${answers[currentQuestion.id] === option.dimension ? "text-primary" : "text-primary/70"
                                    }`}>
                                    {option.text}
                                </span>
                                <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${answers[currentQuestion.id] === option.dimension ? "border-primary bg-primary" : "border-border"
                                    }`}>
                                    {answers[currentQuestion.id] === option.dimension && (
                                        <div className="h-2 w-2 rounded-full bg-white" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </button>

                {isLastStep ? (
                    <button
                        onClick={calculateResult}
                        disabled={!isAnswered}
                        className="btn-primary flex items-center gap-2 px-8 py-3 disabled:opacity-50"
                    >
                        Reveal My DNA
                        <ArrowRight className="h-4 w-4" />
                    </button>
                ) : (
                    <button
                        onClick={() => setCurrentStep(prev => prev + 1)}
                        disabled={!isAnswered}
                        className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all disabled:opacity-50"
                    >
                        Next
                        <ChevronRight className="h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    );
}
