'use client'

import { useState, useEffect, useRef } from "react";
import Button from "./button";
import { Send, Menu, X } from "lucide-react";

const links = [
  { label: "Servizi", href: "#services" },
  { label: "Come lavoro", href: "#workflow" },
  { label: "Prezzi", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeHref, setActiveHref] = useState("");

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        setVisible(currentY < lastY.current || currentY < 20);

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = links.map(({ href }) => {
      const el = document.querySelector(href);

      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveHref(href);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);

      return observer;
    });

    return () =>
      observers.forEach((o) => o?.disconnect());
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveHref(href);
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto mt-4 flex w-full max-w-7xl flex-col rounded-2xl border border-white/10 bg-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl md:w-[70%] lg:w-[60%]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8">

          {/* LOGO */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              setActiveHref("");
            }}
            className="md:hidden xl:block text-base "
          >
            <span className="text-[#2A6EF5] font-medium text-lg">
  {"< / > "}
</span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`relative text-sm transition-colors duration-300 ${
                    activeHref === l.href
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {l.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#2A6EF5] transition-all duration-300 ${
                      activeHref === l.href
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              href="mailto:simonegarofalo.dev@gmail.com"
            >
              Contattami
              <Send size={15} />
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Apri menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="relative h-5 w-5">

              <Menu
                size={22}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                size={22}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />

            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            isOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 border-t border-black/5 px-6 py-6">

            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`text-sm transition-colors ${
                  activeHref === l.href
                    ? "text-black"
                    : "text-neutral-500"
                }`}
              >
                {l.label}
              </a>
            ))}

            <Button
              variant="primary"
              href="mailto:simonegarofalo.dev@gmail.com"
            >
              Scrivimi ora
              <Send size={15} />
            </Button>

          </div>
        </div>

      </nav>
    </header>
  );
}