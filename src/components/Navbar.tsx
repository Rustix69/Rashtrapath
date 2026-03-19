import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="flex h-24 w-full items-center justify-between px-3 sm:px-4 md:px-6">
        <div className="font-poppins text-[2.2rem] leading-none tracking-tight">
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors duration-300 ease-in-out hover:text-[#E76F00]"
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={2.1} />
          </button>
        </div>
      </nav>
    </header>
  );
}


