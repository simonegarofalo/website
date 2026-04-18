import Button from "./button";

export default function Hero() {

  return (
    <div className="hero-component">
        <div className="hero-message flex items-center gap-2 mb-4">
            <div className="available-icon w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="message-text">
                <p>Disponibile per nuovi progetti — rispondo entro 24h</p>
            </div>
        </div>
        <div className="hero-content pb-8">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2">Il tuo sito web<br />
            <span className="text-[#2A6EF5]"> funziona davvero?</span>
            </h1>
            <p className="sm:max-w-[55%]">Sviluppo e ottimizzo siti web e e-commerce con WordPress, Shopify e  React. Interventi 
                <span className="text-[#2A6EF5]"> mirati</span>, 
                risultati<span className="text-[#2A6EF5]"> misurabili</span>.<br /> 
                Senza agenzie, senza  intermediari.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="primary" href="#">
            Raccontami il tuo progetto
            </Button>
            <Button variant="secondary" href="#">
                Scopri di più
            </Button>
        </div>
    </div>
  );
}
