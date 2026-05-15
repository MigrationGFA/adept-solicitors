import { MessageCircle, CalendarDays } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="size-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-105 transition"
      >
        <MessageCircle className="size-6" />
      </a>
      <Link
        to="/book-consultation"
        aria-label="Book consultation"
        className="hidden md:flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-4 py-3 text-sm font-medium shadow-elegant hover:bg-navy/90 transition"
      >
        <CalendarDays className="size-4" /> Book Consultation
      </Link>
    </div>
  );
}
