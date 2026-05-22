import Button from "./button";
import { ArrowRight } from "lucide-react";

export default function Hero() {

  return (
    <div className="px-4 md:px-20 mt-34 md:mt-40">
        <div className="hero-message flex items-center gap-2 mb-4">
            <div className="available-icon w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <div className="message-text text-xs sm:text-base">
                <p>Disponibile per nuovi progetti — rispondo entro 24h</p>
            </div>
        </div>
        <div className="hero-content pb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-2">Il tuo sito web<br />
            <span className="text-[#2A6EF5]"> funziona davvero?</span>
            </h1>
            <p className="sm:max-w-[55%]">Sviluppo e ottimizzo siti web e e-commerce con WordPress, Shopify e  React.<br /> 
            Interventi<span className="text-[#2A6EF5]"> <b>mirati</b></span>, 
                risultati<span className="text-[#2A6EF5]"> <b>misurabili</b></span>.
                Senza agenzie, senza  intermediari.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 max-w-fit">
            <Button variant="primary" href="#pricing">
            Scegli un servizio
            </Button>
            <Button variant="secondary" href="#services">
                Scopri di più <ArrowRight size={16} />
            </Button>
        </div>
    </div>
  );
}
