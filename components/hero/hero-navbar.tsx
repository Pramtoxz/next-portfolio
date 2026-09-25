"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, profileData } from "@/lib/data/portfolio-data";

export function HeroNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 sm:top-7 inset-x-0 z-40 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div className="w-full max-w-4xl flex items-center justify-between rounded-full border border-black/10 bg-white/95 px-3 sm:px-5 py-2 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] pointer-events-auto">
        {/* Monogram Badge + Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-black min-h-[44px]"
          aria-label="Pramudito Metra Home"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-black flex items-center justify-center">
            <Image
              src="/assets/vectors/pm-logo.svg"
              alt="PM Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-xs sm:text-sm font-black tracking-tight text-black uppercase font-sans">
            DESIGN BY PRAMUDITO
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest text-neutral-600 font-sans"
          aria-label="Main Navigation"
        >
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-black min-h-[44px] inline-flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: HIRE ME Pill Button */}
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profileData.email}?subject=Project%20Inquiry`}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-black px-5 py-1.5 text-xs font-black tracking-wider text-black transition-all hover:bg-black hover:text-white active:scale-95 min-h-[44px]"
            aria-label={`Send email to ${profileData.email}`}
          >
            HIRE ME
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-neutral-100 text-black transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-black"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-4 h-0.5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-50 rounded-2xl border border-black/10 bg-white/95 p-6 backdrop-blur-xl shadow-2xl md:hidden pointer-events-auto">
          <nav className="flex flex-col gap-2 font-sans text-sm font-bold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 min-h-[44px]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-400">→</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-neutral-200 flex flex-col gap-2">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-xs font-black tracking-wider text-white min-h-[44px]"
              >
                HIRE ME
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
