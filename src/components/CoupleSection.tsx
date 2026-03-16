import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";

const CoupleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-4 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Together with their families
      </motion.h2>
      <motion.div
        className="w-20 h-[1px] bg-gold-bright/50 mx-auto mb-16"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Bride */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative inline-block mb-6">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto border-4 gold-border" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <img src={brideImg} alt="The Bride - Priya" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="font-script text-lg gold-text">♥</span>
            </div>
          </div>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">The Bride</p>
          <h3 className="font-script text-4xl sm:text-5xl gold-text">Priya</h3>
          <p className="font-display text-lg text-foreground/70 mt-2 italic">Daughter of Mr. & Mrs. Sharma</p>
        </motion.div>

        {/* Groom */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative inline-block mb-6">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto border-4 gold-border" style={{ boxShadow: "var(--shadow-elevated)" }}>
              <img src={groomImg} alt="The Groom - Rahul" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="font-script text-lg gold-text">♥</span>
            </div>
          </div>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">The Groom</p>
          <h3 className="font-script text-4xl sm:text-5xl gold-text">Rahul</h3>
          <p className="font-display text-lg text-foreground/70 mt-2 italic">Son of Mr. & Mrs. Patel</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
