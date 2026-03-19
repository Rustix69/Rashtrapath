import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "blog");

type BlogFrontmatter = {
  title?: string;
  author?: string;
  authorimg?: string;
  authorImage?: string;
  description?: string;
  category?: string;
  date?: string;
  coverImage?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  author: string;
  authorImage: string;
  description: string;
  category: string;
  date: string;
  coverImage: string;
  readTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const DEFAULT_COVER_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop";

function toSlug(fileName: string) {
  return fileName.replace(/\.md$/i, "");
}

function toTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[[^\]]+\]\([^)]+\)/g, "$1")
    .replace(/[#>*_~-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function computeReadTime(content: string) {
  const words = stripMarkdown(content).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function createDescription(frontmatterDescription: string | undefined, content: string) {
  if (frontmatterDescription?.trim()) {
    return frontmatterDescription.trim();
  }

  const excerpt = stripMarkdown(content);
  if (excerpt.length <= 180) {
    return excerpt;
  }

  return `${excerpt.slice(0, 177)}...`;
}

function resolvePostMeta(
  slug: string,
  frontmatter: BlogFrontmatter,
  content: string
): BlogPostMeta {
  const title = frontmatter.title?.trim() || toTitleFromSlug(slug);
  const author = frontmatter.author?.trim() || "RashtraVoice Editorial";
  const authorImage = frontmatter.authorimg?.trim() || frontmatter.authorImage?.trim() || "";
  const date = frontmatter.date?.trim() || "No date";
  const category = frontmatter.category?.trim() || "General";
  const description = createDescription(frontmatter.description, content);
  const coverImage = frontmatter.coverImage?.trim() || DEFAULT_COVER_IMAGE;
  const readTime = computeReadTime(content);

  return {
    slug,
    title,
    author,
    authorImage,
    date,
    category,
    description,
    coverImage,
    readTime,
  };
}

async function getMarkdownFiles() {
  try {
    const files = await fs.readdir(BLOG_DIRECTORY);
    return files.filter((file) => file.toLowerCase().endsWith(".md"));
  } catch {
    return [];
  }
}

export async function getAllBlogPosts() {
  const files = await getMarkdownFiles();

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = toSlug(fileName);
      const fullPath = path.join(BLOG_DIRECTORY, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const parsed = matter(fileContents);
      const frontmatter = (parsed.data as BlogFrontmatter) || {};

      const dateValue = frontmatter.date ? new Date(frontmatter.date).getTime() : 0;

      return {
        ...resolvePostMeta(slug, frontmatter, parsed.content),
        sortDate: Number.isNaN(dateValue) ? 0 : dateValue,
      };
    })
  );

  return posts.sort((a, b) => b.sortDate - a.sortDate).map((post) => ({
    slug: post.slug,
    title: post.title,
    author: post.author,
    authorImage: post.authorImage,
    date: post.date,
    category: post.category,
    description: post.description,
    coverImage: post.coverImage,
    readTime: post.readTime,
  }));
}

export async function getAllBlogSlugs() {
  const files = await getMarkdownFiles();
  return files.map((fileName) => toSlug(fileName));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const parsed = matter(fileContents);
    const frontmatter = (parsed.data as BlogFrontmatter) || {};

    return {
      ...resolvePostMeta(slug, frontmatter, parsed.content),
      content: parsed.content,
    };
  } catch {
    return null;
  }
}
