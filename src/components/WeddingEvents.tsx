import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  { name: "Haldi Ceremony", date: "10 December 2026", time: "10:00 AM", icon: "☀️", desc: "A vibrant celebration with turmeric blessings" },
  { name: "Mehendi", date: "11 December 2026", time: "5:00 PM", icon: "🌿", desc: "Intricate henna artistry and joyful music" },
  { name: "Wedding Ceremony", date: "12 December 2026", time: "7:00 PM", icon: "💍", desc: "The sacred union of two souls" },
  { name: "Reception", date: "13 December 2026", time: "8:00 PM", icon: "✨", desc: "An evening of celebration and togetherness" },
];

const WeddingEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding max-w-5xl mx-auto bg-secondary/20">
      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Celebrations
      </motion.p>
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Wedding Events
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={event.name}
            className="wedding-card p-6 sm:p-8 group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <span className="text-3xl mb-4 block">{event.icon}</span>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1">{event.name}</h3>
            <p className="font-sans text-sm tracking-[0.1em] uppercase gold-text mb-3">
              {event.time} • {event.date}
            </p>
            <p className="font-sans text-sm text-muted-foreground">{event.desc}</p>
            <motion.div
              className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="font-sans text-xs tracking-[0.15em] uppercase gold-text">
                Royal Palace Garden, Ahmedabad
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WeddingEvents;
