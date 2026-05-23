"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { ReactNode } from "react";

type CalendarVariant = "manutenzione-mensile" | "nuovo-progetto" | "conosciamoci";

const CAL_LINK: Record<CalendarVariant, string> = {
  "manutenzione-mensile": "simone-garofalo-hfafh3/manutenzione-mensile",
  "nuovo-progetto": "simone-garofalo-hfafh3/nuovo-progetto",
  "conosciamoci": "simone-garofalo-hfafh3/conosciamoci"
};

const CAL_CONFIG = JSON.stringify({
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
});

type CalendarProps = {
  variant: CalendarVariant;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary";
  icon?: ReactNode;
};

export default function Calendar({ variant, buttonLabel, buttonVariant = "primary", icon }: CalendarProps) {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: variant });
      if (cancelled) return;
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
    return () => { cancelled = true; };
  }, [variant]);

  const base = "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-light cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition";

  const styles = {
    primary: "bg-[#2A6EF5] text-white hover:bg-blue-600 focus-visible:ring-blue-500",
    secondary: "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 focus-visible:ring-gray-300",
  };

  return (
    <button
      data-cal-namespace={variant}
      data-cal-link={CAL_LINK[variant]}
      data-cal-config={CAL_CONFIG}
      className={`${base} ${styles[buttonVariant]}, w-full`}
    >
      {buttonLabel}
      {icon && icon}
    </button>
  );
}