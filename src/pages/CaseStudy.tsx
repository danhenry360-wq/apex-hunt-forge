import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Code, Users, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";



import { PROJECTS } from "@/data/projects";

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-display text-4xl mb-4">PREY NOT FOUND</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary font-mono hover:underline"
          >
            $ cd /home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/#portfolio")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            $ cd /hunts
          </motion.button>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-primary mb-4 block">
              // CASE_STUDY_{project.id.toUpperCase().replace(/-/g, "_")}
            </span>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">CLIENT:</span>
                <span className="font-mono">{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">HUNT TIME:</span>
                <span className="font-mono text-primary">{project.huntTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_CHALLENGE</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.section>

              {/* Approach */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_APPROACH</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.approach || "Classified methodology."}
                </p>
              </motion.section>

              {/* VIDEO SECTION */}
              {project.videoUrl && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-mono text-sm text-primary mb-4">// TACTICAL_REPLAY</h2>
                  <div className="relative aspect-video bg-black border border-primary/30 rounded-sm overflow-hidden shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.videoUrl}
                      title="Vibe Coding Session"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    ></iframe>
                    {/* CRT Scanline Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-[0.03] bg-repeat"></div>
                  </div>
                </motion.section>
              )}

              {/* IMAGE GALLERY SECTION */}
              {project.images && project.images.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-mono text-sm text-primary mb-4">// SURVEILLANCE_EVIDENCE</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <div key={i} className="group relative aspect-video bg-muted border border-border-subtle overflow-hidden cursor-zoom-in">
                        <img src={img} alt={`Evidence ${i}`} className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Kill Shot */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-mono text-sm text-primary mb-4">// THE_KILL_SHOT</h2>
                <div className="terminal-window p-6">
                  <code className="text-primary font-mono">{project.killShot}</code>
                </div>
              </motion.section>

              {/* Testimonial */}
              {project.testimonial && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-6"
                >
                  <blockquote className="text-xl md:text-2xl font-light mb-4 italic">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground font-mono not-italic">
                    — {project.testimonial.author}
                  </cite>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="terminal-window p-6"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary">$</span> cat stack.json
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(" + ").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="terminal-window p-6"
              >
                <h3 className="font-mono text-xs text-muted-foreground mb-4">
                  <span className="text-primary">$</span> get_metrics
                </h3>
                {project.metrics ? (
                  <div className="space-y-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                        <span className="font-mono text-lg text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground italic">
                        // No metrics available for this cycle.
                  </div>
                )}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="/#contact"
                  className="block w-full py-4 bg-primary text-primary-foreground font-mono font-semibold text-center glow-pulse"
                >
                  START YOUR HUNT →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default CaseStudy;
