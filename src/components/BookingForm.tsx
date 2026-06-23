import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, FileText, Send, Sparkles, AlertCircle, Heart, CheckCircle2, XCircle } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsappRouter";

/* ─── Validation helpers ─── */
function validateName(value: string) {
  if (!value.trim()) return "Full name is required.";
  if (value.trim().length < 2) return "Name must be at least 2 characters.";
  if (!/^[a-zA-Z\s'.,-]+$/.test(value.trim())) return "Name may only contain letters and basic punctuation.";
  return "";
}

function validateDate(value: string) {
  if (!value) return "Please select a proposed event date.";
  const chosen = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (chosen < today) return "Please choose a future date.";
  return "";
}

function validateServiceType(value: string) {
  if (!value) return "Please select an artistry focus.";
  return "";
}

function validateNotes(value: string) {
  if (value.length > 500) return "Special requests must be under 500 characters.";
  return "";
}

/* ─── Sub-component: animated feedback line ─── */
function FieldFeedback({
  error,
  touched,
  value,
}: {
  error: string;
  touched: boolean;
  value: string;
}) {
  if (!touched) return null;
  if (error) {
    return (
      <AnimatePresence>
        <motion.p
          key="error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1"
        >
          <XCircle className="w-3 h-3 shrink-0" />
          {error}
        </motion.p>
      </AnimatePresence>
    );
  }
  if (value.trim()) {
    return (
      <AnimatePresence>
        <motion.p
          key="ok"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium mt-1"
        >
          <CheckCircle2 className="w-3 h-3 shrink-0" />
          Looks good!
        </motion.p>
      </AnimatePresence>
    );
  }
  return null;
}

/* ─── Border/ring colour helper ─── */
function fieldBorderClass(error: string, touched: boolean, value: string) {
  if (!touched) return "border-[#E3B4B9]/20 focus:ring-[#E3B4B9]";
  if (error) return "border-red-400 focus:ring-red-300 bg-red-50/30";
  if (value.trim()) return "border-emerald-400 focus:ring-emerald-300";
  return "border-[#E3B4B9]/20 focus:ring-[#E3B4B9]";
}

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceType, setServiceType] = useState(""); // "" = placeholder "Choose a service..."
  const [additionalNotes, setAdditionalNotes] = useState("");

  /* ── Touched state — errors only appear after blur or submit attempt ── */
  const [touched, setTouched] = useState({
    fullName: false,
    serviceDate: false,
    serviceType: false,
  });

  /* ── Submitted flag — surfaces all errors at once on a failed submit ── */
  const [submitted, setSubmitted] = useState(false);

  /* ── Derived errors ── */
  const errors = {
    fullName: validateName(fullName),
    serviceDate: validateDate(serviceDate),
    serviceType: validateServiceType(serviceType),
    additionalNotes: validateNotes(additionalNotes),
  };

  /* Notes is optional — only block if it has a hard error (over 500 chars) */
  const isFormValid =
    !errors.fullName &&
    !errors.serviceDate &&
    !errors.serviceType &&
    !errors.additionalNotes;

  /* ── Local storage: restore name across visits ── */
  useEffect(() => {
    const cached = localStorage.getItem("dhara_shah_form_name");
    if (cached) setFullName(cached);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFullName(val);
    localStorage.setItem("dhara_shah_form_name", val);
    markTouched("fullName");
  };

  const markTouched = (field: keyof typeof touched) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  /* ── WhatsApp message generator ── */
  const generateMessageText = () => {
    const dateStr = serviceDate
      ? new Date(serviceDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "To be decided";

    return `Hello Dhara Shah! 💖

I would love to book a personalized beauty consultation. Here are my session details:

🌸 Name: ${fullName || "[Your Name]"}
📅 Requested Date: ${dateStr}
✨ Selected Service: ${serviceType || "[Not selected]"}
✍️ Special Requests: ${additionalNotes || "No special requests mentioned."}

Could you please confirm your availability, trial schedule, and package options for this slot? Thank you!`;
  };

  /* ── Submit handler ── */
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark everything touched to reveal all errors
    setTouched({ fullName: true, serviceDate: true, serviceType: true });
    setSubmitted(true);

    if (!isFormValid) return; // Hard block — do not open WhatsApp

    const url = getWhatsAppUrl(generateMessageText());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const touchedOrSubmitted = (field: keyof typeof touched) =>
    touched[field] || submitted;

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F9F6F0] relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none select-none z-10" id="booking-decorations">
        <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-[#E3B4B9]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#6f95a9]/15 rounded-full blur-[80px]" />
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
            Direct &amp; Effortless Booking
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3E3D] leading-tight">
            Schedule Your <span className="italic font-normal text-[#E3B4B9]">Makeover Session</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#E3B4B9] mx-auto mt-4 mb-6" />
          <p className="text-[#8A7A78] font-light text-sm md:text-base leading-relaxed tracking-wide font-sans">
            Have a wedding, engagement party, or premium photoshoot coming up? Fill out your details below to preview your customized appointment message, then tap to send it directly to Dhara Shah on WhatsApp!
          </p>
        </div>

        {/* Form + Preview grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="booking-grid-box">

          {/* LEFT 7-cols: Interactive Form */}
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

            {/* Global error summary — only shown after a failed submit */}
            <AnimatePresence>
              {submitted && !isFormValid && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-300 rounded-xl"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-red-600 mb-1">Please fix the following before sending:</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      {errors.fullName    && <li className="text-[11px] text-red-500">{errors.fullName}</li>}
                      {errors.serviceDate && <li className="text-[11px] text-red-500">{errors.serviceDate}</li>}
                      {errors.serviceType && <li className="text-[11px] text-red-500">{errors.serviceType}</li>}
                      {errors.additionalNotes && <li className="text-[11px] text-red-500">{errors.additionalNotes}</li>}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSendWhatsApp} className="space-y-5" noValidate>

              {/* ── 1. Full Name ── */}
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1"
                >
                  <User className="w-3 h-3 text-[#E3B4B9]" />
                  <span>
                    1. Full Name <span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your beautiful name..."
                  value={fullName}
                  onChange={handleNameChange}
                  onBlur={() => markTouched("fullName")}
                  aria-invalid={!!(touchedOrSubmitted("fullName") && errors.fullName)}
                  aria-describedby="fullName-feedback"
                  className={`w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border text-[#4A3E3D] placeholder-[#8A7A78]/50 focus:outline-none focus:ring-1 transition-all font-sans ${fieldBorderClass(errors.fullName, touchedOrSubmitted("fullName"), fullName)}`}
                />
                <div id="fullName-feedback">
                  <FieldFeedback
                    error={errors.fullName}
                    touched={touchedOrSubmitted("fullName")}
                    value={fullName}
                  />
                </div>
              </div>

              {/* ── 2 + 3: Date & Service in a grid ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* ── 2. Proposed Date (required) ── */}
                <div className="space-y-1">
                  <label
                    htmlFor="serviceDate"
                    className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1"
                  >
                    <Calendar className="w-3 h-3 text-[#E3B4B9]" />
                    <span>
                      2. Proposed Event Date <span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type="date"
                    id="serviceDate"
                    value={serviceDate}
                    onChange={(e) => {
                      setServiceDate(e.target.value);
                      markTouched("serviceDate");
                    }}
                    onBlur={() => markTouched("serviceDate")}
                    min={new Date().toISOString().split("T")[0]}
                    aria-invalid={!!(touchedOrSubmitted("serviceDate") && errors.serviceDate)}
                    aria-describedby="serviceDate-feedback"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border text-[#4A3E3D] focus:outline-none focus:ring-1 transition-all font-sans ${fieldBorderClass(errors.serviceDate, touchedOrSubmitted("serviceDate"), serviceDate)}`}
                  />
                  <div id="serviceDate-feedback">
                    <FieldFeedback
                      error={errors.serviceDate}
                      touched={touchedOrSubmitted("serviceDate")}
                      value={serviceDate}
                    />
                  </div>
                </div>

                {/* ── 3. Service Type (required — must move away from placeholder) ── */}
                <div className="space-y-1">
                  <label
                    htmlFor="serviceType"
                    className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center space-x-1"
                  >
                    <Sparkles className="w-3 h-3 text-[#E3B4B9]" />
                    <span>
                      3. Choose Artistry Focus <span className="text-red-400">*</span>
                    </span>
                  </label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => {
                      setServiceType(e.target.value);
                      markTouched("serviceType");
                    }}
                    onBlur={() => markTouched("serviceType")}
                    aria-invalid={!!(touchedOrSubmitted("serviceType") && errors.serviceType)}
                    aria-describedby="serviceType-feedback"
                    className={`w-full px-4 py-3.5 text-xs tracking-wider rounded-xl bg-[#F9F6F0]/60 border text-[#4A3E3D] focus:outline-none focus:ring-1 transition-all font-sans uppercase ${fieldBorderClass(errors.serviceType, touchedOrSubmitted("serviceType"), serviceType)}`}
                  >
                    {/* Placeholder option — disabled so user can't reselect it */}
                    <option value="" disabled>
                      — Choose a service —
                    </option>
                    <option value="Royal Bridal Makeover">Royal Bridal Makeover</option>
                    <option value="Luxury Party & Sangeet Makeup">Luxury Party &amp; Sangeet Makeup</option>
                    <option value="Elite Hairstyling Service">Elite Hairstyling Service</option>
                    <option value="Luminous Skincare Prep">Luminous Skincare Prep</option>
                    <option value="Bespoke Multiple-Event Package">Bespoke Multiple-Event Package</option>
                  </select>
                  <div id="serviceType-feedback">
                    <FieldFeedback
                      error={errors.serviceType}
                      touched={touchedOrSubmitted("serviceType")}
                      value={serviceType}
                    />
                  </div>
                </div>

              </div>

              {/* ── 4. Special Requests (optional — no required asterisk) ── */}
              <div className="space-y-1">
                <label
                  htmlFor="additionalNotes"
                  className="text-[10px] uppercase font-bold tracking-widest text-[#4A3E3D]/80 flex items-center justify-between"
                >
                  <span className="flex items-center space-x-1">
                    <FileText className="w-3 h-3 text-[#E3B4B9]" />
                    <span>4. Specific Requests or Event Venue Details:</span>
                  </span>
                  <span
                    className={`text-[10px] font-normal tabular-nums ${
                      additionalNotes.length > 450 ? "text-red-400" : "text-[#8A7A78]/60"
                    }`}
                  >
                    {additionalNotes.length}/500
                  </span>
                </label>
                <textarea
                  id="additionalNotes"
                  rows={3}
                  placeholder="Tell us about your outfit theme, companion count, or timing preferences..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  maxLength={500}
                  aria-describedby="notes-feedback"
                  className={`w-full px-4 py-3 text-sm rounded-xl bg-[#F9F6F0]/60 border text-[#4A3E3D] placeholder-[#8A7A78]/50 focus:outline-none focus:ring-1 focus:ring-sky-700/45 transition-all font-sans resize-none border-[#E3B4B9]/20`}
                />
                {errors.additionalNotes && (
                  <p
                    id="notes-feedback"
                    className="flex items-center gap-1 text-[11px] text-red-500 font-medium mt-1"
                  >
                    <XCircle className="w-3 h-3 shrink-0" />
                    {errors.additionalNotes}
                  </p>
                )}
              </div>

              {/* WhatsApp info note */}
              <div className="p-3.5 bg-[#6f95a9]/10 border border-[#6f95a9]/30 rounded-xl flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-[#8A7A78] shrink-0 mt-0.5" />
                <span className="text-[10px] text-[#8A7A78] leading-normal font-sans font-light">
                  Once you tap the action below, WhatsApp will open on your device. You can review or edit the message directly before sending it to Dhara.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300 transform flex items-center justify-center space-x-2 ${
                  isFormValid
                    ? "bg-[#4A3E3D] hover:bg-[#5f504e] text-white hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                    : "bg-[#4A3E3D]/40 text-white/70 cursor-not-allowed"
                }`}
                id="booking-form-submit-btn"
              >
                <Send className="w-4 h-4 text-[#E3B4B9]" />
                <span>SEND DIRECT BOOKING MESSAGE VIA WHATSAPP</span>
              </button>

            </form>
          </motion.div>

          {/* RIGHT 5-cols: Message Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-[#FFFFFF]/60 rounded-[2rem] border border-[#E3B4B9]/20 p-6 sm:p-8 space-y-4"
            id="booking-preview-card"
          >
            <div className="flex items-center justify-between pb-1">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#E3B4B9] font-bold block">Preview Generation</span>
                <span className="text-xs font-semibold text-[#4A3E3D] font-serif">What will be sent on WhatsApp</span>
              </div>
              <div className="px-2.5 py-1 text-[9px] bg-[#E3B4B9]/15 text-[#E3B4B9] border border-[#E3B4B9]/30 rounded-full font-bold">
                REAL-TIME
              </div>
            </div>

            <div className="bg-[#FAF8F5] border border-[#E3B4B9]/15 rounded-2xl p-5 relative min-h-[220px]" id="simulated-chat-bubble">
              <span className="absolute top-2 left-3 text-[9px] tracking-wider text-[#8A7A78] uppercase font-bold">
                WHATSAPP MESSAGE STRUCTURE
              </span>
              <div className="mt-5 text-xs text-[#8A7A78] leading-relaxed whitespace-pre-wrap font-sans font-light bg-[#FFFFFF] p-4 rounded-xl border border-[#4A3E3D]/5 shadow-inner">
                {generateMessageText()}
              </div>
            </div>

            <p className="text-[10px] text-center text-[#8A7A78] italic font-light">
              * Name, date, and service selection are required before sending.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
