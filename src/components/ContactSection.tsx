import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="font-mono text-xs text-primary">// INITIATE CONTACT</span>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">
              READY TO <span className="text-gradient-primary">HUNT?</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Describe your prey. We'll analyze the ecosystem, calculate the approach vector, 
              and strike with precision. Response time: under 24 hours.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-border-subtle">
                <div className="font-mono text-2xl font-bold text-primary">&lt;24h</div>
                <div className="text-xs text-muted-foreground">RESPONSE TIME</div>
              </div>
              <div className="p-4 border border-border-subtle">
                <div className="font-mono text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">SECURE COMMS</div>
              </div>
            </div>

            {/* Terminal Status */}
            <div className="font-mono text-xs text-muted-foreground space-y-1 pt-4">
              <p><span className="text-primary">●</span> HUNTING_STATUS: ACTIVE</p>
              <p><span className="text-primary">●</span> AVAILABLE_SLOTS: LIMITED</p>
              <p><span className="text-primary">●</span> ENCRYPTION: AES-256</p>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
