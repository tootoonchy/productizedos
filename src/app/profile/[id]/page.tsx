import { profiles } from "@/data/assessmentData";
import ProfileResult from "@/components/assessment/ProfileResult";
import Navbar from "@/components/layout/Navbar";
import { notFound } from "next/navigation";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

export default function ProfilePage({ params }: ProfilePageProps) {
    const profile = profiles[params.id];

    if (!profile) {
        // Fallback or 404
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-20">
                <div className="max-w-5xl mx-auto px-6">
                    <ProfileResult profile={profile} />
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return Object.keys(profiles).map((id) => ({
        id: id,
    }));
}
