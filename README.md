# Productized OS - Founder DNA Platform

A high-performance, premium assessment platform designed to help founders identify their unique entrepreneurial profile through a scientifically-backed 8-question assessment.

![Assessment Flow](/Users/macstudio/.gemini/antigravity/brain/2b9f2dfc-8679-4078-8384-5d23dc356cc1/verify_assessment_flow_retry_1767730862344.webp)

## 🚀 Overview

The **Founder DNA Platform** is the core component of the Productized OS ecosystem. It evaluates founders across three critical dimensions to provide a comprehensive DNA profile:

1.  **Motivational Core**: What truly drives your entrepreneurial spirit (Pioneer, Architect, Craftsman, Connector, Analyst).
2.  **Action Style**: How you naturally turn ideas into reality (Catalyst, Orchestrator, Maker).
3.  **Strategic Stance**: Your fundamental approach to navigating uncertainty (Effectual vs. Causal).

## ✨ Key Features

- **Premium Landing Page**: 12+ sections of conversion-optimized content with smooth Framer Motion animations.
- **Dynamic Assessment**: A multi-step quiz experience with real-time scoring logic.
- **Founder Profiles**: 16 unique DNA profiles with detailed insights into strengths, challenges, and ideal business models.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.
- **Glassmorphism Aesthetic**: Modern, high-end UI/UX built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
src/
├── app/               # Next.js App Router pages
│   ├── assessment/    # Assessment Wizard page
│   ├── profile/       # Dynamic profile result pages
│   └── page.tsx       # Main landing page
├── components/        # Reusable UI components
│   ├── assessment/    # Core assessment logic & UI
│   ├── layout/        # Navbar, Footer, etc.
│   └── sections/      # Landing page sections
├── data/              # Static content & assessment logic
└── lib/               # Utility functions
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tootoonchy/productizedos.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗺️ Roadmap

- [ ] Email report generation (PDF).
- [ ] User authentication and dashboard.
- [ ] Community forum integration.
- [ ] Advanced AI-driven founder coaching.

## 📄 License

Proprietary - Productized OS
