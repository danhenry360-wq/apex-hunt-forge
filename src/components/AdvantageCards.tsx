import { motion } from "framer-motion";
import { Zap, Unlink, Fingerprint } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "VIBE CODING.",
    description: "No bloated processes. We ride the AI flow state. 10x velocity. Zero fat.",
    offset: { x: 0, y: 0, rotate: -1 },
  },
  {
    icon: Unlink,
    title: "ZERO SUBSCRIPTIONS.",
    description: "One terminal command. One fee. You own the codebase. No recurring hostages.",
    offset: { x: 20, y: -30, rotate: 1 },
    bleed: true,
  },
  {
    icon: Fingerprint,
    title: "BESPOKE ARCHITECTURE.",
    description: "We delete templates. Every project is a custom predator, built for one ecosystem: yours.",
    offset: { x: -10, y: 10, rotate: 0.5 },
  },
];

export const AdvantageCards = () => {
  return (
    <section id="the-stack" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-primary mb-4 block">// THE PREDATORY ADVANTAGE</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">
            WHY WE <span className="text-gradient-primary">DOMINATE</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              style={{
                transform: `translateX(${advantage.offset.x}px) translateY(${advantage.offset.y}px) rotate(${advantage.offset.rotate}deg)`,
              }}
              className={`relative brutalist-card p-6 md:p-8 group cursor-pointer ${
                advantage.bleed ? "md:-mt-8 md:mb-8 z-10" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary/10 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-mono font-bold text-lg md:text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 pointer-events-none" />
    </section>
  );
};
