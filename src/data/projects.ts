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
    videoUrl?: string;
    images?: string[];
    // Case Study Details
    metrics?: { label: string; value: string }[];
    challenge?: string;
    approach?: string;
    testimonial?: { quote: string; author: string };
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder (We all know what this is, but it works for demo)
        images: [
            "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000"
        ],
        challenge: "Build a real-time trading dashboard capable of handling 10,000+ concurrent users with sub-100ms latency.",
        approach: "Leveraged AI-assisted development with Cursor to rapidly prototype. Used Supabase real-time subscriptions for live data streaming. Implemented virtualized lists for performance.",
        metrics: [
            { label: "LATENCY", value: "<50ms" },
            { label: "UPTIME", value: "99.99%" },
            { label: "USERS", value: "15K+" },
        ],
        testimonial: {
            quote: "SharkVibes delivered in 3 days what our previous agency quoted 3 months for.",
            author: "CTO, Series A Fintech",
        },
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
