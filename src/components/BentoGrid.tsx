import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "FINTECH DASHBOARD",
    size: "large",
    huntTime: "72H",
    stack: "CURSOR + SUPABASE",
    client: "STEALTH STARTUP",
    killShot: "$ lovable deploy --prod --scale infinite",
    color: "primary",
  },
  {
    id: 2,
    title: "AI CHATBOT PLATFORM",
    size: "medium",
    huntTime: "48H",
    stack: "V0 + OPENAI",
    client: "ENTERPRISE",
    killShot: "$ npx create-shark-app@latest",
    color: "accent",
  },
  {
    id: 3,
    title: "E-COMMERCE MVP",
    size: "medium",
    huntTime: "96H",
    stack: "LOVABLE + STRIPE",
    client: "DTC BRAND",
    killShot: "$ stripe listen --forward-to /api/prey",
    color: "primary",
  },
  {
    id: 4,
    title: "SAAS BOILERPLATE",
    size: "small",
    huntTime: "24H",
    stack: "CURSOR",
    client: "INDIE",
    killShot: "$ git commit -m 'apex'",
    color: "accent",
  },
  {
    id: 5,
    title: "PORTFOLIO SITE",
    size: "small",
    huntTime: "12H",
    stack: "V0 + TAILWIND",
    client: "CREATIVE",
    killShot: "$ vercel --prod",
    color: "primary",
  },
  {
    id: 6,
    title: "API GATEWAY",
    size: "small",
    huntTime: "36H",
    stack: "SUPABASE",
    client: "STARTUP",
    killShot: "$ curl -X POST /devour",
    color: "accent",
  },
  {
    id: 7,
    title: "MOBILE APP",
    size: "small",
    huntTime: "120H",
    stack: "REACT NATIVE",
    client: "FUNDED",
    killShot: "$ expo start --hunt",
    color: "primary",
  },
];

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export const BentoGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-primary mb-4 block">// RECENT HUNTS</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">
            CONQUERED <span className="text-gradient-accent">PREY</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:translate-x-[2%]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className={`${sizeClasses[project.size as keyof typeof sizeClasses]} relative group cursor-pointer`}
            >
              <div className={`h-full min-h-[200px] md:min-h-[250px] p-6 bg-card border border-border-subtle hover:border-${project.color}/50 transition-all duration-300 overflow-hidden`}>
                {/* Project Title */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-mono font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 ${project.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                    {project.huntTime}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono text-muted-foreground border border-border-subtle px-2 py-1">
                    STACK: {project.stack}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground border border-border-subtle px-2 py-1">
                    CLIENT: {project.client}
                  </span>
                </div>

                {/* Kill Shot Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 10
                  }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="font-mono text-xs text-primary bg-terminal p-3 border border-primary/30">
                    <span className="text-muted-foreground">KILL SHOT:</span>
                    <br />
                    <TypewriterText text={project.killShot} isActive={hoveredId === project.id} />
                  </div>
                </motion.div>

                {/* Blood Pulse Effect */}
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-2 border-destructive/40 blood-pulse pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TypewriterText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayText, setDisplayText] = useState("");

  useState(() => {
    if (isActive) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayText("");
    }
  });

  return <span>{isActive ? displayText || text : text}</span>;
};
