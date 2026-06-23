import { motion } from "motion/react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";
import profileImage from "../assets/images/profileImage.webp";

export default function Hero() {
  const handleRequestQuote = () => {
    const url = getWhatsAppUrl("Hi Dhara! I am planning an event and would love to request a quote. Could you share your bridal/party packages?");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden bg-[#F9F6F0]"
    >
      {/* Absolute Ambient Floating Leaves & Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-15 select-none" id="hero-floating-decorations">
        {/* Soft floating pastel pink leaf - Top Right */}
        <div className="absolute top-[15%] right-[10%] w-16 h-16 animate-float-up opacity-40">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#E3B4B9]">
            <path d="M10 90C40 70 80 80 90 10C60 30 20 20 10 90Z" fill="currentColor" />
            <path d="M10 90C40 50 90 10 90 10" stroke="#F9F6F0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Soft floating slate blue leaf - Left Center */}
        <div className="absolute top-[40%] left-[5%] w-14 h-14 animate-float-down opacity-35">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#6f95a9]">
            <path d="M90 90C60 70 20 80 10 10C40 30 80 20 90 90Z" fill="currentColor" />
            <path d="M90 90C60 50 10 10 10 10" stroke="#F9F6F0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Dew Drop/Bubble - Bottom Right */}
        <div className="absolute bottom-[20%] right-[15%] w-8 h-8 rounded-full bg-[#6f95a9]/20 blur-[1px] animate-float-up" />

        {/* Warm light leak or ambient soft circle - Top Left background */}
        <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#E3B4B9]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Asymmetrical organic fluid blob container mask with overlapping leaf outlines */}
          <div className="lg:col-span-6 flex justify-center" id="hero-image-pane">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.33 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[450px] aspect-square sm:aspect-[4/5] md:aspect-square flex items-center justify-center p-4"
            >
              {/* Gold/Sage Elegant Outline Leaves - background & layered over */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 text-[#8A7A78]/30 pointer-events-none select-none animate-float-up">
                <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                  <path d="M20 100 C 40 70, 70 80, 100 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20 100 C 35 85, 45 80, 50 65 C 40 55, 30 65, 20 100" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M35 85 C 50 70, 60 65, 75 50 C 65 40, 50 50, 35 85" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M60 55 C 75 40, 85 35, 100 20 C 90 10, 75 25, 60 55" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 text-[#E3B4B9]/40 pointer-events-none select-none animate-float-down">
                <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                  <path d="M100 100 C 80 70, 50 80, 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M100 100 C 85 85, 75 80, 70 65 C 80 55, 90 65, 100 100" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M85 85 C 70 70, 60 65, 45 50 C 55 40, 70 50, 85 85" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Overlapping organic watercolor style blobs surrounding the main figure */}
              <div className="absolute inset-2 bg-[#E3B4B9]/20 rounded-[55%_45%_50%_60%_/_50%_55%_45%_55%] -z-10 animate-float-down" />
              <div className="absolute inset-5 bg-[#6f95a9]/20 rounded-[45%_55%_60%_40%_/_55%_45%_55%_45%] -z-10 animate-float-up" />

              {/* Main portrait inside organic fluid mask container */}
              <div 
                className="w-full h-full overflow-hidden border border-[#E3B4B9]/30 shadow-lg transition-all duration-700 bg-[#6f95a9]"
                style={{
                  clipPath: "url(#blob-shape)",
                  WebkitClipPath: "url(#blob-shape)"
                }}
                id="hero-mask-container"
              >
                <img
                  src={profileImage}
                  alt="Elegant Bridal Transformation by Dhara Shah"
                  className="w-full h-full object-cover object-center scale-[1.08] hover:scale-112 opacity-90 transition-transform duration-[4000ms] ease-out-quint"
                  width="720"
                  height="720"
                  id="hero-bridal-portrait"
                />
              </div>

              {/* Forefront overlay outline leaf with soft white-drop shade */}
              <div className="absolute bottom-4 right-2 w-28 h-28 text-[#4A3E3D]/80 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] filter opacity-90 select-none">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M10 80C30 60 60 70 80 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M10 80C25 65 35 60 40 45C30 35 20 45 10 80" stroke="currentColor" strokeWidth="1.2" fill="#F9F6F0" fillOpacity="0.4"/>
                  <path d="M25 65 C 40 50, 50 45, 65 30 C 55 20, 40 30, 25 65" stroke="currentColor" strokeWidth="1.2" fill="#E3B4B9" fillOpacity="0.2"/>
                  <path d="M30 45 L 45 42 M 45 35 L 60 32" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Editorial heading and copy */}
          <div className="lg:col-span-6 flex flex-col justify-center" id="hero-text-pane">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.33 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#8A7A78] tracking-[0.34em] text-[10px] uppercase font-semibold">
                <span className="w-6 h-[1px] bg-[#E3B4B9]" />
                <span>Exquisite Artistry</span>
              </div>

              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-serif leading-tight sm:leading-none"
                style={{ fontWeight: 400 }}
                id="hero-main-title"
              >
                Elevating Your <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#E3B4B9] relative inline-block">
                  Natural Beauty
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5C45 2.5 120 1 199 6" stroke="#E3B4B9" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p 
                className="text-[#8A7A78] text-base md:text-lg font-light tracking-wide max-w-lg mx-auto lg:mx-0 font-sans"
                id="hero-subtitle"
              >
                Dhara Shah — Bridal & Party Specialist. Serving timeless, elegant, and bespoke makeup styles in Akota, Vadodara. Crafted to reflect your authentic radiance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="hero-actions-container">
                <button
                  onClick={handleRequestQuote}
                  className="w-full sm:w-auto bg-[#E3B4B9] hover:bg-[#d59ba2] text-white font-semibold text-xs tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-[#E3B4B9]/35"
                  id="hero-cta-quote"
                >
                  REQUEST A QUOTE
                </button>
                <a
                  href="#services"
                  className="text-xs tracking-widest font-semibold text-[#4A3E3D] hover:text-[#E3B4B9] border-b border-[#4A3E3D] hover:border-[#E3B4B9] pb-1 transition-colors uppercase"
                  id="hero-link-services"
                >
                  Explore Services
                </a>
              </div>

              {/* Info Snippet Banner */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#4A3E3D]/10 max-w-md mx-auto lg:mx-0" id="hero-stats-panel">
                <div>
                  <div className="text-xl font-serif text-[#4A3E3D] font-medium" id="stat-experience">10+</div>
                  <div className="text-[9px] tracking-widest text-[#8A7A78] uppercase font-semibold">Years Active</div>
                </div>
                <div>
                  <div className="text-xl font-serif text-[#4A3E3D] font-medium" id="stat-brides">800+</div>
                  <div className="text-[9px] tracking-widest text-[#8A7A78] uppercase font-semibold">Brides Adorned</div>
                </div>
                <div>
                  <div className="text-xl font-serif text-[#4A3E3D] font-medium" id="stat-rating">4.9★</div>
                  <div className="text-[9px] tracking-widest text-[#8A7A78] uppercase font-semibold">Client Love</div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
