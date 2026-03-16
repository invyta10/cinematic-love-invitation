import { useState } from "react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-card flex items-center justify-center border gold-border cursor-pointer"
      style={{ boxShadow: "var(--shadow-elevated)" }}
      onClick={() => setPlaying(!playing)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle music"
    >
      {playing ? (
        <div className="flex gap-[2px] items-end h-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-gold-bright"
              animate={{ height: ["8px", "16px", "8px"] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      ) : (
        <span className="text-muted-foreground text-sm">♪</span>
      )}
    </motion.button>
  );
};

export default MusicToggle;
