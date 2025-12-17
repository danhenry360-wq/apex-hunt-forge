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
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-primary/80">
                        <span className="text-accent">$</span> ls -lah /var/logs/system
                    </div>

                    <div className="bg-terminal/50 border border-primary/20 rounded-md p-6 backdrop-blur-sm shadow-xl">
                        {/* Table Header (Display only on md+) */}
                        <div className="hidden md:grid grid-cols-12 gap-4 text-xs text-muted-foreground mb-4 border-b border-border-subtle pb-2">
                            <div className="col-span-2">PERMISSIONS</div>
                            <div className="col-span-2">USER</div>
                            <div className="col-span-2">SIZE</div>
                            <div className="col-span-2">DATE</div>
                            <div className="col-span-4">NAME</div>
                        </div>

                        <div className="space-y-2">
                            {BLOG_POSTS.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="grid md:grid-cols-12 gap-2 md:gap-4 group hover:bg-primary/5 p-2 rounded transition-colors items-center"
                                    >
                                        {/* Mobile: Stacked, Desktop: Grid */}
                                        <div className="col-span-2 text-xs text-muted-foreground font-mono md:block hidden">
                                            {post.permissions}
                                        </div>
                                        <div className="col-span-2 text-xs text-accent font-mono md:block hidden">
                                            {post.author}
                                        </div>
                                        <div className="col-span-2 text-xs text-muted-foreground md:block hidden">
                                            {post.size}
                                        </div>
                                        <div className="col-span-2 text-xs text-muted-foreground">
                                            {post.date}
                                        </div>
                                        <div className="col-span-4 text-sm md:text-base font-bold text-primary group-hover:underline decoration-primary/50 underline-offset-4">
                                            {post.title}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 text-primary animate-pulse"
                            >
                                $ <span className="w-2 h-4 bg-primary inline-block align-middle ml-1" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
};

export default Blog;
