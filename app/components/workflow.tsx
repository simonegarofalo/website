'use client'

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Tab from "./tab";

import { workflow } from "../data/workflow";

export default function Workflow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mb-20">
      <SectionHeader
        label="COME LAVORO"
        title="Semplice, trasparente, efficace"
        description="Nessun processo burocratico. Solo passaggi chiari da quando mi contatti a quando il progetto è online."
      />
      <div className="px-8 md:px-20">
        {workflow.map((w, i) => (
          <Tab
            key={w.number}
            {...w}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}