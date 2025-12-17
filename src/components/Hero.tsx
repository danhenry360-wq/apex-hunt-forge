import { motion } from "framer-motion";
import { TypingTerminal } from "./TypingTerminal";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shark Silhouette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 800 400"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-auto opacity-[0.03] animate-shark-swim"
          fill="currentColor"
        >
          <path d="M100,200 Q200,150 350,180 Q450,200 500,170 Q550,140 600,160 Q650,180 700,200 Q650,220 600,240 Q550,260 500,230 Q450,200 350,220 Q200,250 100,200 Z" />
          <path d="M380,100 Q400,180 380,180 L360,180 Q340,180 360,100 Z" />
          <path d="M550,220 L620,280 L550,260 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 text-xs font-mono text-primary border border-primary/30 mb-4 md:mb-6">
                // VIBE CODING PREDATORS
              </span>
              <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                WE DEVOUR
                <br />
                <span className="text-gradient-primary">COMPLEXITY.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl font-sans leading-relaxed"
            >
              SharkVibes is a <span className="text-primary font-medium">Vibe Coding predator</span>. 
              We use AI acceleration (Cursor, Lovable, v0, Claude) to build bespoke software at{" "}
              <span className="text-accent font-medium">extinction-level velocity</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold glow-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                START THE HUNT →
              </motion.a>
              <motion.a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-border-subtle text-foreground font-mono hover:border-primary hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                VIEW HUNTS
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-8 md:gap-12 pt-4 md:pt-8 border-t border-border-subtle"
            >
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-primary">10x</div>
                <div className="text-xs md:text-sm text-muted-foreground">VELOCITY</div>
              </div>
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-foreground">$0</div>
                <div className="text-xs md:text-sm text-muted-foreground">SUBSCRIPTIONS</div>
              </div>
              <div>
                <div className="font-mono text-2xl md:text-3xl font-bold text-accent">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">OWNERSHIP</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Terminal */}
          <div className="relative lg:pl-8">
            <TypingTerminal />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border border-border-subtle flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
