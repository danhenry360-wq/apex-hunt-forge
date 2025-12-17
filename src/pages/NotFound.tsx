import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { SharkFin } from "@/components/SharkFin";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-4"
      >
        {/* Shark Animation */}
        <motion.div
          animate={{ 
            x: [-20, 20, -20],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex justify-center mb-8"
        >
          <SharkFin className="w-16 h-20 text-primary" />
        </motion.div>

        {/* Error Code */}
        <div className="terminal-window inline-block mb-8 text-left">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-accent/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">error.log</span>
          </div>
          <div className="p-6 md:p-8">
            <pre className="font-mono text-sm">
              <span className="text-destructive">ERROR 404:</span>{" "}
              <span className="text-primary">PREY_NOT_FOUND</span>
              {"\n\n"}
              <span className="text-muted-foreground">
                The target you're hunting{"\n"}
                has escaped our waters.
              </span>
            </pre>
          </div>
        </div>

        {/* Message */}
        <h1 className="heading-display text-4xl md:text-5xl mb-4">
          PREY <span className="text-gradient-primary">NOT FOUND</span>
        </h1>
        <p className="text-muted-foreground font-sans mb-8 max-w-md mx-auto">
          The page you're looking for has been devoured or never existed in our hunting grounds.
        </p>

        {/* Action */}
        <motion.button
          onClick={() => navigate("/")}
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold glow-pulse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          RETURN TO THE HUNT →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
