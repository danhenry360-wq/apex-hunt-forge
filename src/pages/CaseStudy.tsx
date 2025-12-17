import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Code, Users, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projects = [
  {
    id: "fintech-dashboard",
    title: "FINTECH DASHBOARD",
    client: "STEALTH STARTUP",
    huntTime: "72H",
    stack: ["CURSOR", "SUPABASE", "TAILWIND", "REACT"],
    challenge: "Build a real-time trading dashboard capable of handling 10,000+ concurrent users with sub-100ms latency.",
    approach: "Leveraged AI-assisted development with Cursor to rapidly prototype. Used Supabase real-time subscriptions for live data streaming. Implemented virtualized lists for performance.",
    killShot: "$ lovable deploy --prod --scale infinite",
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
    client: "ENTERPRISE",
    huntTime: "48H",
    stack: ["V0", "OPENAI", "VERCEL", "POSTGRES"],
    challenge: "Create a multi-tenant AI chatbot platform with custom training capabilities for enterprise clients.",
    approach: "Used V0 for rapid UI generation, integrated OpenAI's API with custom fine-tuning pipelines. Built a robust multi-tenant architecture with isolated data stores.",
    killShot: "$ npx create-shark-app@latest --ai",
    metrics: [
      { label: "RESPONSE", value: "<2s" },
      { label: "ACCURACY", value: "94%" },
      { label: "TENANTS", value: "50+" },
    ],
    testimonial: {
      quote: "The speed was unbelievable. They understood our vision immediately.",
      author: "VP Engineering, Fortune 500",
    },
  },
  {
    id: "ecommerce-mvp",
    title: "E-COMMERCE MVP",
    client: "DTC BRAND",
    huntTime: "96H",
    stack: ["LOVABLE", "STRIPE", "SUPABASE", "TAILWIND"],
    challenge: "Launch a fully functional e-commerce platform with inventory management, payments, and analytics in under a week.",
    approach: "Utilized Lovable for rapid full-stack development. Integrated Stripe for seamless payments. Built custom analytics dashboard for real-time sales tracking.",
    killShot: "$ stripe listen --forward-to /api/prey",
    metrics: [
      { label: "LAUNCH", value: "4 days" },
      { label: "CONV RATE", value: "4.2%" },
      { label: "GMV", value: "$500K+" },
    ],
    testimonial: {
      quote: "From concept to taking orders in 4 days. Absolutely lethal execution.",
      author: "Founder, DTC Brand",
    },
  },
  {
    id: "saas-boilerplate",
    title: "SAAS BOILERPLATE",
    client: "INDIE HACKER",
    huntTime: "24H",
    stack: ["CURSOR", "NEXT.JS", "PRISMA", "STRIPE"],
    challenge: "Create a production-ready SaaS boilerplate with auth, billing, and team management.",
    approach: "AI-accelerated development with Cursor. Pre-built authentication flows, Stripe subscription management, and role-based access control.",
    killShot: "$ git commit -m 'apex predator ready'",
    metrics: [
      { label: "SETUP", value: "<5min" },
      { label: "FEATURES", value: "50+" },
      { label: "DOWNLOADS", value: "2K+" },
    ],
    testimonial: {
      quote: "Saved me months of boilerplate work. Started building features day one.",
      author: "Indie Maker",
    },
  },
];

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-display text-4xl mb-4">PREY NOT FOUND</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary font-mono hover:underline"
          >
            $ cd /home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <article className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/#portfolio")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            $ cd /hunts
          </motion.button>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-primary mb-4 block">
              // CASE_STUDY_{project.id.toUpperCase().replace(/-/g, "_")}
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">CLIENT:</span>
                <span className="font-mono">{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">HUNT TIME:</span>
                <span className="font-mono text-primary">{project.huntTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_CHALLENGE</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.section>

              {/* Approach */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_APPROACH</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </motion.section>

              {/* Kill Shot */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_KILL_SHOT</h2>
                <div className="terminal-window p-6">
                  <code className="text-primary font-mono">{project.killShot}</code>
                </div>
              </motion.section>

              {/* Testimonial */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-primary pl-6"
              >
                <blockquote className="text-xl md:text-2xl font-light mb-4 italic">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground font-mono not-italic">
                  — {project.testimonial.author}
                </cite>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="terminal-window p-6"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary">$</span> cat stack.json
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="terminal-window p-6"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary">$</span> get_metrics
                </h3>
                <div className="space-y-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{metric.label}</span>
                      <span className="font-mono text-lg text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/#contact"
                  className="block w-full py-4 bg-primary text-primary-foreground font-mono font-semibold text-center glow-pulse"
                >
                  START YOUR HUNT →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default CaseStudy;
