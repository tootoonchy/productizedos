import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F5F5F5",
                surface: "#FFFFFF",
                primary: {
                    DEFAULT: "#1A1A1A",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F5F5F5",
                    foreground: "#1A1A1A",
                },
                border: "#E5E5E5",
                muted: {
                    DEFAULT: "#F0F0F0",
                    foreground: "#666666",
                },
            },
            borderRadius: {
                lg: "12px",
                md: "8px",
                sm: "4px",
            },
            boxShadow: {
                card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
                elevated: "0 4px 12px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [],
};
export default config;
