'use client';
import SectionHeader from "./SectionHeader";
import Button from "./button";
import { CalendarIcon, MessageCircle, Send } from "lucide-react"
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/393342655103?text=Ciao%2C%20vorrei%20informazioni%20sui%20tuoi%20servizi%20web";
const EMAIL = "simonegarofalo.dev@gmail.com";

export default function PreFooter() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F4F8FF] mt-10 md:mt-20 text-center">
      <SectionHeader
        id="prefooter"
        label="SENTIAMOCI"
        title="Hai in mente un progetto?"
        description="Raccontami la tua idea. La prima chiamata è sempre gratuita e senza impegno."
      />
      <div className="flex flex-col sm:flex-row gap-2 pt-6">
        <Button variant="primary" href={WHATSAPP_URL} target="_blank">
          Scrivimi su WhatsApp <MessageCircle size={16} />
        </Button>
        <Button variant="secondary" href="https://cal.com/simone-garofalo-hfafh3/conosciamoci" target="_blank">
          Prenota una call <CalendarIcon size={18} />
        </Button>
      </div>
      <span className="my-4">oppure</span>
      <div className="flex items-center gap-4 mb-10 md:mb-20">
        <Link
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500 hover:text-black transition-colors"
        >
          <Send size={18} />
          {EMAIL}
        </Link>
      </div>
    </div>
  );
}