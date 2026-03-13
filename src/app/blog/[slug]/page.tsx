import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/MarkdownContent";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

type BlogPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Rashtrapath",
    };
  }

  return {
    title: `${post.title} | Rashtrapath`,
    description: post.description,
    authors: [{ name: post.author }],
  };
}

export default async function BlogPostPage({ params }: BlogPageParams) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF9F3] px-6 py-16 text-neutral-900 md:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <header className="mb-10 space-y-5">
          <p className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-800">
            {post.category}
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {post.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={post.title}
              className="mt-6 w-full rounded-2xl border border-neutral-200 object-cover shadow-sm"
            />
          ) : null}
        </header>

        <MarkdownContent content={post.content} title={post.title} />
      </article>
    </main>
  );
}
