import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "918356837052";
  const message = encodeURIComponent("Hi! I'm interested in learning more about GD Pro Academy's training programs.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
