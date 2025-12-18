import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { Link } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";
import { Play } from "lucide-react";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

// Animated preview component for cards without video
const AnimatedPreview = ({ color }: { color: "primary" | "accent" }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scanning line effect */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "200%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-x-0 h-1 ${color === 'primary' ? 'bg-primary/60' : 'bg-accent/60'} blur-sm`}
      />
      
      {/* Pulsing grid overlay */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--${color})/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--${color})/0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{ 
            x: [null, Math.random() * 100 + "%"],
            y: [null, Math.random() * 100 + "%"],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 2 + Math.random() * 2, 
            repeat: Infinity,
            delay: i * 0.3
          }}
          className={`absolute w-2 h-2 rounded-full ${color === 'primary' ? 'bg-primary' : 'bg-accent'}`}
        />
      ))}
      
      {/* Code snippet animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-12 left-4 right-4"
      >
        <div className="font-mono text-[10px] text-primary/60 space-y-1">
          <TypewriterLine text="$ initializing hunt sequence..." delay={0} />
          <TypewriterLine text="$ loading predator modules..." delay={0.5} />
          <TypewriterLine text="$ target acquired ✓" delay={1} />
        </div>
      </motion.div>
    </div>
  );
};

// Typewriter line component
const TypewriterLine = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="overflow-hidden whitespace-nowrap"
    >
      {text}
    </motion.div>
  );
};

// Video preview component
const VideoPreview = ({ videoUrl, isHovered }: { videoUrl: string; isHovered: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Extract video ID and create embed-friendly URL
  const getPreviewUrl = (url: string) => {
    // For demo purposes, using a placeholder video loop
    // In production, you'd use actual preview videos
    return "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4";
  };

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20"
        >
          <video
            ref={videoRef}
            src={getPreviewUrl(videoUrl)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          
          {/* Play indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 left-4 flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Play className="w-3 h-3 text-primary fill-primary" />
            </div>
            <span className="text-xs font-mono text-primary">PREVIEW</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const BentoGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { playSonar } = useAudio();
  const { projects } = useProjects();

  const handleHover = (id: string) => {
    setHoveredId(id);
    playSonar();
  };

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
          {projects.map((project, index) => {
            const hasDetailPage = ["fintech-dashboard", "ai-chatbot-platform", "ecommerce-mvp", "saas-boilerplate"].includes(project.id);
            const isHovered = hoveredId === project.id;

            const CardContent = (
              <>
                {/* Animated Preview on Hover */}
                <AnimatePresence>
                  {isHovered && !project.videoUrl && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10"
                    >
                      <AnimatedPreview color={project.color} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video Preview */}
                {project.videoUrl && (
                  <VideoPreview videoUrl={project.videoUrl} isHovered={isHovered} />
                )}

                {/* Project Title */}
                <div className="flex items-start justify-between mb-4 relative z-30">
                  <h3 className="font-mono font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 ${project.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                    {project.huntTime}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-30">
                  <span className="text-xs font-mono text-muted-foreground border border-border-subtle px-2 py-1 bg-background/80 backdrop-blur-sm">
                    STACK: {project.stack}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground border border-border-subtle px-2 py-1 bg-background/80 backdrop-blur-sm">
                    CLIENT: {project.client}
                  </span>
                </div>

                {/* Description on hover */}
                <AnimatePresence>
                  {isHovered && project.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-xs text-muted-foreground font-mono relative z-30 mb-4"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Kill Shot Reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10
                  }}
                  className="absolute bottom-6 left-6 right-6 z-30"
                >
                  <div className="font-mono text-xs text-primary bg-terminal/95 backdrop-blur-sm p-3 border border-primary/30">
                    <span className="text-muted-foreground">KILL SHOT:</span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.killShot}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Sonar Ping Effect */}
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-primary/40 pointer-events-none z-0"
                  />
                )}

                {/* Blood Pulse Effect */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-2 border-destructive/40 blood-pulse pointer-events-none z-0"
                  />
                )}

                {/* View Case Study Indicator */}
                {hasDetailPage && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    className="absolute top-4 right-4 z-30"
                  >
                    <span className="text-xs font-mono text-primary flex items-center gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      VIEW HUNT →
                    </span>
                  </motion.div>
                )}
              </>
            );

            return (
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
                onHoverStart={() => handleHover(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`${sizeClasses[project.size as keyof typeof sizeClasses]} relative group cursor-pointer`}
              >
                {hasDetailPage ? (
                  <Link
                    to={`/case-study/${project.id}`}
                    className={`block h-full min-h-[200px] md:min-h-[250px] p-0 bg-card border border-border-subtle hover:border-${project.color}/50 transition-all duration-500 overflow-hidden relative`}
                  >
                    {/* Project Image Background */}
                    {project.image && (
                      <div className="absolute inset-0 z-0">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          animate={{
                            opacity: isHovered ? 0.4 : 0.15,
                            scale: isHovered ? 1.1 : 1
                          }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
                      </div>
                    )}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {CardContent}
                    </div>
                  </Link>
                ) : (
                  <div className={`h-full min-h-[200px] md:min-h-[250px] bg-card border border-border-subtle hover:border-${project.color}/50 transition-all duration-500 overflow-hidden relative`}>
                    {/* Project Image Background */}
                    {project.image && (
                      <div className="absolute inset-0 z-0">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          animate={{
                            opacity: isHovered ? 0.4 : 0.15,
                            scale: isHovered ? 1.1 : 1
                          }}
                          transition={{ duration: 0.7 }}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
                      </div>
                    )}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {CardContent}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
