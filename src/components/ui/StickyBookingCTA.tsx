import { useState, useEffect } from "react";
import { CalendarCheck } from "lucide-react";
import BookingModal from "./BookingModal";

const StickyBookingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 100vh)
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`fixed bottom-8 right-6 z-998 bg-[#1a4031] text-[#c5a059] border border-[#c5a059] font-serif font-bold py-4 px-8 rounded shadow-[0_4px_20px_rgba(26,64,49,0.4)] transition-all duration-500 transform hover:scale-105 hover:bg-[#143326] hover:shadow-[0_6px_25px_rgba(197,160,89,0.3)] flex items-center gap-3 uppercase tracking-widest text-sm group ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <CalendarCheck size={20} className="group-hover:animate-pulse" />
        <span>Prenota un Tavolo</span>
      </button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default StickyBookingCTA;
