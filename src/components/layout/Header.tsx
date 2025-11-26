import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BookingModal from "../ui/BookingModal";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Handle active section
      const sections = ["home", "storia", "locale", "photo", "contatti"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle navbar transparency
      // Switch to solid when content reaches the navbar (approx 100vh - 100px)
      const heroHeight = window.innerHeight;
      // We want the navbar to turn solid slightly BEFORE the content hits it, or right when it does.
      // Since content starts at 100vh, and navbar is at top.
      // When scrollY is 0, content is at 100vh.
      // When scrollY is 100vh, content is at 0 (top of screen).
      // We want navbar to be solid when content is near the top.
      if (window.scrollY > heroHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <nav className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/logo/url-image-icon.5.5.webp"
            alt="R13"
            className="nav-logo-img"
          />
        </Link>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line menu-line-1"></span>
          <span className="menu-line menu-line-2"></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-999 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
          <li>
            {isHomePage ? (
              <a
                href="#home"
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </a>
            ) : (
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>
          <li>
            <Link
              to="/storia"
              className={`nav-link ${
                location.pathname === "/storia" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              La Storia
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`nav-link ${
                location.pathname === "/menu" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Menu
            </Link>
          </li>
          <li>
            {isHomePage ? (
              <a
                href="#locale"
                className={`nav-link ${
                  activeSection === "locale" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Il locale
              </a>
            ) : (
              <Link to="/#locale" className="nav-link" onClick={closeMenu}>
                Il locale
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <Link
                to="/gallery"
                className={`nav-link ${
                  activeSection === "photo" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Photo
              </Link>
            ) : (
              <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                Photo
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a
                href="#contatti"
                className={`nav-link ${
                  activeSection === "contatti" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Contatti
              </a>
            ) : (
              <Link to="/#contatti" className="nav-link" onClick={closeMenu}>
                Contatti
              </Link>
            )}
          </li>
          {/* Mobile Menu Logo */}
          <li
            className="md:hidden mb-4 w-full flex justify-center"
            style={{ marginTop: "12rem", borderBottom: "none" }}
          >
            <div className="w-24 h-24 flex items-center justify-center p-4">
              <img
                src="/logo/url-image-icon.5.5.webp"
                alt="R13"
                className="w-full h-auto object-contain"
              />
            </div>
          </li>
        </ul>

        <button
          className="nav-cta"
          onClick={() => {
            setIsModalOpen(true);
            closeMenu();
          }}
        >
          Prenota
        </button>
      </nav>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-[#c5a059] transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      {/* THE MODAL OVERLAY */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
