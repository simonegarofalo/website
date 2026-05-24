"use client";

import { CircleCheck } from "lucide-react";
import Link from "next/link";
import Calendar from "./calendar";
import type { CtaType } from "../data/pricing";

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
  ctaType: CtaType;
  ctaVariant: "primary" | "secondary";
};

const WHATSAPP_URL =
  "https://wa.me/393342655103?text=Ciao%2C%20ho%20bisogno%20di%20un%20intervento%20sul%20mio%20sito.%20Il%20problema%20%C3%A8...";

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
  ctaType,
  ctaVariant,
}: PricingCardProps) {
  const renderCta = () => {
    if (ctaType === "whatsapp") {
      return (
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClass(ctaVariant)}
        >
          {cta}
        </Link>
      );
    }

    return (
      <Calendar
        variant={
          ctaType === "cal-manutenzione"
            ? "manutenzione-mensile"
            : "nuovo-progetto"
        }
        buttonLabel={cta}
        buttonVariant={ctaVariant}
      />
    );
  };

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 gap-4 border ${
        featured
          ? "border-[#2A6EF5] bg-[#F4F8FF]"
          : "border-gray-200 bg-white"
      }`}
    >
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
        {priceSuffix && (
          <span className="text-gray-500 mb-1">{priceSuffix}</span>
        )}
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
      <div className="mt-4 w-full">{renderCta()}</div>
    </div>
  );
}

function ctaClass(variant: "primary" | "secondary") {
  const base =
    "w-full rounded-xl py-3 text-center transition-all duration-200 block";
  const variants = {
    primary: "bg-[#2A6EF5] text-white hover:bg-[#1a5edf]",
    secondary:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
  };
  return `${base} ${variants[variant]}`;
}