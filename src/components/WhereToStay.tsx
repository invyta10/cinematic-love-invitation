import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hotels = [
  { name: "Hotel Taj Palace", distance: "2 km from venue", rating: "★★★★★", desc: "Luxury accommodations with world-class amenities and traditional hospitality." },
  { name: "Grand Residency Hotel", distance: "1.5 km from venue", rating: "★★★★", desc: "Elegant rooms with modern comforts and easy access to the wedding venue." },
];

const WhereToStay = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding max-w-4xl mx-auto">
      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Accommodations
      </motion.p>
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Where To Stay
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {hotels.map((hotel, i) => (
          <motion.div
            key={hotel.name}
            className="wedding-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <p className="font-sans text-xs gold-text mb-3">{hotel.rating}</p>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">{hotel.name}</h3>
            <p className="font-sans text-sm text-muted-foreground mb-4">{hotel.distance}</p>
            <p className="font-sans text-sm text-foreground/60 leading-relaxed">{hotel.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhereToStay;
