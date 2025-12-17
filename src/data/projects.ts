export interface Project {
    id: string;
    title: string;
    category: "AI" | "SAAS" | "MOBILE" | "ECOMMERCE" | "FINTECH" | "OTHER";
    size: "large" | "medium" | "small";
    huntTime: string;
    stack: string;
    client: string;
    killShot: string;
    color: "primary" | "accent";
    description?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "fintech-dashboard",
        title: "FINTECH DASHBOARD",
        category: "FINTECH",
        size: "large",
        huntTime: "72H",
        stack: "CURSOR + SUPABASE",
        client: "STEALTH STARTUP",
        killShot: "$ lovable deploy --prod --scale infinite",
        color: "primary",
        description: "Real-time high frequency trading visualization interface.",
    },
    {
        id: "ai-chatbot-platform",
        title: "AI CHATBOT PLATFORM",
        category: "AI",
        size: "medium",
        huntTime: "48H",
        stack: "V0 + OPENAI",
        client: "ENTERPRISE",
        killShot: "$ npx create-shark-app@latest",
        color: "accent",
        description: "Autonomous customer support agent swarms.",
    },
    {
        id: "ecommerce-mvp",
        title: "E-COMMERCE MVP",
        category: "ECOMMERCE",
        size: "medium",
        huntTime: "96H",
        stack: "LOVABLE + STRIPE",
        client: "DTC BRAND",
        killShot: "$ stripe listen --forward-to /api/prey",
        color: "primary",
        description: "Headless commerce engine for high-velocity brands.",
    },
    {
        id: "saas-boilerplate",
        title: "SAAS BOILERPLATE",
        category: "SAAS",
        size: "small",
        huntTime: "24H",
        stack: "CURSOR",
        client: "INDIE",
        killShot: "$ git commit -m 'apex'",
        color: "accent",
        description: "The ultimate starting point for hunters.",
    },
    {
        id: "portfolio-site",
        title: "PORTFOLIO SITE",
        category: "OTHER",
        size: "small",
        huntTime: "12H",
        stack: "V0 + TAILWIND",
        client: "CREATIVE",
        killShot: "$ vercel --prod",
        color: "primary",
        description: "This very interface. Self-replicating excellence.",
    },
    {
        id: "api-gateway",
        title: "API GATEWAY",
        category: "SAAS",
        size: "small",
        huntTime: "36H",
        stack: "SUPABASE",
        client: "STARTUP",
        killShot: "$ curl -X POST /devour",
        color: "accent",
        description: "High-throughput request ingestion system.",
    },
    {
        id: "mobile-app",
        title: "MOBILE APP",
        category: "MOBILE",
        size: "small",
        huntTime: "120H",
        stack: "REACT NATIVE",
        client: "FUNDED",
        killShot: "$ expo start --hunt",
        color: "primary",
        description: "Cross-platform predation tool.",
    },
];
