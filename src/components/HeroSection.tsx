import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/hero-section/mobile.jpg"
            alt="Rashtra Voice civic journalism hero mobile"
            fill
            loading="lazy"
            className="hero-bg-zoom object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/hero-section/website.png"
            alt="Rashtra Voice civic journalism hero"
            fill
            loading="lazy"
            className="hero-bg-zoom object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/28" />
      </div>

      <div className="relative z-20 flex h-full w-full items-center justify-center px-4 pb-10 pt-24 sm:px-6 md:justify-start md:px-8 lg:px-10">
        <div className="font-poppins w-full max-w-[760px] text-center md:-translate-y-7 md:text-left">
          <h1 className="font-inter text-[clamp(3.05rem,8.2vw,4.8rem)] font-extrabold leading-[1.03] tracking-tight text-white md:text-[clamp(3.45rem,8.4vw,5.35rem)] md:whitespace-nowrap">
            Voice of the Nation
          </h1>
          <p className="mt-4 text-[clamp(1.42rem,2.45vw,1.72rem)] font-medium text-[rgba(255,255,255,0.85)]">
            Speak Truth. Question Power.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:items-start md:justify-start">
            <Link
              href="/blog"
              className="inline-flex min-w-44 items-center justify-center rounded-xl bg-[#E76F00] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-[#cf5f00]"
            >
              Read Articles
            </Link>
            <a
              href="https://forms.gle/ZB5vEZBHe8D9GwQb6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-44 items-center justify-center rounded-xl bg-[#006D77] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-[#00565e]"
            >
              Join Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}