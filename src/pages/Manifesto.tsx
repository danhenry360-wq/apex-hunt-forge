import { AsciiShark } from "@/components/AsciiShark";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Manifesto = () => {
    const [text, setText] = useState("");
    const fullText = \`> INITIALIZING MANIFESTO PROTOCOL...
> CONNECTING TO VIBE STREAM...
> ACCESS GRANTED.

THE PHILOSOPHY:
We don't just write code. We hunt complexity.
In a world of abundant intelligence, speed is the only predator.
We harness the raw power of AI to iterate at the speed of thought.

THE METHOD:
1. DETECT: Identify the bottleneck.
2. AMPLIFY: Leverage AI leverage.
3. DEVOUR: Ship features before they are requested.

We are not just developers. 
We are VIBE CODERS.
The future belongs to the fast.

> END TRANSMISSION.
\`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden font-mono">
      <Header />
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: ASCII Art */}
          <div className="flex justify-center lg:justify-end">
            <div className="p-8 border border-primary/20 rounded-lg bg-black/40 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="text-primary glow-pulse">
                <AsciiShark />
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Text */}
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-md border border-border-subtle h-[500px] overflow-y-auto font-mono text-sm md:text-base shadow-inner scrollbar-hide">
              <div className="whitespace-pre-wrap text-primary/80">
                {text}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-4 bg-primary ml-1 align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Manifesto;
