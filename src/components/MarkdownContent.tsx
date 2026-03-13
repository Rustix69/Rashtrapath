"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
  title: string;
};

export default function MarkdownContent({ content, title }: MarkdownContentProps) {
  return (
    <article className="space-y-6 text-lg leading-8 text-neutral-800">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 text-3xl font-bold text-neutral-900">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-2xl font-semibold text-neutral-900">{children}</h3>
          ),
          p: ({ children }) => <p className="leading-8">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-orange-500 bg-orange-50 px-4 py-3 italic text-neutral-700">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-orange-700 underline underline-offset-4"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src || ""}
              alt={alt || title}
              loading="lazy"
              className="my-8 w-full rounded-xl border border-neutral-200 object-cover shadow-sm"
            />
          ),
          code: ({ children }) => (
            <code className="rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-900">
              {children}
            </code>
          ),
          hr: () => <hr className="my-8 border-neutral-200" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
