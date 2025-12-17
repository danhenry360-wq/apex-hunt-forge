import { motion } from "framer-motion";

export const SharkFin = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 24 32"
    className={className}
    fill="currentColor"
    initial={{ y: 2 }}
    animate={{ y: -2 }}
    transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5,
      ease: "easeInOut"
    }}
  >
    <path d="M12 0C12 0 24 20 24 28C24 28 18 32 12 32C6 32 0 28 0 28C0 20 12 0 12 0Z" />
  </motion.svg>
);
