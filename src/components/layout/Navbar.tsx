"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Productized OS
                    </Link>
                    <div className="hidden items-center gap-6 lg:flex">
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Product</Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Features</Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Community</Link>
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Pricing</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/assessment" className="btn-secondary text-sm">
                        Find Your DNA
                    </Link>
                    <button className="text-sm font-medium text-muted-foreground hover:text-primary">Log in</button>
                    <button className="btn-primary flex items-center gap-2 text-sm">
                        Sign up
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
