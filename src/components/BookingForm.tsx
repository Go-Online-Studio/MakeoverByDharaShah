import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, User, FileText, Send, Sparkles, AlertCircle, Heart } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceType, setServiceType] = useState("Bridal Makeup Collection");
  const [additionalNotes, setAdditionalNotes] = useState("");
  
  // Local storage cache to load previous form details if they exist
  useEffect(() => {
    const cachedName = localStorage.getItem("dhara_shah_form_name");
    if (cachedName) setFullName(cachedName);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFullName(val);
    localStorage.setItem("dhara_shah_form_name", val);
  };

  // Generate the formatted WhatsApp message dynamically
  const generateMessageText = () => {
    const dateStr = serviceDate ? new Date(serviceDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }) : "To be decided";

    return `Hello Dhara Shah! 💖

I would love to book a personalized beauty consultation. Here are my session details:

🌸 Name: ${fullName || "[Your Name]"}
📅 Requested Date: ${dateStr}
✨ Selected Service: ${serviceType}
✍️ Special Requests: ${additionalNotes || "No special requests mentioned."}

Could you please confirm your availability, trial schedule, and package options for this slot? Thank you!`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      return;
    }
    const message = generateMessageText();
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F9F6F0] relative overflow-hidden">
      
      {/* Decorative Warm Organic / Cultural background aesthetics */}
      <div className="absolute inset-0 pointer-events-none select-none z-10" id="booking-decorations">
        <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-[#E3B4B9]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#B5C7CD]/15 rounded-full blur-[80px]" />
        
        {/* Abstract leaf shape line */}
        <div className="absolute top-[30%] left-[3%] w-24 h-24 text-[#8A7A78]/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.12,20C11,20 14,14 14,14C16,16 17,16 18,15C21,12 21,5 21,5C21,5 19,7 17,8Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="booking-header">
          <span className="text-xs tracking-[0.35em] text-[#807270] uppercase font-bold block mb-4">
            Direct & Effortless Booking
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3E3D] leading-tight">
            Schedule Your <span className="italic font-normal text-[#E3B4B9]">Makeover Session</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E3B4B9] mx-auto mt-4 mb-6" />
          <p className="text-[#8A7A78] font-light text-sm md:text-base leading-relaxed tracking-wide font-sans">
            Have a wedding, engagement party, or premium photoshoot coming up? Fill out your details below to preview your customized appointment message, then tap to send it directly to Dhara Shah on WhatsApp!
          </p>
        </div>

        {/* Input Form & Preloaded Preview layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="booking-grid-box">
          
          {/* LEFT 7-COLUMNS: The Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FFFFFF] rounded-[2rem] border border-[#E3B4B9]/20 p-6 sm:p-10 shadow-sm space-y-6"
            id="booking-form-card"
          >
            <div className="flex items-center space-x-2 pb-2 border-b border-[#F9F6F0]">
              <Heart className="w-4 h-4 text-[#E3B4B9]" />
              <h3 className="text-lg font-serif text-[#4A3E3D] tracking-wide">Enter Session Preferences</h3>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              
              {/* Full Name field */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1">
                  <User className="w-3 h-3 text-[#E3B4B9]" />
                  <span>1. Full Name (Required):</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your beautiful name..."
                  value={fullName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border border-[#E3B4B9]/20 text-[#4A3E3D] placeholder-[#8A7A78]/50 focus:outline-none focus:ring-1 focus:ring-[#E3B4B9] focus:bg-white transition-all font-sans"
                  required
                />
              </div>

              {/* Grid for Date & Service Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Proposed Date Field */}
                <div className="space-y-2">
                  <label htmlFor="serviceDate" className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-[#E3B4B9]" />
                    <span>2. Proposed Event Date:</span>
                  </label>
                  <input
                    type="date"
                    id="serviceDate"
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border border-[#E3B4B9]/20 text-[#4A3E3D] focus:outline-none focus:ring-1 focus:ring-[#E3B4B9] focus:bg-white transition-all font-sans"
                  />
                </div>

                {/* Service Type Selection */}
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-[#E3B4B9]" />
                    <span>3. Choose Artistry Focus:</span>
                  </label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3.5 text-xs tracking-wider rounded-xl bg-[#F9F6F0]/60 border border-[#E3B4B9]/20 text-[#4A3E3D] focus:outline-none focus:ring-1 focus:ring-[#E3B4B9] focus:bg-white transition-all font-sans uppercase"
                  >
                    <option value="Royal Bridal Makeover">Royal Bridal Makeover</option>
                    <option value="Luxury Party & Sangeet Makeup">Luxury Party & Sangeet Makeup</option>
                    <option value="Elite Hairstyling Service">Elite Hairstyling Service</option>
                    <option value="Luminous Skincare Prep">Luminous Skincare Prep</option>
                    <option value="Bespoke Multiple-Event Package">Bespoke Multiple-Event Package</option>
                  </select>
                </div>

              </div>

              {/* Special Requests textarea */}
              <div className="space-y-2">
                <label htmlFor="additionalNotes" className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1">
                  <FileText className="w-3 h-3 text-[#E3B4B9]" />
                  <span>4. Specific Requests or Event venue details:</span>
                </label>
                <textarea
                  id="additionalNotes"
                  rows={3}
                  placeholder="Tell us about your outfit theme, companion count, or timing preferences..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border border-[#E3B4B9]/20 text-[#4A3E3D] placeholder-[#8A7A78]/50 focus:outline-none focus:ring-1 focus:ring-[#E3B4B9] focus:bg-white transition-all font-sans"
                />
              </div>

              {/* Alert Guidelines Note */}
              <div className="p-3.5 bg-[#B5C7CD]/10 border border-[#B5C7CD]/30 rounded-xl flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-[#8A7A78] shrink-0 mt-0.5" />
                <span className="text-[10px] text-[#8A7A78] leading-normal font-sans font-light">
                  Once you tap the action below, standard WhatsApp will boot up on your device. You can review of edit the message directly before sending it to Dhara.
                </span>
              </div>

              {/* Responsive CTA Button */}
              <button
                type="submit"
                disabled={!fullName.trim()}
                className={`w-full py-4 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 cursor-pointer ${
                  fullName.trim()
                    ? "bg-[#4A3E3D] hover:bg-[#5f504e] text-white hover:shadow-lg"
                    : "bg-[#4A3E3D]/30 text-white/70 cursor-not-allowed"
                }`}
                id="booking-form-submit-btn"
              >
                <Send className="w-4 h-4 text-[#E3B4B9]" />
                <span>SEND DIRECT BOOKING MESSAGE VIA WHATSAPP</span>
              </button>

            </form>
          </motion.div>

          {/* RIGHT 5-COLUMNS: The Preloaded Message Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#FFFFFF]/60 rounded-[2rem] border border-[#E3B4B9]/20 p-6 sm:p-8 space-y-4"
            id="booking-preview-card"
          >
            <div className="flex items-center justify-betweenpb-1">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#E3B4B9] font-bold block">Preview Generation</span>
                <span className="text-xs font-semibold text-[#4A3E3D] font-serif">What will be sent on WhatsApp</span>
              </div>
              <div className="px-2.5 py-1 text-[9px] bg-[#E3B4B9]/15 text-[#E3B4B9] border border-[#E3B4B9]/30 rounded-full font-bold">
                REAL-TIME
              </div>
            </div>

            {/* Simulated smartphone chat bubble */}
            <div className="bg-[#FAF8F5] border border-[#E3B4B9]/15 rounded-2xl p-5 relative min-h-[220px]" id="simulated-chat-bubble">
              <span className="absolute top-2 left-3 text-[9px] tracking-wider text-[#8A7A78] uppercase font-bold">WHATSAPP MESSAGE STRUCTURE</span>
              
              {/* Message text display box mock */}
              <div className="mt-5 text-xs text-[#8A7A78] leading-relaxed whitespace-pre-wrap font-sans font-light bg-[#FFFFFF] p-4 rounded-xl border border-[#4A3E3D]/5 shadow-inner">
                {generateMessageText()}
              </div>
            </div>

            {/* Quick Helper Tip */}
            <p className="text-[10px] text-center text-[#8A7A78] italic font-light">
              *Your name must be filled in to enable the responsive submit sequence.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
