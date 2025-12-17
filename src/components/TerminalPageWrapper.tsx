import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const TerminalPageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full">
            {children}
            <BootSequence />
        </div>
    );
};

const BootSequence = () => {
    // This component renders the overlay animation on mount (navigation)
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black pointer-events-none flex items-center justify-center font-mono"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, times: [0, 0.2, 1] }}
                className="text-primary text-xl md:text-2xl"
            >
                {">"} SYSTEM_REBOOT...
            </motion.div>
        </motion.div>
    )
}

// We need a separate component to handle the AnimatePresence logic properly
// This wrapper will be used in App.tsx to wrap the Routes
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
            >
                {children}
                <motion.div
                    className="fixed inset-0 z-[60] bg-black pointers-events-none"
                    initial={{ scaleY: 1, transformOrigin: "bottom" }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1, transformOrigin: "top" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Terminal Boot Text Overlay */}
                <motion.div
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] text-primary font-mono text-xl pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {">"} EXECUTING_VIBE...
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
