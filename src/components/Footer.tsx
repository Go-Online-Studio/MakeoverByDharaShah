import { Instagram, Phone, MapPin, Mail, Clock, Sparkles, Send, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const phoneNumber = "+91 8320713015";
  const address = "Shop no.5, Akshardham apartments near akota garden, Akota, Vadodara Gujarat 390020";

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl("Hi Dhara! I'm ready to book an elegance session. Let's talk about availability.");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDirections = () => {
    const query = encodeURIComponent("Akota Garden Akshardham Apartments, Akota, Vadodara, Gujarat 390020");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank", "noopener,noreferrer");
  };

  // Structured Data Schema injection (SEO Standard LocalBusiness)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Makeover By Dhara Shah",
    "image": "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?q=80&w=720",
    "@id": "https://web.whatsapp.com/send?phone=918320713015",
    "url": "https://www.instagram.com/makeoverbydharashah/",
    "telephone": "+918320713015",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no.5, Akshardham apartments near akota garden, Akota",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390020",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.2982",
      "longitude": "73.1610"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/makeoverbydharashah/"
    ]
  };

  return (
    <footer id="brand-footer" className="bg-[#FFFFFF] border-t border-[#E3B4B9]/20 pt-16 pb-8 text-[#4A3E3D] relative overflow-hidden">
      
      {/* Script Tag injection for LocalBusiness SEO Scheme Type */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 3-Column main footer cluster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#F9F6F0]" id="footer-top-cluster">
          
          {/* COLUMN 1: Brand description, Business hours & Socials (5 Coils) */}
          <div className="lg:col-span-5 space-y-6" id="footer-col-1-brand">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => onNavigate("home")}>
              <Sparkles className="h-5 w-5 text-[#E3B4B9] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-serif text-[#4A3E3D] tracking-wide" style={{ fontWeight: 500 }}>
                Makeover by Dhara Shah
              </span>
            </div>
            
            <p className="text-[#8A7A78] text-sm font-light leading-relaxed font-sans max-w-sm">
              An oasis of high-end beauty, personal pampering, and bridal perfection in Akota, Vadodara. We believe true makeup is an elegant accentuation of your unique core light.
            </p>

            {/* Operating Hours Block */}
            <div className="space-y-2 mt-4" id="footer-operating-hours">
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#4A3E3D] flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-[#E3B4B9]" />
                <span>STUDIO HOURS</span>
              </h4>
              <div className="text-xs text-[#8A7A78] font-light space-y-1 pl-5.5 font-sans">
                <p>Monday – Saturday : 11:00 AM – 7:00 PM</p>
                <p>Sunday : 12:00 PM – 5:00 PM</p>
              </div>
            </div>

            {/* Visual Social handles */}
            <div className="flex items-center space-x-3 pt-2" id="footer-social-panel">
              <span className="text-xs tracking-wider text-[#8A7A78] uppercase font-bold mr-1">FOLLOW:</span>
              <a
                href="https://www.instagram.com/makeoverbydharashah/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9F6F0] hover:bg-[#E3B4B9]/25 text-[#4A3E3D] hover:text-[#E3B4B9] p-2.5 rounded-full transition-colors duration-300 shadow-sm"
                aria-label="Instagram Page"
                id="footer-social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="bg-[#F9F6F0] hover:bg-[#B5C7CD]/25 text-[#4A3E3D] hover:text-[#B5C7CD] p-2.5 rounded-full transition-colors duration-300 shadow-sm"
                aria-label="WhatsApp"
                id="footer-social-whatsapp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                </svg>
              </button>
            </div>
          </div>

          {/* COLUMN 2: Quick navigation anchors links (3 Coils) */}
          <div className="lg:col-span-3 space-y-6" id="footer-col-2-navigation">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A3E3D] border-b border-[#F9F6F0] pb-2">
              QUICK NAVIGATION
            </h4>
            
            <nav className="flex flex-col space-y-3" id="footer-nav-links">
              {[
                { label: "Home", id: "home" },
                { label: "Our Services", id: "services" },
                { label: "Artistry Gallery", id: "portfolio" },
                { label: "About Dhara", id: "about" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact & Studio", id: "contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-sm text-[#8A7A78] hover:text-[#E3B4B9] transition-colors duration-300 font-sans font-light"
                  id={`footer-nav-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: Contact & Studio Map location (4 Coils) */}
          <div className="lg:col-span-4 space-y-6" id="footer-col-3-details">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A3E3D] border-b border-[#F9F6F0] pb-2">
              CONTACT & STUDIO
            </h4>

            <div className="space-y-4 font-sans text-sm font-light text-[#8A7A78]" id="footer-contact-info">
              
              {/* Address Link */}
              <div 
                className="flex items-start space-x-3 cursor-pointer group"
                onClick={handleDirections}
                id="footer-address-link"
              >
                <MapPin className="w-5 h-5 text-[#E3B4B9] group-hover:scale-110 transition-transform mt-0.5 shrink-0" />
                <span className="group-hover:text-[#E3B4B9] transition-colors duration-300 leading-relaxed">
                  {address}
                </span>
              </div>

              {/* Dial-in Link */}
              <div className="flex items-center space-x-3" id="footer-phone-link">
                <Phone className="w-4.5 h-4.5 text-[#E3B4B9] shrink-0" />
                <a 
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`} 
                  className="hover:text-[#E3B4B9] transition-colors font-medium text-[#4A3E3D]"
                  id="footer-phone-anchor"
                >
                  {phoneNumber}
                </a>
              </div>

              {/* Email Link */}
              <div className="flex items-center space-x-3" id="footer-email-link">
                <Mail className="w-4.5 h-4.5 text-[#E3B4B9] shrink-0" />
                <a 
                  href="mailto:info@makeoverbydharashah.com" 
                  className="hover:text-[#E3B4B9] transition-colors"
                  id="footer-email-anchor"
                >
                  info@makeoverbydharashah.com
                </a>
              </div>

            </div>

            {/* Directions Action Button with responsive mini-map vector icon preview */}
            <div className="pt-2" id="footer-cta-directions">
              <button
                onClick={handleDirections}
                className="w-full text-center text-xs tracking-widest font-semibold border-2 border-[#B5C7CD] hover:bg-[#B5C7CD]/10 text-[#4A3E3D] px-6 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
                id="footer-directions-button"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B5C7CD]" />
                <span>GET GOOGLE MAP DIRECTIONS</span>
              </button>
            </div>
            
          </div>
          
        </div>

        {/* Bottom copyright & micro-credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center text-xs text-[#8A7A78] font-light font-sans" id="footer-bottom-copyright">
          <p>© 2026 All Rights Reserved by Makeover By Dhara Shah. Designed and developed by <a className="hover:text-[#E3B4B9]" href="https://shriiitrackingsolution.in/" target="_blank"> <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
          </a></p>
        </div>

      </div>
    </footer>
  );
}
