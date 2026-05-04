import SectionHeader from "./SectionHeader";
import Button from "./button";

export default function PreFooter() {
  return (
    <div className="w-full flex flex-col items-center bg-[#F4F8FF] mt-10 md:mt-20 text-center">
      <SectionHeader
        label="SENTIAMOCI"
        title="Hai in mente un progetto?"
        description="Raccontami la tua idea. La prima chiamata è sempre gratuita e senza impegno."
      />
      <div className="flex flex-col sm:flex-row gap-2 max-w-fit pt-6">
      <Button variant="primary" href="#">
            Scrivimi ora
            </Button>
            <Button variant="secondary" href="#">
                Prenota una chiamata
            </Button>
            </div>
            <div className="message-text text-xs sm:text-base pt-4 px-4 mb-10 md:mb-20">
                <p>Rispondo entro 24 ore · Disponibile su WhatsApp, email e videocall</p>
            </div>
    </div>
  );
}