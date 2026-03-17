import { motion } from "framer-motion";

const WeddingFooter = () => {
  return (
    <footer className="section-padding text-center bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-3xl sm:text-4xl gold-text mb-4">Aariv & Priyanshi</p>
        <p className="font-display text-lg text-foreground/60 italic mb-8">
          We look forward to celebrating with you
        </p>
        <div className="w-16 h-[1px] bg-gold-bright/30 mx-auto mb-8" />

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { label: "Instagram", icon: "📷" },
            { label: "Facebook", icon: "📘" },
            { label: "Twitter", icon: "🐦" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <span className="text-sm">{social.icon}</span>
            </a>
          ))}
        </div>

        <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">
          12 December 2026 • Ahmedabad, India
        </p>
      </motion.div>
    </footer>
  );
};

export default WeddingFooter;
