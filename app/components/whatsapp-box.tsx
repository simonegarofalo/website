"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PHONE = "393342655103";
const MESSAGE = "Ciao, vorrei informazioni sui tuoi servizi web";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a7.92 7.92 0 0 1-1.21-4.27c0-4.37 3.55-7.93 7.92-7.93 2.12 0 4.1.82 5.6 2.32a7.88 7.88 0 0 1 2.32 5.6c-.01 4.37-3.56 7.93-7.92 7.93zm4.34-5.93c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.09 3.62.57.25 1.02.39 1.37.5.57.18 1.09.15 1.5.09.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export default function WhatsAppBox() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Panel — invisible rimuove l'intero sottoalbero dall'hit-testing tree */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "visible pointer-events-auto opacity-100 scale-100 translate-y-0"
            : "invisible pointer-events-none opacity-0 scale-95 translate-y-2"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Contatta su WhatsApp"
      >
        <div className="w-64 sm:w-72 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">Simone</p>
                <p className="text-white/80 text-xs font-light">Rispondo entro 24h</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi pannello WhatsApp"
              className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 min-w-[32px] min-h-[32px] flex items-center justify-center"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat preview */}
          <div className="px-4 py-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm max-w-[88%]">
              <p className="text-gray-800 text-sm font-light leading-snug">
                Ciao! 👋🏼 Come posso aiutarti con il tuo sito web?
              </p>
              <p className="text-gray-400 text-[10px] text-right mt-1">adesso</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-4 py-3 bg-white border-t border-gray-100">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri conversazione su WhatsApp"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b85a] text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors min-h-[44px]"
            >
              <WhatsAppIcon size={20} />
              Inizia la chat
            </a>
          </div>

        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Chiudi WhatsApp" : "Contattami su WhatsApp"}
        aria-expanded={isOpen}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b85a] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center shrink-0"
      >
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"
          }`}
        >
          {isOpen ? <X size={24} /> : <WhatsAppIcon size={26} />}
        </span>
      </button>
    </div>
  );
}
