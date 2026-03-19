import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://x.com/nsfbharat2024",
    icon: "/icons/twitter.png",
    alt: "NSF on X",
  },
  {
    href: "https://www.instagram.com/nsfbharat2024?igsh=bDkxYWtxcGcxeWNu",
    icon: "/icons/instagram.png",
    alt: "NSF on Instagram",
  },
  {
    href: "https://www.facebook.com/nsfbharat2024",
    icon: "/icons/fb.png",
    alt: "NSF on Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#fff9f3] via-[#fff2e2] to-[#ffe8ce] border-t border-[#efc59a] px-4 py-10 sm:px-6 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-start">
        <div>
          <div className="font-poppins text-[2.1rem] leading-none tracking-tight">
            <span className="font-bold text-[#ed8b37]">Rashtra</span>
            <span className="font-medium text-[#2f2218]">Voice</span>
          </div>
          <p className="font-poppins mt-4 max-w-md text-[0.98rem] leading-7 text-[#5a3f2b]">
            Nationalist Students' Front, Jadavpur University, Kolkata
          </p>

          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#efc59a] bg-white/75 transition-transform duration-300 ease-in-out hover:scale-105"
                aria-label={social.alt}
              >
                <Image src={social.icon} alt={social.alt} width={22} height={22} className="object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:justify-self-end">
          <h3 className="font-inter text-lg font-bold text-[#2f2218]">Quick Links</h3>
          <nav className="font-poppins mt-4 flex flex-col gap-3 text-[1rem] text-[#5a3f2b]">
            <Link href="/" className="transition-colors duration-300 ease-in-out hover:text-[#ed8b37]">
              Home
            </Link>
            <Link href="/blog" className="transition-colors duration-300 ease-in-out hover:text-[#ed8b37]">
              Blogs
            </Link>
            <Link href="/about" className="transition-colors duration-300 ease-in-out hover:text-[#ed8b37]">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
