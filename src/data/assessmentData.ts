export type Dimension = 'PI' | 'AR' | 'CR' | 'CO' | 'AN' | 'CA' | 'OR' | 'MA' | 'EF' | 'CS';

export interface Option {
    text: string;
    dimension: Dimension;
}

export interface Question {
    id: number;
    text: string;
    options: Option[];
    section: string;
}

export const questions: Question[] = [
    {
        id: 1,
        section: "Part 1: What Drives You",
        text: "What excites you most about entrepreneurship?",
        options: [
            { text: "Creating something entirely new that changes how people think or behave", dimension: 'PI' },
            { text: "Building elegant systems that solve complex problems at scale", dimension: 'AR' },
            { text: "Achieving mastery in a domain and creating products of exceptional quality", dimension: 'CR' },
            { text: "Bringing people together and creating communities around shared values", dimension: 'CO' },
            { text: "Using data and analysis to optimize and create competitive advantages", dimension: 'AN' }
        ]
    },
    {
        id: 2,
        section: "Part 1: What Drives You",
        text: "When you imagine your ideal business, what matters most?",
        options: [
            { text: "It disrupts an industry or creates a new market category", dimension: 'PI' },
            { text: "It operates as a well-designed system with clear strategic advantages", dimension: 'AR' },
            { text: "It's known for exceptional quality and technical excellence", dimension: 'CR' },
            { text: "It creates meaningful connections and a strong sense of belonging", dimension: 'CO' },
            { text: "It's built on data-driven insights and continuous optimization", dimension: 'AN' }
        ]
    },
    {
        id: 3,
        section: "Part 1: What Drives You",
        text: "What would make you feel most fulfilled as a founder?",
        options: [
            { text: "Being recognized as a visionary who changed the game", dimension: 'PI' },
            { text: "Creating a lasting organization with enduring strategic value", dimension: 'AR' },
            { text: "Being known as a master of your craft who sets the quality standard", dimension: 'CR' },
            { text: "Building a community or movement that brings people together", dimension: 'CO' },
            { text: "Proving your hypotheses right through data and achieving optimal results", dimension: 'AN' }
        ]
    },
    {
        id: 4,
        section: "Part 2: How You Execute",
        text: "How do you prefer to turn ideas into reality?",
        options: [
            { text: "Launch quickly with a basic version and iterate based on feedback", dimension: 'CA' },
            { text: "Design the system first, then coordinate resources to execute efficiently", dimension: 'OR' },
            { text: "Build it myself to ensure it's done right, staying hands-on throughout", dimension: 'MA' }
        ]
    },
    {
        id: 5,
        section: "Part 2: How You Execute",
        text: "When starting a new project, what's your natural first step?",
        options: [
            { text: "Create a quick prototype or run a small experiment to test the concept", dimension: 'CA' },
            { text: "Map out the resources, people, and processes needed for success", dimension: 'OR' },
            { text: "Dive deep into the technical details and start building core components", dimension: 'MA' }
        ]
    },
    {
        id: 6,
        section: "Part 2: How You Execute",
        text: "How do you scale your impact?",
        options: [
            { text: "Run multiple experiments in parallel and double down on what works", dimension: 'CA' },
            { text: "Build systems, hire great people, and create processes that multiply effort", dimension: 'OR' },
            { text: "Deepen expertise and create products so good they naturally attract attention", dimension: 'MA' }
        ]
    },
    {
        id: 7,
        section: "Part 3: Your Strategic Approach",
        text: "How do you approach strategy and planning?",
        options: [
            { text: "Start with what you have (skills, network, resources) and explore what's possible", dimension: 'EF' },
            { text: "Define a clear goal, analyze the market, and plan the optimal path to achieve it", dimension: 'CS' }
        ]
    },
    {
        id: 8,
        section: "Part 3: Your Strategic Approach",
        text: "When facing uncertainty, what's your instinct?",
        options: [
            { text: "Embrace it as an opportunity—take action, form partnerships, and shape the future", dimension: 'EF' },
            { text: "Reduce it through analysis—gather data, study competitors, and make informed predictions", dimension: 'CS' },
            { text: "Test it quickly—run small experiments to learn what works before committing", dimension: 'EF' },
            { text: "Plan for it—develop contingency plans and risk mitigation strategies", dimension: 'CS' }
        ]
    }
];

export interface Profile {
    id: string;
    name: string;
    tagline: string;
    intro: string;
    strengths: string[];
    challenges: string[];
    businessModels: string[];
}

export const profiles: Record<string, Profile> = {
    "pioneer-catalyst-effectual": {
        id: "pioneer-catalyst-effectual",
        name: "The Visionary Catalyst",
        tagline: "Building the future through bold experiments and relentless adaptation",
        intro: "You thrive in the space between vision and execution, using rapid experimentation to transform bold ideas into reality. Your path is defined by audacious goals and an ability to turn obstacles into opportunities.",
        strengths: ["Visionary Thinking", "Rapid Learning Velocity", "Resilience in Uncertainty", "Opportunity Recognition"],
        challenges: ["Direction Volatility", "Execution Gaps", "Detail Oversight", "Resource Dispersion"],
        businessModels: ["Platform Businesses", "Disruptive Tech Ventures", "Emerging Market Ventures"]
    },
    "craftsman-maker-causal": {
        id: "craftsman-maker-causal",
        name: "The Master Builder",
        tagline: "Creating enduring value through technical excellence and systematic execution",
        intro: "You believe that excellence cannot be rushed. Your journey is defined by technical mastery, systematic execution, and a deep satisfaction that comes from building things that work beautifully.",
        strengths: ["Technical Excellence", "Quality as Competitive Moat", "Systematic Problem Solving", "Execution Reliability"],
        challenges: ["Perfectionism Paralysis", "Speed Disadvantage", "Delegation Difficulty", "Over-Engineering Risk"],
        businessModels: ["Deep Tech Ventures", "Premium Products", "Technical Services"]
    },
    "architect-orchestrator-causal": {
        id: "architect-orchestrator-causal",
        name: "The Strategic Architect",
        tagline: "Building scalable enterprises through systematic design and operational excellence",
        intro: "You see patterns and systems where others see chaos. You excel at designing elegant organizational machines that solve complex problems at scale.",
        strengths: ["Systems Thinking", "Strategic Planning Excellence", "Operational Excellence", "Organizational Design Mastery"],
        challenges: ["Analysis Paralysis", "Rigidity in Uncertainty", "Over-Engineering Systems", "Slow Initial Momentum"],
        businessModels: ["Enterprise SaaS", "Operationally Complex Businesses", "Franchise Networks"]
    },
    // Adding others as placeholders or simplified for now, as PRD is huge
};
