import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { Link } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";



const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
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

            const CardContent = (
              <>
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
                    {project.killShot}
                  </div>
                </motion.div>

                {/* Sonar Ping Effect */}
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-primary/40 pointer-events-none"
                  />
                )}

                {/* Blood Pulse Effect */}
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-2 border-destructive/40 blood-pulse pointer-events-none"
                  />
                )}

                {/* View Case Study Indicator */}
                {hasDetailPage && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-primary">VIEW →</span>
                  </div>
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
                    className={`block h-full min-h-[200px] md:min-h-[250px] p-6 bg-card border border-border-subtle hover:border-${project.color}/50 transition-all duration-300 overflow-hidden relative`}
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className={`h-full min-h-[200px] md:min-h-[250px] p-6 bg-card border border-border-subtle hover:border-${project.color}/50 transition-all duration-300 overflow-hidden relative`}>
                    {CardContent}
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
