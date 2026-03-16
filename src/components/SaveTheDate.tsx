import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-12-12T19:00:00");

const SaveTheDate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="section-padding text-center bg-secondary/30">
      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        Save The Date
      </motion.p>

      <motion.h2
        className="font-script text-5xl sm:text-7xl gold-text mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Rahul & Priya
      </motion.h2>

      <motion.p
        className="font-display text-xl sm:text-2xl text-foreground/70 italic mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        12 December 2026 • 7:00 PM
      </motion.p>

      {/* Countdown */}
      <motion.div
        className="flex justify-center gap-3 sm:gap-6 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="wedding-card px-4 sm:px-6 py-4 sm:py-5 min-w-[70px] sm:min-w-[90px]"
          >
            <span className="block font-sans text-2xl sm:text-4xl font-semibold text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="block font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
