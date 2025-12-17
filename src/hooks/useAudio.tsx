import { createContext, useContext, useState, useCallback, useRef, ReactNode } from "react";

interface AudioContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playKeystroke: () => void;
  playSonar: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

// Generate keystroke sound using Web Audio API
const createKeystrokeSound = (audioContext: AudioContext) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(800 + Math.random() * 200, audioContext.currentTime);
  
  gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.05);
};

// Generate sonar ping sound
const createSonarSound = (audioContext: AudioContext) => {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
};

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const playKeystroke = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      createKeystrokeSound(ctx);
    } catch (e) {
      // Audio not supported
    }
  }, [soundEnabled, getAudioContext]);

  const playSonar = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      createSonarSound(ctx);
    } catch (e) {
      // Audio not supported
    }
  }, [soundEnabled, getAudioContext]);

  return (
    <AudioContext.Provider value={{ soundEnabled, toggleSound, playKeystroke, playSonar }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    // Return no-op functions if provider not found
    return {
      soundEnabled: false,
      toggleSound: () => {},
      playKeystroke: () => {},
      playSonar: () => {},
    };
  }
  return context;
};
