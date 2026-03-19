"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="flex h-24 w-full items-center justify-between px-3 sm:px-4 md:px-6">
        <div className="font-poppins text-[1.85rem] leading-none tracking-tight sm:text-[2rem] md:text-[2.2rem]">
          <span className="font-bold text-[#ed8b37]">Rashtra</span>
          <span className="font-medium text-white">Voice</span>
        </div>

        <div className="hidden items-center gap-8 font-poppins text-base text-white md:flex lg:gap-10">
          <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-[#E76F00]">
            Home
          </Link>
          <Link href="/blog" className="transition-colors duration-300 ease-in-out hover:text-[#E76F00]">
            Blogs
          </Link>
          <Link href="/about" className="transition-colors duration-300 ease-in-out hover:text-[#E76F00]">
            About Us
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors duration-300 ease-in-out hover:text-[#E76F00]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} strokeWidth={2.1} /> : <Menu size={28} strokeWidth={2.1} />}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="mx-3 rounded-xl border border-white/25 bg-black/75 p-4 backdrop-blur-md md:hidden">
          <div className="font-poppins flex flex-col gap-3 text-white">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#E76F00]"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="rounded-lg px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#E76F00]"
              onClick={closeMenu}
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-[#E76F00]"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}


