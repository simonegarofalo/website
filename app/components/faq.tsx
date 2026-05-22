'use client'

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Tab from "./tab";

import { faq } from "../data/faq";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return(
        <>
        <SectionHeader
        id="faq"
      label="FAQ"
      title="Domande frequenti"
      description=""
    />
    <div className="px-4 md:px-20">
        {faq.map((f, i) => (
          <Tab
            key={f.id}
            {...f}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
      </>
    )
}