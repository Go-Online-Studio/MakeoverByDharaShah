/**
 * Device-aware WhatsApp redirection and routing handler.
 * Generates the ideal URL based on the user's current device (desktop vs mobile).
 */
export function getWhatsAppUrl(customText?: string): string {
  const phoneNumber = "918320713015"; // Clean Indian country-code phone number
  const defaultText = "Hi Dhara, I'm interested in booking an elegance appointment for a Makeover!";
  const txt = customText || defaultText;
  
  if (typeof navigator === "undefined") {
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(txt)}`;
  }

  const userAgent = navigator.userAgent || "";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(txt)}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(txt)}`;
  }
}
