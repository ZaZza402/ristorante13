import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "scroll-to-top-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Torna su"
      title="Torna su"
    >
      <ChevronUp className="scroll-icon" size={28} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;
