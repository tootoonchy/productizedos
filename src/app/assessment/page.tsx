import Navbar from "@/components/layout/Navbar";
import AssessmentWizard from "@/components/assessment/AssessmentWizard";

export default function AssessmentPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
                            Discover Your Founder DNA
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Identify your unique combination of motivational core, action style, and strategic stance.
                        </p>
                    </div>
                    <AssessmentWizard />
                </div>
            </div>
        </main>
    );
}
