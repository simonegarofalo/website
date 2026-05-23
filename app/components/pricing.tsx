import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";
import { pricing } from "../data/pricing";

export default function Pricing() {
  return (
    <div className="w-full mb-10 md:mb-20">
      <SectionHeader
      id="pricing"
        label="PREZZI"
        title="Piani chiari, nessuna sorpresa"
        description="Per interventi ricorrenti o progetti one shot: scegli la formula più adatta."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-20 mt-8 md:mt-16">
        {pricing.map((p) => (
          <PricingCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}