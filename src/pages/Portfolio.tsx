import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["ALL", "AI", "FINTECH", "SAAS", "ECOMMERCE", "MOBILE"];

const Portfolio = () => {
    const [filter, setFilter] = useState("ALL");
    const { projects } = useProjects();

    const filteredProjects = projects.filter(
        (p) => filter === "ALL" || p.category === filter
    );

    return (
        <main className="min-h-screen bg-background text-foreground font-mono overflow-hidden">
            <Header />

            <div className="container mx-auto px-4 py-32 md:py-40">
                {/* Header Section */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-glow mb-4 tracking-tighter">
                            BOUNTY BOARD
                        </h1>
                        <p className="text-muted-foreground/80 max-w-xl mx-auto">
               // SELECT TARGET CATEGORY TO VIEW CONFIRMED KILLS
                        </p>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-xs md:text-sm border transition-all duration-300 ${filter === cat
                                    ? "border-primary bg-primary/10 text-primary glow-pulse"
                                    : "border-border-subtle text-muted-foreground hover:border-primary/50 hover:text-primary"
                                    }`}
                            >
                                [{cat}]
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/case-study/${project.id}`} className="block h-full group">
                                    <div className={`
                    h-full relative bg-card border border-border-subtle p-6 overflow-hidden
                    hover:border-${project.color} transition-colors duration-300
                  `}>
                                        {/* Corner accents */}
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50 opacity-50" />
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 opacity-50" />
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 opacity-50" />
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50 opacity-50" />

                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-xs text-muted-foreground font-mono">
                                                ID: {project.id.toUpperCase().substring(0, 8)}
                                            </div>
                                            <div className={`
                        px-2 py-0.5 text-[10px] font-bold border
                        ${project.color === 'primary'
                                                    ? 'border-primary text-primary bg-primary/10'
                                                    : 'border-accent text-accent bg-accent/10'}
                      `}>
                                                {project.huntTime}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                            {project.description || "Classified project details."}
                                        </p>

                                        {/* Footer */}
                                        <div className="mt-auto border-t border-border-subtle pt-4 flex justify-between items-center text-xs font-mono">
                                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                {">"} VIEW_INTEL
                                            </span>
                                            <span className="text-muted-foreground">
                                                {project.stack.split(" + ")[0]}
                                            </span>
                                        </div>

                                        {/* Glitch Overlay on Hover (Optional, kept simple for now) */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
};

export default Portfolio;
