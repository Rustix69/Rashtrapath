import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { getAllBlogPosts } from "@/lib/blog";
export default async function BlogSection() {
  const blogPosts = await getAllBlogPosts();

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Voices of the Nation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Stories that inspire, actions that matter.
          </p>
        </div>

        {/* Cards Grid */}
        {blogPosts.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-neutral-300 bg-white p-10 text-center">
            <h3 className="mb-2 text-2xl font-semibold text-neutral-900">No blogs yet</h3>
            <p className="text-neutral-600">
              Add your first markdown file in <code>blog/</code> to publish it.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-4 md:gap-y-4">
            {blogPosts.map((post) => (
              <CardContainer key={post.slug} className="inter-var">
                <Link href={`/blog/${post.slug}`} className="block">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-2xl overflow-hidden border">
                {/* Image with Category Badge */}
                    <CardItem translateZ="100" className="w-full relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        className="h-56 w-full object-cover"
                        alt={post.title}
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gray-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </CardItem>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date and Read Time */}
                      <CardItem translateZ="50" className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </CardItem>

                      {/* Title */}
                      <CardItem
                        translateZ="60"
                        className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2"
                      >
                        {post.title}
                      </CardItem>

                      {/* Description */}
                      <CardItem
                        as="p"
                        translateZ="50"
                        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
                      >
                        {post.description}
                      </CardItem>

                      {/* Author */}
                      <CardItem translateZ="40" className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
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

