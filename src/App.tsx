import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { MessageSquare, ArrowUp, Calendar, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "./utils/whatsappRouter";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set-up Section Intersection Observer to automatically highlight current sub-links
  useEffect(() => {
    const sections = ["home", "services", "portfolio", "about", "testimonials", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when passing intermediate center lines
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const navbarOffset = 70; // Header heights cushion
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleWhatsAppFloat = () => {
    const url = getWhatsAppUrl("Hello Dhara! I am browsing your beautifully styled web portfolio and would love to chat regarding booking availability.");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-[#F9F6F0] selection:bg-[#E3B4B9]/20 selection:text-[#4A3E3D] text-[#4A3E3D] selection:outline-none">
      
      {/* Dynamic Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Single-Page Scroller Stack */}
      <main id="main-scroller-stack">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <BookingForm />
      </main>

      {/* Footer & Contact Block */}
      <Footer onNavigate={handleNavigate} />

      {/* FLOATING ACTION CLUSTERS: Sticky WhatsApp and Scroll To Top */}
      <div 
        className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50 pointer-events-none"
        id="floating-actions-block"
      >
        {/* Scroll back to top pointer */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#FFFFFF] hover:bg-[#F9F6F0] border border-[#E3B4B9]/30 text-[#4A3E3D] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md pointer-events-auto cursor-pointer"
            aria-label="Scroll to Top"
            id="floating-scroll-top"
          >
            <ArrowUp className="w-4 h-4 text-[#8A7A78]" />
          </button>
        )}

        {/* Floating High-End WhatsApp Action Widget */}
        <button
          onClick={handleWhatsAppFloat}
          className="relative p-4 rounded-full bg-[#E3B4B9] hover:bg-[#d59ba2] text-white transition-all duration-300 transform hover:scale-110 active:scale-90 shadow-lg shadow-[#E3B4B9]/45 pointer-events-auto cursor-pointer flex items-center justify-center group"
          aria-label="Direct WhatsApp Chat"
          id="floating-whatsapp-chat"
        >
          {/* Pulsing decoration circle shadow */}
          <span className="absolute inset-0 rounded-full bg-[#E3B4B9]/30 scale-120 animate-ping pointer-events-none group-hover:hidden" />
          {/* <MessageSquare className="w-6 h-6 stroke-[2]" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	          <path d="M0 0h24v24H0z" fill="none" />
	          <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
          </svg>

          
          {/* Soft tooltip descriptive microcopy */}
          <span className="absolute right-14 bg-white text-[#4A3E3D] border border-[#E3B4B9]/20 py-1.5 px-3 rounded-xl text-[10px] tracking-wider font-semibold uppercase shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with Dhara
          </span>
        </button>
      </div>

    </div>
  );
}
