'use client';
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[92%] md:w-[86%] lg:w-[80%]">
      <nav className="h-14 px-4 md:px-6 lg:px-8 flex items-center justify-between rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Rashtrapath logo" width={36} height={36} className="rounded-sm object-cover" />
          <div className="text-lg font-semibold tracking-wide">RashtraPath</div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90">
          <span className="hover:text-white transition-colors">Home</span>
          <span className="hover:text-white transition-colors">Blog</span>
          <span className="hover:text-white transition-colors">Contact</span>
        </div>
        <div className="hidden md:block">
          <button className="px-4 md:px-5 py-1.5 md:py-2 border border-white/70 rounded-md text-white/90 hover:text-black hover:bg-white transition-colors">Subscribe</button>
        </div>
      </nav>
    </div>
  );
}


