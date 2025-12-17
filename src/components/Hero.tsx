import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingTerminal } from "./TypingTerminal";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const sharkX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const sharkY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const sharkOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.06, 0.02]);
  const sharkScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax Background Shark Silhouette */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ x: sharkX, y: sharkY, scale: sharkScale }}
      >
        <motion.svg
          viewBox="0 0 800 400"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-auto"
          style={{ opacity: sharkOpacity }}
          fill="currentColor"
        >
          {/* Main Shark Body */}
          <path d="M50,200 Q150,120 300,160 Q400,180 500,150 Q600,120 700,160 Q750,180 780,200 Q750,220 700,240 Q600,280 500,250 Q400,220 300,240 Q150,280 50,200 Z" />
          {/* Dorsal Fin */}
          <path d="M350,80 Q380,160 350,160 L320,160 Q290,160 320,80 Z" />
          {/* Tail Fin */}
          <path d="M720,180 L800,120 L800,280 L720,220 Z" />
          {/* Pectoral Fin */}
          <path d="M280,220 L220,300 L300,260 Z" />
          {/* Eye */}
          <circle cx="180" cy="190" r="8" className="fill-primary/20" />
          {/* Gills */}
          <path d="M220,180 L230,200 M235,175 L245,200 M250,172 L260,198" className="stroke-current fill-none stroke-[2]" />
        </motion.svg>
      </motion.div>

      {/* Secondary Swimming Shark (slower parallax) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]),
          y: useTransform(scrollYProgress, [0, 1], ["30%", "10%"]),
        }}
      >
        <svg
          viewBox="0 0 400 200"
          className="absolute bottom-1/4 right-0 w-[60%] h-auto opacity-[0.015]"
          fill="currentColor"
        >
          <path d="M25,100 Q75,60 150,80 Q200,90 250,75 Q300,60 350,80 Q375,90 390,100 Q375,110 350,120 Q300,140 250,125 Q200,110 150,120 Q75,140 25,100 Z" />
          <path d="M175,40 Q190,80 175,80 L160,80 Q145,80 160,40 Z" />
        </svg>
      </motion.div>

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
                href="#contact"
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
