import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeHero from "@/components/EnvelopeHero";
import FloatingPetals from "@/components/FloatingPetals";
import CoupleSection from "@/components/CoupleSection";
import SaveTheDate from "@/components/SaveTheDate";
import LoveStory from "@/components/LoveStory";
import WeddingEvents from "@/components/WeddingEvents";
import PhotoGallery from "@/components/PhotoGallery";
import VenueSection from "@/components/VenueSection";
import WhereToStay from "@/components/WhereToStay";
import RSVPSection from "@/components/RSVPSection";
import WeddingFooter from "@/components/WeddingFooter";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!envelopeOpen && (
          <EnvelopeHero onOpen={() => setEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {envelopeOpen && (
        <>
          <FloatingPetals count={12} />
          <MusicToggle />
          <CoupleSection />
          <SaveTheDate />
          <LoveStory />
          <WeddingEvents />
          <PhotoGallery />
          <VenueSection />
          <WhereToStay />
          <RSVPSection />
          <WeddingFooter />
        </>
      )}
    </div>
  );
};

export default Index;
