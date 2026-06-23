import React, { useState } from "react";
import { motion } from "motion/react";
import { Gem, Palette, Scissors, Sparkles, Check, ArrowRight, Minus, Plus, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";
import { p } from "motion/react-client";

interface ServiceItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  category: string;
  priceText: string;
  basePrice: number;
  bgColor: string;
  borderColor: string;
  badge: string;
  description: string;
  amenities: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "bridal",
    name: "BRIDAL MAKEUP",
    icon: Gem,
    category: "BRIDAL GLAMOUR",
    priceText: "₹18,000 onwards",
    basePrice: 18000,
    bgColor: "bg-[#cfe2e9ff]", // Soft pastel slate blue
    borderColor: "border-[#4A3E3D]/10",
    badge: "Royalty Collection",
    description: "Impeccable, durable, and photographically ready bridal makeovers custom tailored for your heritage outfit and jewelry.",
    amenities: [
      "Ultra-HD Liquid Foundation or Airbrush",
      "Premium faux mink / luxury lashes",
      "Hairstyling (Buns, Hollywood Waves, Braids)",
      "Dupatta setting, jewelry pinning, saree draping"
    ]
  },
  {
    id: "party",
    name: "PARTY MAKEUP",
    icon: Palette,
    category: "CELEBRATION GLOW",
    priceText: "₹7,500 onwards",
    basePrice: 7500,
    bgColor: "bg-[#f0ced1ff]", // Soft blush pastel pink
    borderColor: "border-[#4A3E3D]/10",
    badge: "Guest of Honor",
    description: "Flawless, lightweight dewy glow formulated to look fresh for sangeet nights, receptions, and pre-wedding functions.",
    amenities: [
      "Dewy glass-skin base or velvet matte",
      "High-definition eye styling & contours",
      "Custom strip eyelashes included",
      "Blow-drying, basic updos, or soft curls"
    ]
  },
  {
    id: "hair",
    name: "HAIR STYLING",
    icon: Scissors,
    category: "CROWN & BRAIDS",
    priceText: "₹4,500 onwards",
    basePrice: 4500,
    bgColor: "bg-[#f0ced1ff]", // Soft blush pastel pink
    borderColor: "border-[#4A3E3D]/10",
    badge: "Structural Elegance",
    description: "Professional structural hairdos ranging from timeless traditional flower-adorned braids to signature waves.",
    amenities: [
      "Deep moisture-prep & volume styling",
      "Custom accessory & real flora integration",
      "Anti-humidity setting with natural glow finish",
      "Premium hair padding and stuffing extensions"
    ]
  },
  {
    id: "skin",
    name: "SKIN CARE",
    icon: Sparkles,
    category: "PRIME & DEWY",
    priceText: "₹3,000 onwards",
    basePrice: 3000,
    bgColor: "bg-[#cfe2e9ff]", // Soft pastel slate blue
    borderColor: "border-[#4A3E3D]/10",
    badge: "Luminous Prep",
    description: "The ideal pre-makeup skin therapy focusing on heavy rehydration, de-puffing, and pH restoration mapping.",
    amenities: [
      "Botanical deep hydration mask prep",
      "Ice-globe facial lymphatic circulation therapy",
      "Deep pore tightening & texture smoothing primer",
      "Barrier cream locking and moisture seals"
    ]
  }
];

export default function Services() {
  const handleQuickBook = (name: string) => {
    const text = `Hi Dhara! I'm interested in booking the "${name}" service. Could you please share the next available trial slots and quote options?`;
    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Background decorations conforming to the light Warm Organic / Cultural aesthetic */}
      <div className="absolute inset-0 pointer-events-none select-none z-10" id="services-decorations">
        <div className="absolute top-[10%] left-[-5%] w-80 h-80 bg-[#B5C7CD]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#E3B4B9]/15 rounded-full blur-[120px]" />
        
        {/* Abstract botanical leaf contour paths */}
        <div className="absolute top-[15%] right-[5%] w-48 h-48 text-[#E3B4B9]/15 animate-float-up">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M10 90C40 70 80 80 90 10C60 30 20 20 10 90Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Editorial Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-title-block">
          <span className="text-xs tracking-[0.35em] text-[#807270] uppercase font-bold block mb-4">
            Custom Beauty & Sculpting
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3E3D] leading-tight">
            Our Premium <span className="italic font-normal text-[#E3B4B9]">Artistry Menu</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E3B4B9] mx-auto mt-4 mb-6" />
          <p className="text-[#8A7A78] font-light text-sm md:text-base leading-relaxed tracking-wide font-sans">
            Every bride, sister, and friend has a distinctive glow waiting to be cradled. Discover our specialized luxury beauty services crafted for maximum camera precision, hydration, and flawless retention.
          </p>
        </div>

        {/* Part 1: Grid of Artistry Packages */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
          id="services-grid-block"
        >
          {servicesData.map((svc) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.33 }}
              transition={{ duration: 0.6 }}
              className={`rounded-[2rem] p-6 sm:p-8 border border-transparent shadow-sm flex flex-col justify-between group relative overflow-hidden hover:shadow-md transition-all duration-300 ${svc.bgColor}`}
              id={`service-box-${svc.id}`}
            >
              {/* Outer light leaf highlight in background */}
              <div className="absolute top-4 right-4 w-20 h-20 text-white/10 pointer-events-none select-none group-hover:rotate-12 transition-transform duration-500">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <path d="M10 90C40 70 80 80 90 10C60 30 20 20 10 90Z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-white/90 p-3.5 rounded-full text-[#4A3E3D] shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svc.icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] tracking-wider font-bold bg-white/70 text-[#4A3E3D] px-3 py-1 rounded-full uppercase">
                    {svc.badge}
                  </span>
                </div>

                <span className="text-[9px] tracking-[0.2em] font-bold text-[#4A3E3D]/80 block mb-1">
                  {svc.category}
                </span>
                <h3 className="text-xl font-serif text-[#4A3E3D] font-bold tracking-wide">
                  {svc.name}
                </h3>
                
                <p className="text-xs text-[#4A3E3D]/90 font-light mt-3 leading-relaxed">
                  {svc.description}
                </p>

                {/* Bullet Amenities list */}
                <ul className="mt-5 space-y-2" id={`service-amenities-${svc.id}`}>
                  {svc.amenities.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-[#4A3E3D]/85 font-light">
                      <Check className="w-3.5 h-3.5 text-white bg-[#4A3E3D]/40 rounded-full p-0.5 shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#4A3E3D]/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#4A3E3D]/70 font-semibold block">Confirm On WhatsApp</span>
                  {/* <span className="text-sm font-semibold tracking-wide text-[#4A3E3D]">{svc.priceText}</span> */}
                </div>
                
                <button
                  onClick={() => handleQuickBook(svc.name)}
                  className="bg-white hover:bg-[#F9F6F0] text-[#4A3E3D] p-3 rounded-full transition-transform duration-300 hover:translate-x-1 shadow-sm font-bold"
                  aria-label={`Book ${svc.name}`}
                  id={`service-btn-${svc.id}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
