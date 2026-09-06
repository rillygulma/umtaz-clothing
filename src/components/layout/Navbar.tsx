"use client";

import Link from "next/link";
import { Menu, X, UserRound } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Designs", href: "/designs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b08a3e]">
            <span className="text-lg font-bold text-[#b08a3e]">U</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-[0.18em] text-[#151515]">
              UMTAZ
            </h1>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#b08a3e]">
              Clothing
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#333] transition hover:text-[#b08a3e]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#333] transition hover:text-[#b08a3e]"
          >
            <UserRound size={17} />
            Login
          </Link>

          <Link
            href="/designs"
            className="rounded-full bg-[#151515] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b08a3e]"
          >
            Start Your Order
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-[#151515] lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#f8f5ef] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#333] transition hover:bg-black/5 hover:text-[#b08a3e]"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-black/10 pt-5">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium"
              >
                <UserRound size={17} />
                Login
              </Link>

              <Link
                href="/designs"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-[#151515] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Start Your Order
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}