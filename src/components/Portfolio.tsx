import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Sparkles, Filter } from "lucide-react";

// ── Local portfolio images (Vite resolves & hashes these at build time) ──
import imgHaldi from "../assets/images/Haldi,MakeupAndHair.webp";
import imgLightElegance from "../assets/images/LightMakeup,HeavyElegance.webp";
import imgMakeupHair from "../assets/images/MakeupAndHair.webp";
import imgParty from "../assets/images/PartyMakeup.webp";
import imgRandom from "../assets/images/RandamMakeupClips.webp";
import imgSoftRadiant from "../assets/images/Soft,Radiant,AndNaturallyBeautiful.webp";
import imgTradition from "../assets/images/TraditionLookWithModernCharm.webp";
import imgWedding from "../assets/images/WeddingMakeup.webp";

interface PortfolioItem {
  id: number;
  category: "bridal" | "party" | "makeup";
  title: string;
  imgUrl: string;
  instagramUrl: string;
  colorTheme: "pink" | "blue";
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "bridal",
    title: "Haldi Bridal Ceremony",
    imgUrl: imgHaldi,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DXwZnM0NKlU/",
    colorTheme: "pink"
  },
  {
    id: 2,
    category: "party",
    title: "Light & Elegant Glamour",
    imgUrl: imgLightElegance,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DYya7BkP-gf/",
    colorTheme: "blue"
  },
  {
    id: 3,
    category: "makeup",
    title: "Signature Artistry",
    imgUrl: imgMakeupHair,
    instagramUrl: "https://www.instagram.com/artofpixels_fashion/reel/DYbVcmYKyHZ/",
    colorTheme: "pink"
  },
  {
    id: 4, 
    category: "party",
    title: "Evening Party Glow",
    imgUrl: imgParty,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DZXywVDPCPs/",
    colorTheme: "blue"
  },
  {
    id: 5,
    category: "makeup",
    title: "Creative Artistry Clips",
    imgUrl: imgRandom,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DXedgn6Dwy0/",
    colorTheme: "pink"
  },
  {
    id: 6,
    category: "makeup",
    title: "Soft Natural Radiance",
    imgUrl: imgSoftRadiant,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DZ47wCHNMsu/",
    colorTheme: "blue"
  },
  {
    id: 7,
    category: "bridal",
    title: "Modern Traditional Charm",
    imgUrl: imgTradition,
    instagramUrl: "https://www.instagram.com/rainbow_nails_makeup_/p/DXHl5jpjLdl/?img_index=1",
    colorTheme: "pink"
  },
  {
    id: 8,
    category: "bridal",
    title: "Timeless Wedding Bridal",
    imgUrl: imgWedding,
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/reel/DX4HkEBt3TB/",
    colorTheme: "blue"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "bridal" | "party" | "makeup">("all");

  const filterTabs: { label: string; id: typeof activeFilter }[] = [
    { label: "ALL", id: "all" },
    { label: "BRIDAL", id: "bridal" },
    { label: "PARTY", id: "party" },
    { label: "MAKEUP", id: "makeup" }
  ];

  const filteredItems = portfolioData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-[30%] left-[8%] w-60 h-60 bg-[#6f95a9]/10 rounded-full blur-[80px] pointer-events-none select-none" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#E3B4B9]/15 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header and Filter Control Area */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12" id="portfolio-header">
          <div>
            <div className="flex items-center space-x-2 text-[#8A7A78] tracking-[0.34em] text-[10px] uppercase font-bold">
              <span className="w-5 h-[1px] bg-[#E3B4B9]" />
              <span>Curation of Timeless Looks</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#4A3E3D] mt-4" id="portfolio-title">
              Our Bridal & Makeup Gallery
            </h2>
            <div className="w-12 h-[2px] bg-[#E3B4B9] mt-3" />
          </div>

          {/* Top Right Pill Filters bar */}
          <div className="flex flex-wrap items-center gap-2" id="portfolio-filters-container">
            <span className="text-xs text-[#8A7A78] uppercase tracking-widest font-bold items-center space-x-1 hidden sm:flex mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 text-xs font-semibold tracking-widest rounded-full transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-[#E3B4B9] text-white shadow-sm shadow-[#E3B4B9]/40"
                    : "bg-[#F9F6F0] text-[#4A3E3D] hover:bg-[#E3B4B9]/20"
                }`}
                id={`filter-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid with Framer Motion AnimatePresence */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="portfolio-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Custom theme color based on pink vs blue selector config
              const overlayColor = item.colorTheme === "pink" ? "bg-[#E3B4B9]/85" : "bg-[#9dc2cf]/85";
              
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, amount: 0.33 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative group rounded-[1.5rem] overflow-hidden aspect-square sm:aspect-[4/5] bg-[#F9F6F0] border border-[#E3B4B9]/15 shadow-sm"
                  id={`portfolio-item-${item.id}`}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    width="640"
                    height="800"
                    loading="lazy"
                    id={`portfolio-img-${item.id}`}
                  />
                  
                  {/* Hover Overlay: Smooth fade-in overlay in primary soft shade */}
                  <div 
                    className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-center items-center p-6 text-center z-30 cursor-pointer`}
                    onClick={() => window.open(item.instagramUrl, "_blank", "noopener,noreferrer")}
                    id={`portfolio-hover-${item.id}`}
                  >
                    {/* Centered Instagram glyph icon with View on Instagram microcopy */}
                    <div className="bg-white/90 p-3.5 rounded-full text-[#4A3E3D] shadow-md group-hover:scale-110 transition-transform duration-500">
                      <Instagram className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="text-[#4A3E3D] font-serif text-lg mt-4 font-semibold tracking-wide">
                      {item.title}
                    </h4>
                    
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#4A3E3D]/80 uppercase mt-2 block border-b border-[#4A3E3D]/30 pb-0.5">
                      View on Instagram
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Instagram CTA block */}
        <div className="mt-14 text-center" id="portfolio-extra-cta">
          <p className="text-xs text-[#8A7A78] tracking-widest font-bold uppercase mb-4">
            Daily transformation videos & beauty tips
          </p>
          <a
            href="https://www.instagram.com/makeoverbydharashah/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#F9F6F0] hover:bg-[#E3B4B9]/10 border border-[#E3B4B9] text-[#4A3E3D] px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm"
            id="portfolio-instagram-link-button"
          >
            <Instagram className="w-4 h-4 text-[#E3B4B9]" />
            <span>Follow @makeoverby_dharashah</span>
          </a>
        </div>

      </div>
    </section>
  );
}
