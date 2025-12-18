import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogPosts";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams();
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-mono overflow-hidden">
            <Header />

            <div className="container mx-auto px-4 py-32 md:py-40">
                <div className="max-w-4xl mx-auto">

                    <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        cd ..
                    </Link>

                    <div className="bg-black border border-border-subtle rounded-lg overflow-hidden shadow-2xl">
                        {/* Window Title Bar */}
                        <div className="bg-secondary/50 border-b border-border-subtle p-3 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">
                                vim {post.title}
                            </div>
                            <div className="w-10"></div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-12 min-h-[500px] relative group">
                            {/* Line Numbers */}
                            <div className="absolute top-0 left-0 bottom-0 w-12 border-r border-border-subtle/30 bg-secondary/5 hidden md:flex flex-col items-end py-6 pr-2 text-border-subtle/40 select-none">
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <div key={i} className="text-xs leading-relaxed">{i + 1}</div>
                                ))}
                            </div>

                            {/* Scanner Bar Effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-scanner pointer-events-none z-10" />

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="md:pl-16 prose prose-invert prose-p:text-primary/80 prose-headings:text-primary max-w-none relative z-0"
                            >
                                <pre className="whitespace-pre-wrap font-mono text-sm md:text-base leading-relaxed text-primary/90">
                                    {post.content}
                                </pre>
                            </motion.div>

                            <div className="mt-12 pt-4 border-t border-border-subtle/50 flex flex-wrap justify-between gap-4 text-[10px] md:text-xs text-muted-foreground font-mono">
                                <div className="flex gap-4">
                                    <span className="text-primary bg-primary/10 px-2 uppercase font-black">-- INSERT --</span>
                                    <span>{post.permissions}</span>
                                    <span className="hidden md:inline">UTF-8</span>
                                </div>
                                <div className="flex gap-4">
                                    <span>SIZE: {post.size}</span>
                                    <span>L: 1, C: 1</span>
                                    <span className="text-primary/60">[POST_DECRYPTED]</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
};

export default BlogPost;
