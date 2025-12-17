import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  `// Building your competitive edge...
export default function ApexComponent() {
  const [speed, setSpeed] = useState('predatory');
  return <YourVision />;
}`,
  `// Deploying at extinction-level velocity...
async function huntPrey(target: Competition) {
  await eliminate(target.weaknesses);
  return <YourDominance />;
}`,
  `// No templates. Pure custom code.
const stack = ['CURSOR', 'LOVABLE', 'CLAUDE'];
stack.forEach(tool => amplify(tool));
return <YourAdvantage />;`,
];

export const TypingTerminal = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < snippet.length) {
        setDisplayedText(snippet.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait then switch to next snippet
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        }, 4000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentSnippet]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="relative w-full max-w-lg"
    >
      {/* Terminal Window */}
      <div className="terminal-window overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-background-matte">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
          <span className="ml-4 text-xs text-muted-foreground font-mono">sharkvibes.tsx</span>
        </div>

        {/* Terminal Content */}
        <div className="p-4 md:p-6 min-h-[200px] md:min-h-[250px]">
          <pre className="text-xs md:text-sm leading-relaxed">
            <code className="text-primary">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 cursor-blink" />
              )}
            </code>
          </pre>
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 border-t border-primary/20 bg-background-matte">
          <span className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">●</span> LIVE | snippet {currentSnippet + 1}/{codeSnippets.length}
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 -z-10" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 -z-10" />
    </motion.div>
  );
};
