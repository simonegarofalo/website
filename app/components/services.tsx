'use client'

import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

import { useState } from "react";

const filters = ["Tutti", "Intervento", "Sviluppo"];

export default function Services() {
    const [active, setActive] = useState("Tutti");
    const filtered = active === "Tutti"
    ? services
    : services.filter((s) => s.tag === active);
    return (
        <div className="w-full md:mb-12">
          <SectionHeader
          id="services"
            label="COSA FACCIO"
            title="Interventi e sviluppo su misura"
            description="Dal bug fix urgente al sito costruito da zero. Lavoro su due fronti: manutenzione di siti attivi e sviluppo di nuovi progetti."
          />
          <div className="flex gap-2 px-4 md:px-20 my-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-100 cursor-pointer ${
                  active === f
                    ? "border border-[#2A6EF5] text-[#2A6EF5] font-semibold bg-blue-50"
                    : "text-gray-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-20">
            {filtered.map((s) => (
              <ServiceCard
                key={s.id}
                icon={<s.icon size={20} />}
                iconBg={s.iconBg}
                iconColor={s.iconColor}
                title={s.title}
                description={s.description}
                tag={s.tag}
              />
            ))}
          </div>
        </div>
      );
    }