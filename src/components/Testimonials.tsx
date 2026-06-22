import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aparna Patel",
    role: "Bridal Client (Dec 2025)",
    text: "Dhara did my makeup for my wedding and sangeet night, and she was absolute magic! The makeup was flawless, felt so light, and lasted from 11 am till midnight without any touchups. I received endless compliments. Her calming nature on the wedding morning is such an added blessing!",
    rating: 5
  },
  {
    id: 2,
    name: "Meera Vyas",
    role: "Sangeet Ceremony Makeover",
    text: "I booked Dhara for my reception and party makeup, and she is truly the best makeup artist in Vadodara! She understood my requirement for 'no-makeup glass skin' perfectly and delivered beyond my expectations. The hairstyling was absolute perfection.",
    rating: 5
  },
  {
    id: 3,
    name: "Niki Shah",
    role: "Pre-Wedding & Cocktail Party",
    text: "Highly professional and punctual team! Dhara Shah customized the entire skin prep before starting my look. The airbrush finish was spectacularly smooth, and she matched my traditional jewelry exquisitely. Worth every single rupee!",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1920')",
      }}
    >
      {/* Heavy, soft, elegant warm cream overlay for legibility and theme congruency */}
      <div className="absolute inset-0 bg-[#F9F6F0]/92 backdrop-blur-xs z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-[#8A7A78] tracking-[0.34em] text-[10px] uppercase font-bold">
            <span className="w-5 h-[1px] bg-[#E3B4B9]" />
            <span>Words from My Radiant Brides</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#4A3E3D] mt-4" id="testimonials-title">
            Client Love & Accolades
          </h2>
          <div className="w-12 h-[2px] bg-[#E3B4B9] mx-auto mt-3" />
        </div>

        {/* Carousel Slider Panel Container */}
        <div 
          className="relative bg-white/70 border border-[#E3B4B9]/20 rounded-[2.5rem] p-8 md:p-14 shadow-lg text-center overflow-hidden"
          id="testimonial-slider-frame"
        >
          {/* Faint Extra-large Serif Quotation Mark layered behind */}
          <div 
            className="absolute top-2 left-6 text-9xl font-serif text-[#E3B4B9]/15 select-none pointer-events-none"
            style={{ fontSize: "16rem", lineHeight: 0.8 }}
            id="testimonial-quotation-mark"
          >
            “
          </div>

          <div className="relative min-h-[220px] flex flex-col justify-center items-center" id="testimonial-slide-show">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Visual Stars */}
                <div className="flex justify-center space-x-1.5" id="stars-row">
                  {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E3B4B9] text-[#E3B4B9]" />
                  ))}
                </div>

                {/* Testimonial Quote body text */}
                <p 
                  className="text-[#4A3E3D] text-sm sm:text-base md:text-lg font-light leading-relaxed italic font-serif px-2 sm:px-6"
                  id={`testimonial-text-${testimonialsData[currentIndex].id}`}
                >
                  "{testimonialsData[currentIndex].text}"
                </p>

                {/* Separator line */}
                <div className="w-6 h-[1px] bg-[#E3B4B9] mx-auto" />

                {/* Client info */}
                <div>
                  <h4 
                    className="text-[#4A3E3D] text-sm tracking-wider uppercase font-semibold"
                    id={`testimonial-author-${testimonialsData[currentIndex].id}`}
                  >
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p 
                    className="text-xs text-[#8A7A78] uppercase tracking-widest mt-1"
                    id={`testimonial-role-${testimonialsData[currentIndex].id}`}
                  >
                    {testimonialsData[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers */}
          <div className="flex justify-between items-center mt-8 pt-4" id="testimonial-navigation-bar">
            {/* Left Button Pointer */}
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-[#E3B4B9]/20 border border-[#E3B4B9]/30 text-[#4A3E3D] p-3 rounded-full transition-colors duration-300 shadow-sm"
              aria-label="Previous Testimonial"
              id="slider-control-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Active dots/progress indicators */}
            <div className="flex space-x-2" id="slider-page-dots">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "bg-[#E3B4B9] w-6" : "bg-[#B5C7CD] w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  id={`slider-dot-${i}`}
                />
              ))}
            </div>

            {/* Right Button Pointer */}
            <button
              onClick={handleNext}
              className="bg-white hover:bg-[#E3B4B9]/20 border border-[#E3B4B9]/30 text-[#4A3E3D] p-3 rounded-full transition-colors duration-300 shadow-sm"
              aria-label="Next Testimonial"
              id="slider-control-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Brand highlight */}
        <div className="mt-12 text-center text-xs tracking-widest text-[#8A7A78] uppercase flex items-center justify-center space-x-1.5 font-bold" id="testimonials-outro">
          <span>Trusted by over 800+ brides in Vadodara</span>
          <Heart className="w-3.5 h-3.5 text-[#E3B4B9] fill-[#E3B4B9]" />
        </div>

      </div>
    </section>
  );
}
