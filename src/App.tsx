import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Menu from "./components/sections/Menu";
import Venue from "./components/sections/Venue";
import BentoGallery from "./components/sections/BentoGallery";
import MenuPage from "./components/pages/MenuPage";

import GalleryPage from "./components/pages/GalleryPage";
import LaStoriaPage from "./components/pages/LaStoriaPage";
import StickyBookingCTA from "./components/ui/StickyBookingCTA";
import PageTransition from "./components/layout/PageTransition";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <main className="relative min-h-screen">
                  {/* Fixed Hero (The "Window") */}
                  <div className="fixed top-0 left-0 w-full h-screen z-0">
                    <Hero />
                  </div>

                  {/* Content Curtain (Slides UP over the fixed hero) */}
                  <div
                    className="relative z-10 bg-brand-cream shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)]"
                    style={{ marginTop: "100vh" }}
                  >
                    <Story />
                    <Menu />
                    <Venue />
                    <BentoGallery />
                  </div>
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/menu"
            element={
              <PageTransition>
                <main>
                  <MenuPage />
                </main>
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <GalleryPage />
              </PageTransition>
            }
          />
          <Route
            path="/storia"
            element={
              <PageTransition>
                <main>
                  <LaStoriaPage />
                </main>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <StickyBookingCTA />
    </div>
  );
}

export default App;
