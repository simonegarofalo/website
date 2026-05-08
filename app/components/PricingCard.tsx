import { CircleCheck } from "lucide-react";

type PricingCardProps = {
  featured?: boolean;
  featuredLabel?: string;
  title: string;
  description: string;
  price: string;
  priceSuffix?: string;
  priceNote: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
};

export default function PricingCard({
  featured,
  featuredLabel,
  title,
  description,
  price,
  priceSuffix,
  priceNote,
  features,
  cta,
  ctaVariant,
}: PricingCardProps) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 gap-4 border ${featured ? "border-[#2A6EF5] bg-[#F4F8FF]" : "border-gray-200 bg-white"}`}>
      {featured && featuredLabel && (
        <span className="absolute -top-4 left-6 px-4 py-1 rounded-full border border-[#2A6EF5] text-[#2A6EF5] text-sm bg-white">
          {featuredLabel}
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-5xl font-black">{price}</span>
        {priceSuffix && <span className="text-gray-500 mb-1">{priceSuffix}</span>}
      </div>
      <p className="text-gray-400 text-sm">{priceNote}</p>
      <ul className="flex flex-col gap-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <CircleCheck size={18} className="text-green-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 mt-4 cursor-pointer ${
          ctaVariant === "primary"
            ? "bg-[#2A6EF5] text-white hover:bg-[#1a5edf]"
            : "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}