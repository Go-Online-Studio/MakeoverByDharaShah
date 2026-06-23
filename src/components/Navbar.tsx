import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";
import logoImg from "../assets/images/MakeoverByDharaShah.webp";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "TESTIMONIALS", id: "testimonials" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const handleBook = () => {
    const url = getWhatsAppUrl("Hello Dhara Shah, I am looking to book an appointment for bridal/party services.");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 ${
        isScrolled
          ? "bg-white/95 shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">  
        {/* Logo Section */}
        <div 
          onClick={() => handleLinkClick("home")}
          className="flex items-center cursor-pointer group"
          id="nav-logo-container"
        >
          <img 
            src={logoImg} 
            alt="Makeover by Dhara Shah" 
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-xs tracking-[0.2em] font-medium transition-all relative py-1 hover:text-[#4A3E3D] ${
                activeSection === link.id
                  ? "text-[#4A3E3D] border-b-2 border-[#E3B4B9]"
                  : "text-[#8A7A78]"
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block" id="nav-cta-container">
          <button
            onClick={handleBook}
            className="text-xs tracking-widest font-semibold bg-[#E3B4B9] hover:bg-[#d9a2a8] text-white py-2.5 px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm shadow-[#E3B4B9]/30"
            id="nav-cta-book-appointment"
          >
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-4" id="nav-mobile-trigger-container">
          <button
            onClick={handleBook}
            className="text-[10px] tracking-wider font-bold bg-[#E3B4B9] text-white py-2 px-3 rounded-full transition-all"
            id="nav-mobile-book-cta"
          >
            BOOK
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#4A3E3D] p-1 focus:outline-none"
            aria-label="Toggle Menu"
            id="nav-hamburger-button"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[71px] bg-white z-40 flex flex-col px-6 py-8 space-y-6 border-t border-[#E3B4B9]/10"
          id="mobile-nav-panel"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left text-sm tracking-widest font-medium py-3 border-b border-[#F9F6F0] transition-colors ${
                activeSection === link.id 
                  ? "text-[#E3B4B9] font-bold" 
                  : "text-[#4A3E3D]"
              }`}
              id={`mobile-nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleBook}
            className="w-full text-center text-xs tracking-widest font-bold bg-[#E3B4B9] text-white py-3 px-6 rounded-full mt-6 shadow-sm"
            id="mobile-nav-cta-book"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      )}
    </header>
  );
}
