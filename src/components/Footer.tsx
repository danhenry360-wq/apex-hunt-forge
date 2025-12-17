import { motion } from "framer-motion";

const systemStatus = {
  status: "hunting",
  current_prey: "your_competition",
  location: "global",
  response_time: "< 24h",
  contact: "attack@sharkvibes.dev",
};

export const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-border-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Terminal Output */}
          <div className="terminal-window">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-background-matte">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">system_status.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8">
              <div className="font-mono text-sm">
                <p className="text-muted-foreground mb-4">
                  <span className="text-primary">$</span> system_status --agency sharkvibes
                </p>
                <pre className="text-primary leading-relaxed overflow-x-auto">
{`{
  "status": "${systemStatus.status}",
  "current_prey": "${systemStatus.current_prey}",
  "location": "${systemStatus.location}",
  "response_time": "${systemStatus.response_time}",
  "contact": "${systemStatus.contact}"
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-12 text-xs font-mono text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
            <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="mailto:attack@sharkvibes.dev" className="hover:text-primary transition-colors">EMAIL</a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 md:mt-12">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} SHARKVIBES. <span className="text-primary">ALL PREY RESERVED.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
