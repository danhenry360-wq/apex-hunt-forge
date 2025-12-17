import { motion } from "framer-motion";

const pricingOptions = [
  {
    name: "THE VIBE CHECK",
    command: "$ sharkvibes --project landing-page --fee $4,999",
    price: "$4,999",
    description: "Landing pages, marketing sites, MVPs",
    features: [
      "Full ownership of code",
      "AI-accelerated delivery",
      "72-hour turnaround available",
      "One revision round included",
    ],
  },
  {
    name: "THE APEX PREDATOR",
    command: "$ sharkvibes --project full-app --fee $19,999",
    price: "$19,999",
    description: "Full applications, SaaS platforms, complex systems",
    features: [
      "Everything in Vibe Check",
      "Backend + Database architecture",
      "Authentication & payments",
      "Unlimited revision rounds",
      "30-day post-launch support",
    ],
    featured: true,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-background-matte">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-primary mb-4 block">// TERMS OF THE HUNT</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4">
            SIMPLE. TERMINAL. <span className="text-gradient-primary">FINAL.</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30, rotate: index === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02,
                rotate: 0,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={`relative ${option.featured ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div className={`terminal-window p-0 ${option.featured ? 'border-primary' : 'border-border-subtle'}`}>
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-background">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">{option.name.toLowerCase().replace(/ /g, '-')}.sh</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 md:p-8">
                  {/* Command */}
                  <div className="font-mono text-xs md:text-sm text-primary mb-6 bg-terminal p-4 border border-primary/20 overflow-x-auto">
                    <span className="text-muted-foreground">$</span> {option.command.slice(2)}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="font-mono text-4xl md:text-5xl font-bold text-foreground mb-2">
                      {option.price}
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span className="text-primary font-mono">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    className={`block w-full py-4 text-center font-mono font-semibold transition-colors ${
                      option.featured
                        ? 'bg-primary text-primary-foreground glow-pulse'
                        : 'border border-border-subtle text-foreground hover:border-primary hover:text-primary'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    INITIATE HUNT
                  </motion.a>
                </div>

                {/* Featured Badge */}
                {option.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground font-mono text-xs">
                    MOST LETHAL
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-mono text-sm text-muted-foreground mt-12 md:mt-16"
        >
          // ONE COMMAND. ONE FEE. <span className="text-primary">INFINITE DOMINANCE.</span>
        </motion.p>
      </div>
    </section>
  );
};
