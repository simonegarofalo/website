import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const base =
    "group flex items-center justify-center overflow-hidden px-4 py-2 rounded-lg font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition hover:gap-2";
const primary = `${base} bg-[#2A6EF5] text-white hover:bg-blue-600 focus-visible:ring-blue-500`;
const secondary = `${base} border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 focus-visible:ring-gray-300`;

const textCls =
    "transition-transform duration-300 ease-in-out group-hover:-translate-x-1";
const iconCls =
    "w-0 opacity-0 flex-shrink-0 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:opacity-100";

export default function Hero() {
    return (
        <div className="px-4 md:px-20 mt-34 md:mt-40">
            <div className="hero-message flex items-center gap-2 mb-4">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="message-text text-xs sm:text-base">
                    <p>Disponibile per nuovi progetti — rispondo entro 24h</p>
                </div>
            </div>
            <div className="hero-content pb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-2">
                    Il tuo sito web<br />
                    <span className="text-[#2A6EF5]"> funziona davvero?</span>
                </h1>
                <p className="sm:max-w-[55%]">
                    Sviluppo e ottimizzo siti web e e-commerce con WordPress, Shopify e React.<br />
                    Interventi<span className="text-[#2A6EF5]"> <b>mirati</b></span>,
                    risultati<span className="text-[#2A6EF5]"> <b>misurabili</b></span>.
                    Senza agenzie, senza intermediari.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 max-w-fit">
                <Link
                    href="https://cal.com/simone-garofalo-hfafh3/conosciamoci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primary}
                >
                    <span className={textCls}>Prenota una call gratuita</span>
                    <Calendar size={16} className={iconCls} />
                </Link>
                <Link href="#services" className={secondary}>
                    <span className={textCls}>Scopri tutti i servizi</span>
                    <ArrowRight size={16} className={iconCls} />
                </Link>
            </div>
        </div>
    );
}