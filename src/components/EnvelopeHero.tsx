import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface EnvelopeHeroProps {
  onOpen: () => void;
}

const WaxSeal = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="28" fill="#D4AF37" />
    <circle cx="30" cy="30" r="22" fill="#C5A028" />
    <text
      x="30"
      y="35"
      textAnchor="middle"
      fontFamily="'Great Vibes', cursive"
      fontSize="18"
      fill="#FDF8E8"
    >
      A&P
    </text>
  </svg>
);

const EnvelopeHero = ({ onOpen }: EnvelopeHeroProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

          {/* Glow lights */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-glow"
                style={{
                  width: 60 + Math.random() * 80,
                  height: 60 + Math.random() * 80,
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  background: `radial-gradient(circle, hsl(35 60% 80% / 0.4), transparent)`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Envelope */}
          <motion.div
            className="relative z-10 cursor-pointer"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={handleOpen}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {/* Envelope body */}
            <div
              className="relative w-72 h-48 sm:w-80 sm:h-52 rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #F5E6D3, #E8D5C0)",
                boxShadow: "var(--shadow-deep)",
              }}
            >
              {/* Envelope flap */}
              <div
                className="absolute top-0 left-0 right-0 h-24 origin-top"
                style={{
                  background: "linear-gradient(180deg, #EDD9C4, #E8D5C0)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />

              {/* Gold border */}
              <div className="absolute inset-2 rounded border border-gold-bright/30" />

              {/* Inner card peek */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-20 rounded-t" />
            </div>

            {/* Wax Seal */}
            <motion.div
              className="absolute top-16 left-1/2 -translate-x-1/2 z-20"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(212,175,55,0.3)",
                  "0 0 30px rgba(212,175,55,0.6)",
                  "0 0 15px rgba(212,175,55,0.3)",
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ borderRadius: "50%" }}
            >
              <WaxSeal />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.p
            className="relative z-10 mt-12 font-display text-lg sm:text-xl tracking-wide text-foreground/80 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tap to Open Our Invitation
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

          {/* Opening animation */}
          <motion.div className="relative z-10">
            {/* Envelope with flap opening */}
            <div className="relative w-72 h-48 sm:w-80 sm:h-52 rounded-lg overflow-visible" style={{ perspective: "800px" }}>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #F5E6D3, #E8D5C0)",
                  boxShadow: "var(--shadow-deep)",
                }}
              />
              
              {/* Flap opening */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-24 origin-top"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 180 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(180deg, #EDD9C4, #E8D5C0)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Card sliding out */}
              <motion.div
                className="absolute left-6 -translate-x-1/2 w-[85%] h-40 rounded bg-cream border border-gold/20"
                initial={{ bottom: 10, y: 0 }}
                animate={{ y: -200 }}
                transition={{ duration: 2.5, delay: 1.2 }}
                style={{ boxShadow: "var(--shadow-elevated)" }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4">
                  <p className="font-script text-2xl gold-text">Aariv & Priyanshi</p>
                  <p className="font-display text-sm text-foreground/60 mt-2">12 December 2026</p>
                </div>
              </motion.div>
            </div>

            {/* Seal breaking */}
            <motion.div
              className="absolute top-16 left-1/2 -translate-x-1/2"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ borderRadius: "50%" }}
            >
              <WaxSeal />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnvelopeHero;
