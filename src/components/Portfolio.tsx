import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Sparkles, Filter } from "lucide-react";

interface PortfolioItem {
  id: number;
  category: "bridal" | "party" | "hair" | "skin";
  title: string;
  imgUrl: string;
  instagramUrl: string;
  colorTheme: "pink" | "blue";
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "bridal",
    title: "Royal Traditional Bride",
    imgUrl: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "pink"
  },
  {
    id: 2,
    category: "party",
    title: "Chic Evening Glow Makeover",
    imgUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "blue"
  },
  {
    id: 3,
    category: "bridal",
    title: "Heritage Kundan Bridal Art",
    imgUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "pink"
  },
  {
    id: 4,
    category: "hair",
    title: "Textured Hollywood Waves",
    imgUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430f33?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "blue"
  },
  {
    id: 5,
    category: "skin",
    title: "Dewy Glass-Skin Radiance",
    imgUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "pink"
  },
  {
    id: 6,
    category: "party",
    title: "Soft Pastels Sangeet Polish",
    imgUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "blue"
  },
  {
    id: 7,
    category: "bridal",
    title: "Mehendi Glam & Soft Lashes",
    imgUrl: "https://images.unsplash.com/photo-1588001832198-c15cff59b078?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "pink"
  },
  {
    id: 8,
    category: "hair",
    title: "French Braided Bun with Flora",
    imgUrl: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=640",
    instagramUrl: "https://www.instagram.com/makeoverbydharashah/",
    colorTheme: "blue"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "bridal" | "party" | "hair" | "skin">("all");

  const filterTabs: { label: string; id: typeof activeFilter }[] = [
    { label: "ALL", id: "all" },
    { label: "BRIDAL", id: "bridal" },
    { label: "PARTY", id: "party" },
    { label: "HAIR", id: "hair" },
    { label: "SKIN", id: "skin" }
  ];

  const filteredItems = portfolioData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Soft Blobs */}
      <div className="absolute top-[30%] left-[8%] w-60 h-60 bg-[#B5C7CD]/10 rounded-full blur-[80px] pointer-events-none select-none" />
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
              const overlayColor = item.colorTheme === "pink" ? "bg-[#E3B4B9]/85" : "bg-[#B5C7CD]/85";
              
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
