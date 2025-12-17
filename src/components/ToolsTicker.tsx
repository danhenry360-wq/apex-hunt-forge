import { motion } from "framer-motion";

const tools = [
  "CURSOR",
  "LOVABLE",
  "V0",
  "SUPABASE",
  "TAILWIND",
  "OPENAI",
  "CLAUDE",
  "ZED",
  "REACT",
  "TYPESCRIPT",
  "VERCEL",
  "FIGMA",
];

export const ToolsTicker = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border-subtle bg-background-matte relative overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-xs text-primary">// OUR TEETH</span>
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="font-mono text-xs text-muted-foreground">SYSTEM DIAGNOSTICS</span>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background-matte to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background-matte to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 md:gap-6 ticker-scroll"
            style={{ width: "fit-content" }}
          >
            {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 border border-border-subtle bg-background hover:border-primary/50 transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span className="font-mono text-xs md:text-sm text-foreground">[ {tool} ]</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background Bars */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="flex gap-1 h-8">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary"
                animate={{
                  height: [8, Math.random() * 24 + 8, 8],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Status Line */}
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
          <span className="text-primary">●</span>
          <span>ALL SYSTEMS OPERATIONAL</span>
          <span className="text-border-subtle">|</span>
          <span>UPTIME: 99.99%</span>
          <span className="text-border-subtle">|</span>
          <span>LATENCY: &lt;50ms</span>
        </div>
      </div>
    </section>
  );
};
