import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="font-poppins min-h-screen bg-linear-to-b from-[#fff9f3] via-[#fff1e2] to-[#ffe2c6] text-[#2f2218]">
      <section className="relative min-h-[68vh] overflow-hidden">
        <Image
          src="/about-us.png"
          alt="NSF About Us"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <Navbar />

        <div className="relative z-20 mx-auto flex min-h-[68vh] w-full max-w-6xl items-center px-4 pt-24 sm:px-6 md:px-8">
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="font-inter text-[clamp(2.4rem,7vw,4rem)] font-extrabold leading-tight tracking-tight text-white">
              About Us
            </h1>
            <p className="mt-5 text-[clamp(1.08rem,2.4vw,1.35rem)] font-medium text-white/90">
              A student-first movement for <span className="font-bold text-[#ed8b37]">equity</span>,
              <span className="font-bold text-[#f6b56f]"> dignity</span>, and
              <span className="font-bold text-[#0c8599]"> academic integrity</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-4 pb-16 sm:px-6 md:px-8">
        <article className="rounded-2xl border border-[#efc59a] bg-white/84 p-6 shadow-[0_16px_45px_rgba(196,116,45,0.18)] backdrop-blur-sm md:p-10">
          <div className="space-y-7 text-[1.04rem] leading-8 text-[#463021] md:text-[1.12rem]">
            <p>
              The <strong className="text-[#ed8b37]">Nationalist Students&apos; Front (NSF)</strong> is a fiercely
              independent, student-led organization at Jadavpur University, driven by the unwavering principle of
              <em className="font-semibold text-[#f6b56f]"> &ldquo;Nation First.&rdquo;</em> Born out of the necessity to give a
              voice to the silent majority, NSF stands as a formidable shield against the radical, disruptive political
              hegemony that has long plagued our campus. We are committed to fostering a secure, progressive academic
              environment rooted in civilizational pride, intellectual freedom, and true democratic values. Our primary
              mission is to ensure that Jadavpur University remains a premier temple of learning and research, rather
              than a laboratory for divisive, anti-national politics.
            </p>

            <p>
              At our core, we fight for <strong className="text-[#ed8b37]">universal equity</strong>,
              <strong className="text-[#f6b56f]"> cultural dignity</strong>, and the
              <strong className="text-[#0c8599]"> absolute Rule of Law</strong>. NSF actively opposes ideological
              coercion, the weaponization of campus grievance cells, and the institutionalized ragging networks run by
              unrecognized <em>&ldquo;phantom unions.&rdquo;</em> Whether it is protecting the democratic rights of first-year
              students, standing up against the mockery of our Dharmic and Bengali heritage, or demanding a
              violence-free, strike-free academic ecosystem, NSF is the unapologetic voice of student welfare and equal
              justice. We believe in protecting the innocent as fiercely as we demand punishment for the guilty.
            </p>

            <p>
              We firmly believe that the brilliant minds of Jadavpur University are the future architects of a
              resurgent, self-reliant Bharat. Beyond campus elections, our vision is to cultivate strong, nationalist
              leaders who are deeply connected to their cultural roots and dedicated to the service of the motherland.
              We invite every student who values academic integrity, objective justice without appeasement, and the
              absolute sovereignty of our nation to join us in reclaiming the soul of our campus.
            </p>
          </div>

          <div className="mt-9 border-t border-[#efc59a] pt-6 text-center md:text-left">
            <p className="text-[clamp(1.05rem,2.5vw,1.3rem)] font-bold italic tracking-wide text-[#b86a25]">
              Veer Bhogya Vasundhara | <span className="text-[#ed8b37]">Vande Mataram!</span>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
