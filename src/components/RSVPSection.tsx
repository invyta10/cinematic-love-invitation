import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", message: "" });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section ref={ref} className="section-padding max-w-2xl mx-auto text-center bg-secondary/20 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: ["#D4AF37", "#E8B4C8", "#B8D4E3", "#F5E6D3", "#C5A028"][i % 5],
                }}
                initial={{ top: "50%", opacity: 1, scale: 0 }}
                animate={{
                  top: `${-10 + Math.random() * 120}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: [1, 1, 0],
                  scale: [0, 1, 0.5],
                  rotate: Math.random() * 720,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 + Math.random(), ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Be Our Guest
      </motion.p>
      <motion.h2
        className="font-display text-3xl sm:text-4xl mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        RSVP
      </motion.h2>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div>
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="wedding-input"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="10"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="wedding-input"
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3 block">Will you attend?</label>
              <div className="flex gap-4">
                {["yes", "no"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm({ ...form, attending: opt })}
                    className={`flex-1 py-3 rounded-lg font-sans text-sm tracking-[0.1em] uppercase transition-all duration-300 border ${
                      form.attending === opt
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {opt === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Message (Optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="wedding-input resize-none h-24"
                placeholder="Share your wishes..."
              />
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="wedding-btn">
                Send RSVP
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <span className="text-5xl mb-6 block">💌</span>
            <p className="font-script text-3xl sm:text-4xl gold-text mb-4">Thank You!</p>
            <p className="font-display text-xl text-foreground/70 italic">
              Your presence is our greatest gift.
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-4">
              We can't wait to celebrate with you, {form.name}!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVPSection;
