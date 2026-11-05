"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
  { label: "Clergy", href: "#clergy" },
  { label: "Gallery", href: "#gallery" },
  { label: "The App", href: "#app" },
];

const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border border-white/60 bg-white/90 backdrop-blur-md transition-all duration-300",
          isScrolled ? "shadow-[0_16px_40px_-20px_rgb(14_26_56/0.55)]" : ""
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5">
          <a href="#top" aria-label="All Souls' Church, Lekki home">
            <Image
              src="/images/church-logo.png"
              alt=""
              width={866}
              height={140}
              className="h-7 w-auto sm:h-9"
              preload
            />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-bold text-[#2B3A67] transition-colors hover:text-[#365FBE]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EFFF] text-[#2c4e9c] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-1 border-t border-slate-100 p-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-3 py-3 font-bold text-[#2B3A67] hover:bg-[#E8EFFF]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default LandingNav;
