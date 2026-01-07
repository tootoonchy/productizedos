import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import PainPoints from "@/components/sections/PainPoints";
import Introduction from "@/components/sections/Introduction";
import Framework from "@/components/sections/Framework";
import Testimonials from "@/components/sections/Testimonials";
import Suitability from "@/components/sections/Suitability";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Founder from "@/components/sections/Founder";
import CTA from "@/components/sections/CTA";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <Stats />
            <PainPoints />
            <Introduction />
            <Framework />
            <Testimonials />
            <Suitability />
            <Pricing />
            <FAQ />
            <Founder />
            <CTA />
        </main>
    );
}
