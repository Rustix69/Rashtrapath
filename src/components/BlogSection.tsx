import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { getAllBlogPosts } from "@/lib/blog";

type BlogSectionProps = {
  showBackButton?: boolean;
};

export default async function BlogSection({ showBackButton = false }: BlogSectionProps) {
  const blogPosts = await getAllBlogPosts();

  return (
    <section className="bg-linear-to-b from-[#fff7ee] via-[#fff3e5] to-[#ffe7cd] px-4 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-3 text-center md:mb-8">
          {showBackButton ? (
            <div className="mb-4 flex justify-center md:justify-start">
              <Link
                href="/"
                className="font-poppins inline-flex items-center justify-center gap-2 rounded-lg border border-[#e7b585] bg-white/90 px-4 py-2 text-sm font-semibold text-[#6a4528] transition-colors duration-300 ease-in-out hover:bg-[#fff3e3] hover:text-[#a05515]"
              >
                <ArrowLeft size={16} strokeWidth={2.2} />
                Back to Home
              </Link>
            </div>
          ) : null}
          <h2 className="font-inter mb-1 text-4xl font-extrabold tracking-tight text-[#2f2218] md:text-5xl lg:text-6xl">
            Voices of the Nation
          </h2>
          <p className="font-poppins text-base text-[#5a3f2b] md:text-lg">
            Stories that inspire, actions that matter.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-[#efc59a] bg-white/85 p-10 text-center shadow-[0_10px_28px_rgba(196,116,45,0.12)]">
            <h3 className="font-inter mb-2 text-2xl font-bold text-[#2f2218]">No blogs yet</h3>
            <p className="font-poppins text-[#5a3f2b]">
              Add your first markdown file in <code>blog/</code> to publish it.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-4 md:gap-y-4 -mt-10 sm:mt-0">
            {blogPosts.map((post) => (
              <CardContainer key={post.slug} className="font-poppins inter-var">
                <Link href={`/blog/${post.slug}`} className="block">
                  <CardBody className="relative h-auto w-full overflow-hidden rounded-2xl border border-[#efc59a] bg-white/92 shadow-[0_10px_28px_rgba(196,116,45,0.16)]">
                    <CardItem translateZ="100" className="w-full relative">
                      <img
                        src={post.coverImage}
                        className="h-56 w-full object-cover"
                        alt={post.title}
                        loading="lazy"
                      />
                    </CardItem>

                    <div className="p-6">
                      <CardItem translateZ="50" className="mb-3 flex items-center gap-2 text-xs font-medium text-[#7b5a42]">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </CardItem>

                      <CardItem
                        translateZ="60"
                        className="font-inter mb-2 line-clamp-2 text-xl font-bold text-[#2f2218]"
                      >
                        {post.title}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="50"
                        className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#5a3f2b]"
                      >
                        {post.description}
                      </CardItem>

                      <CardItem translateZ="40" className="flex items-center gap-2 border-t border-[#efc59a] pt-4">
                        {post.authorImage ? (
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="h-8 w-8 rounded-full border border-[#efc59a] object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-linear-to-br from-[#ed8b37] to-[#f6b56f]" />
                        )}
                        <span className="text-sm font-semibold text-[#4f3525]">{post.author}</span>
                      </CardItem>
                    </div>
                  </CardBody>
                </Link>
              </CardContainer>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

