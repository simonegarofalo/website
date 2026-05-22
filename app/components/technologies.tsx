import SectionHeader from "./SectionHeader";
import { technologies } from "../data/technologies";

type Variant = "wordpress" | "shopify" | "nextreact";

const variantClasses: Record<Variant, string> = {
  wordpress: "border-[#004A6D] text-[#004A6D] bg-[#0073AA19]",
  shopify:   "border-[#558200] text-[#558200] bg-[#95BF4614]",
  nextreact: "border-[#003FBC] text-[#003FBC] bg-[#DFE9FF]",
};

const baseClasses = "flex items-center justify-center px-8 py-2 rounded-full border font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition";

export default function Technologies() {
  return (
    <div className="w-full bg-[#F4F8FF] mt-10">
      <SectionHeader
      id="technologies"
        label="LE TECNOLOGIE"
        title="Tecnologie solide per risultati concreti"
        description="Strumenti e tecnologie affidabili per sviluppare prodotti performanti, scalabili e facili da gestire. Scelte prese in base alle reali esigenze del progetto, con un focus su performace, SEO e semplicità di manutenzione."
      />
      <div className="flex flex-wrap gap-4 px-4 md:px-20 mt-4 mb-10 md:mb-20">
        {technologies.map((t) => (
          <div
            key={t.label}
            className={`${baseClasses} ${t.variant ? variantClasses[t.variant as Variant] : "border-gray-300 text-gray-600"}`}
          >
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}