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
                        <div className="p-6 md:p-12 min-h-[500px] relative">
                            <div className="absolute top-0 left-0 bottom-0 w-12 border-r border-border-subtle/30 bg-secondary/10 hidden md:flex flex-col items-end py-6 pr-2 text-border-subtle select-none">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="text-xs leading-relaxed opacity-50">{i + 1}</div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="md:pl-16 prose prose-invert prose-p:text-primary/80 prose-headings:text-primary max-w-none"
                            >
                                <pre className="whitespace-pre-wrap font-mono text-sm md:text-base leading-relaxed">
                                    {post.content}
                                </pre>
                            </motion.div>

                            <div className="mt-12 pt-4 border-t border-border-subtle flex justify-between text-xs text-muted-foreground">
                                <span>-- INSERT --</span>
                                <span>{post.size}</span>
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
