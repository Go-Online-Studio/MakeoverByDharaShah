import { motion } from "motion/react";
import { Sparkles, Calendar, Heart, Award } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";

export default function About() {
  const handleLearnMore = () => {
    const text = "Hi Dhara! I read about your 10+ years of makeup artistry experience. I'd love to ask about booking a session and your availability.";
    const url = getWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-[#F9F6F0] relative overflow-hidden"
    >
      {/* Background soft light leaks & floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-10" id="about-decorations">
        {/* Soft pastel blue leaf background */}
        <div className="absolute bottom-[10%] left-[5%] w-24 h-24 text-[#6f95a9]/20 animate-float-down">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M90 10C50 20 20 50 10 90C45 80 80 45 90 10Z"/>
          </svg>
        </div>

        {/* Soft gradient glassmorphic circle background */}
        <div className="absolute top-[20%] right-[3%] w-96 h-96 rounded-full bg-gradient-to-br from-[#E3B4B9]/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Main wrapper with glassmorphism texture */}
        <div 
          className="bg-white/85 backdrop-blur-md rounded-[2.5rem] border border-[#E3B4B9]/15 shadow-xl p-8 sm:p-12 lg:p-16"
          id="about-glass-wrapper"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT GRAPHICS COLUMN */}
            <div className="lg:col-span-5 flex justify-center relative" id="about-graphics-pane">
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.33 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative w-full max-w-[340px] aspect-square flex items-center justify-center"
              >
                {/* Decorative outer circle rings */}
                <div className="absolute inset-[-8px] border border-[#E3B4B9]/20 rounded-full animate-pulse opacity-40" />
                <div className="absolute inset-[-18px] border border-[#6f95a9]/15 rounded-full animate-float-up opacity-30" />

                {/* Perfect circle portrait container */}
                <div 
                  className="w-full h-full rounded-full overflow-hidden border-2 border-[#E3B4B9]/40 shadow-inner bg-[#F9F6F0]"
                  id="about-avatar-frame"
                >
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=720"
                    alt="Makeup Artist Dhara Shah"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-108 transition-transform duration-[3000ms] ease-out-quint"
                    width="720"
                    height="720"
                    id="about-dhara-avatar"
                  />
                </div>

                {/* Monstera Botanical Leaf Cutout Overlay */}
                <div 
                  className="absolute bottom-[-15px] left-[-20px] w-32 h-32 text-[#6f95a9] drop-shadow-md select-none opacity-90 animate-float-up"
                  id="about-monstera-graphic"
                >
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    {/* Artistic Monstera / Fan Palm Leaf shape */}
                    <path d="M50 10 C30 15, 10 35, 10 60 C10 80, 30 90, 50 90 C70 90, 90 80, 90 60 C90 35, 70 15, 50 10 Z 
                             M50 20 C60 25, 78 35, 80 50 C70 48, 62 45, 50 45 C38 45, 30 48, 20 50 C22 35, 40 25, 50 20 Z" 
                          opacity="0.95" />
                    {/* Internal veins & segmentations to look high-end */}
                    <path d="M50 15 L50 85 M50 35 L75 30 M50 45 L82 48 M50 55 L78 68 M50 35 L25 30 M50 45 L18 48 M50 55 L22 68" 
                          stroke="#F9F6F0" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Overlapping distinct badge "10+ Years of Artistry" */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.33 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-2 right-[-15px] bg-[#FFFFFF] hover:bg-[#F9F6F0] border border-[#E3B4B9] rounded-full p-4 md:p-5 shadow-lg flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 text-center group cursor-pointer transition-colors"
                  onClick={handleLearnMore}
                  id="about-badge-experience"
                >
                  <Award className="w-5 h-5 text-[#E3B4B9] group-hover:scale-110 transition-transform mb-1" />
                  <span className="text-lg md:text-xl font-serif text-[#4A3E3D] font-bold block leading-none">10+</span>
                  <span className="text-[7px] md:text-[8px] tracking-widest text-[#8A7A78] uppercase mt-0.5 leading-tight font-bold">Years of Artistry</span>
                </motion.div>
                
              </motion.div>
            </div>

            {/* RIGHT CONTENT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-center" id="about-content-pane">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.33 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 text-[#8A7A78] tracking-[0.34em] text-[10px] uppercase font-bold">
                  <span className="w-5 h-[1px] bg-[#E3B4B9]" />
                  <span>The Artisan Behind the Brush</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif text-[#4A3E3D]" id="about-title">
                  About Dhara Shah
                </h2>

                <div className="w-12 h-[2px] bg-[#E3B4B9]" />

                <div className="space-y-4 text-sm md:text-base text-[#8A7A78] font-light leading-relaxed font-sans" id="about-biography">
                  <p>
                    Greetings, I’m <strong className="font-semibold text-[#4A3E3D]">Dhara Shah</strong>, the artist behind <em className="italic text-[#4A3E3D]">Makeover By Dhara Shah</em>. With 10+ years of experience, I’ve had the privilege of styling brides, event looks, and elegant hair creations across Vadodara.
                  </p>

                  <p>
                    My approach is all about enhancing your natural beauty with refined, customized makeup rather than covering it. Using premium skin prep, high-quality cosmetics, and precision techniques, I create looks that feel flawless, radiant, and camera-ready all day.
                  </p>

                  <p>
                    Based in Akota near Akota Garden, my studio offers a calm and luxurious space for personalized beauty services. I’d love to welcome you for a consultation and help create a look that feels truly yours.
                  </p>
                </div>

                {/* Highlight badges */}
                <div className="grid grid-col-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-[#E3B4B9]/15" id="about-highlights">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#6f95a9]/30 p-2 rounded-full mt-1">
                      <Sparkles className="w-4 h-4 text-[#4A3E3D]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">HD / Airbrush Art</h4>
                      <p className="text-[11px] text-[#8A7A78] font-light mt-0.5">Custom photographic ready makeup formulas.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-[#E3B4B9]/30 p-2 rounded-full mt-1">
                      <Calendar className="w-4 h-4 text-[#4A3E3D]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Bespoke Trials</h4>
                      <p className="text-[11px] text-[#8A7A78] font-light mt-0.5">Complimentary color swatch matching session.</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
