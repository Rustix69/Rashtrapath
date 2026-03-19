import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  className: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/img01.png",
    alt: "NSF gallery image 1",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/gallery/img02.png",
    alt: "NSF gallery image 2",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/gallery/img03.png",
    alt: "NSF gallery image 3",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/gallery/img05.png",
    alt: "NSF gallery image 5",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/gallery/img04.png",
    alt: "NSF gallery image 4",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    src: "/gallery/img06.png",
    alt: "NSF gallery image 6",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-linear-to-b from-[#fff9f3] via-[#fff4e8] to-[#ffecd5] px-4 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="font-inter text-4xl font-extrabold tracking-tight text-[#2f2218] md:text-5xl">
            Gallery
          </h2>
          <p className="font-poppins mt-3 text-base text-[#5a3f2b] md:text-lg">
            Moments of leadership, courage, and student unity.
          </p>
        </div>

        <div className="grid auto-rows-[195px] grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <article
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl border border-[#efc59a] shadow-[0_10px_28px_rgba(196,116,45,0.16)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent opacity-80" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
