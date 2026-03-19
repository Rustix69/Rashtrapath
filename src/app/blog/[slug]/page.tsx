import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/MarkdownContent";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

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
      title: "Blog Not Founds",
    };
  }

  const postUrl = `${siteUrl}/blog/${slug}`;
  const coverImage = post.coverImage ? toAbsoluteUrl(post.coverImage) : `${siteUrl}/hero-section/website.png`;
  const title = `${post.title}`;

  return {
    title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description: post.description,
      type: "article",
      url: postUrl,
      siteName: "RashtraVoice",
      images: [
        {
          url: coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageParams) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="font-poppins min-h-screen bg-linear-to-b from-[#fff9f3] via-[#fff1e2] to-[#ffe2c6] px-4 py-14 text-[#2f2218] sm:px-6 md:px-8 md:py-16">
      <article className="mx-auto w-full max-w-4xl">
        <header className="mb-10 space-y-5">
          <h1 className="font-inter text-4xl font-extrabold leading-tight tracking-tight text-[#2f2218] md:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#6a4b35]">
            {post.authorImage ? (
              <img
                src={post.authorImage}
                alt={post.author}
                className="h-8 w-8 rounded-full border border-[#efc59a] object-cover"
                loading="lazy"
              />
            ) : null}
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
              loading="lazy"
              className="mt-6 w-full rounded-2xl border border-[#efc59a] object-cover shadow-[0_12px_28px_rgba(196,116,45,0.16)]"
            />
          ) : null}
        </header>

        <MarkdownContent content={post.content} title={post.title} />
      </article>
    </main>
  );
}
