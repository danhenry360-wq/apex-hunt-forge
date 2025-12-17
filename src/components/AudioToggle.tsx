import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";

export const AudioToggle = () => {
  const { soundEnabled, toggleSound } = useAudio();

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-background-matte border border-border-subtle hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={soundEnabled ? "Disable sounds" : "Enable terminal sounds"}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </motion.button>
  );
};
