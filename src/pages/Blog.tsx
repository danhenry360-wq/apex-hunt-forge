import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <main className="min-h-screen bg-background text-foreground font-mono overflow-hidden">
            <Header />

            <div className="container mx-auto px-4 py-32 md:py-40">
                <div className="max-w-6xl mx-auto">
                    {/* Tactical Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="text-primary/60 text-xs mb-1 font-mono tracking-[0.3em] uppercase">
                                // SECTOR_04 // INTELLIGENCE_FEED
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase italic">
                                AI <span className="text-primary glow-text">HUNT</span> LOGS
                            </h1>
                            <div className="mt-2 text-muted-foreground/60 text-xs flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                SCANNING FOR RECENT SWARMS...
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden md:block"
                        >
                            <pre className="text-[10px] leading-[8px] text-primary/30 font-mono">
                                {`      .---.
     /     \\
    | () () |
     \\  ^  /
      |||||
      |||||`}
                            </pre>
                        </motion.div>
                    </div>

                    {/* Predator Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="group block relative h-full">
                                    <div className="relative h-full bg-secondary/20 border border-primary/20 p-6 overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]">

                                        {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30" />
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30" />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30" />

                                        {/* Background Scanline */}
                                        <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none" />

                                        {/* Post Metadata Header */}
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-[10px] text-primary/60 font-mono tracking-widest">
                                                ID: {post.id} // {post.permissions}
                                            </span>
                                            <span className="text-[10px] text-accent font-bold px-1 border border-accent/30 bg-accent/5">
                                                {post.author.toUpperCase()}
                                            </span>
                                        </div>

                                        {/* Title Area */}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors leading-tight mb-2 uppercase italic tracking-tighter">
                                                {post.title}
                                            </h3>
                                            <div className="w-12 h-1 bg-primary/20 group-hover:w-full transition-all duration-500" />
                                        </div>

                                        {/* Excerpt Placeholder (First few words of content) */}
                                        <p className="text-sm text-muted-foreground/80 line-clamp-3 mb-6 font-mono leading-relaxed">
                                            {post.content.replace(/[#*`]/g, '').substring(0, 120)}...
                                        </p>

                                        {/* Footer Info */}
                                        <div className="mt-auto flex justify-between items-end border-t border-primary/10 pt-4">
                                            <div className="text-[10px] text-muted-foreground/60">
                                                DATE: {post.date}<br />
                                                SIZE: {post.size}
                                            </div>
                                            <div className="text-primary text-xs font-black opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                                                {">"} VIEW_INTEL
                                            </div>
                                        </div>

                                        {/* Glitch Overlay on Hover */}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                                            <motion.div
                                                className="w-full h-[1px] bg-primary/30 animate-scanner"
                                                initial={false}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Terminal Decoration */}
                    <div className="mt-16 text-primary/30 text-[10px] flex justify-center gap-8 font-mono">
                        <span>LAT: 39.7392° N</span>
                        <span>LONG: 104.9903° W</span>
                        <span className="animate-pulse">STATUS: SYNCED</span>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Blog;
