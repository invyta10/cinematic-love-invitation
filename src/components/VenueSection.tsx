import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import venueImg from "@/assets/venue.jpg";

const VenueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding max-w-5xl mx-auto bg-secondary/20">
      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Location
      </motion.p>
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Wedding Venue
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevated)" }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src={venueImg} alt="Royal Palace Garden" className="w-full h-64 sm:h-80 object-cover" />
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">Royal Palace Garden</h3>
          <p className="font-sans text-muted-foreground mb-6">Ahmedabad, Gujarat, India</p>
          <p className="font-sans text-foreground/60 leading-relaxed mb-8">
            A majestic venue adorned with lush gardens, ornate architecture, and the warmth of timeless elegance.
            The perfect backdrop for our celebration of love.
          </p>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden mb-6" style={{ boxShadow: "var(--shadow-resting)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7091427!2d72.43965529609375!3d23.020473500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Venue Location"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Ahmedabad,Gujarat,India"
            target="_blank"
            rel="noopener noreferrer"
            className="wedding-btn"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
