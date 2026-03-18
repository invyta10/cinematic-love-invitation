import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";

const timeline = [
  { year: "2019", title: "First Met", desc: "A chance encounter at a friend's gathering that changed everything. Our eyes met, and we knew something special had begun.", image: story1 },
  { year: "2021", title: "Fell in Love", desc: "What started as a beautiful friendship blossomed into a love neither of us could deny. Every moment together felt like magic.", image: story2 },
  { year: "2024", title: "The Engagement", desc: "Under a sky full of stars, surrounded by loved ones, we made a promise to spend forever together.", image: couple2 },
  { year: "2026", title: "The Wedding", desc: "The day we've been dreaming of — when two souls become one, and a new beautiful chapter begins.", image: couple1 },
];

const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-6 md:gap-12 mb-16 last:mb-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:text-left text-center`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="flex-1">
        <span className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground">{item.year}</span>
        <h3 className="font-display text-2xl sm:text-3xl text-foreground mt-1 mb-3">{item.title}</h3>
        <p className="font-sans text-foreground/60 leading-relaxed max-w-md mx-auto md:mx-0">{item.desc}</p>
      </div>
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden flex-shrink-0" style={{ boxShadow: "var(--shadow-elevated)", filter: "sepia(0.15)" }}>
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

const LoveStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding max-w-4xl mx-auto">
      <motion.p
        className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground text-center mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        Our Journey
      </motion.p>
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our Love Story
      </motion.h2>

      {/* Timeline line */}
      <div className="relative">
        {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2" /> */}
        {timeline.map((item, i) => (
          <TimelineItem key={item.year} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default LoveStory;
