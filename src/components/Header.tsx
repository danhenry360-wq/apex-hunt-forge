import { useState } from "react";
import { motion } from "framer-motion";
import { SharkFin } from "./SharkFin";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "THE STACK", command: "$ cd /tools/", href: "#features" },
  { label: "PORTFOLIO", command: "$ cd /hunts/", href: "#projects" },
  { label: "PRICING", command: "$ cat pricing.md", href: "#pricing" },
  { label: "LOGS", command: "$ ls /var/logs", href: "/blog" },
  { label: "MANIFESTO", command: "$ cat README.md", href: "/manifesto" },
];

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-1 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="relative font-mono font-bold text-lg md:text-xl tracking-tight">
              <span className="relative">
                <SharkFin className="absolute -left-1 -top-3 w-4 h-5 text-primary" />
                <span className="text-primary">S</span>
              </span>
              <span className="text-foreground">HARKVIBES</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative scan-line font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className={hoveredItem === item.label ? "opacity-0" : "opacity-100"}>
                  {item.label}
                </span>
                {hoveredItem === item.label && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 text-primary whitespace-nowrap"
                  >
                    {item.command}
                  </motion.span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground font-mono font-semibold text-sm glow-pulse"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            START THE HUNT
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-subtle py-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-mono font-semibold text-sm text-center glow-pulse"
                onClick={() => setMobileMenuOpen(false)}
              >
                START THE HUNT
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
