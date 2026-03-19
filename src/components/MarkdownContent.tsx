"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type MarkdownContentProps = {
  content: string;
  title: string;
};

export default function MarkdownContent({ content, title }: MarkdownContentProps) {
  return (
    <article className="font-poppins space-y-6 text-[1.08rem] leading-8 text-[#463021] md:text-[1.12rem]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-inter mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[#2f2218] md:text-5xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-inter mt-10 text-3xl font-bold text-[#2f2218]">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-inter mt-8 text-2xl font-semibold text-[#2f2218]">{children}</h3>
          ),
          p: ({ children }) => <p className="leading-8 text-[#463021]">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#ed8b37] bg-[#fff3e5] px-4 py-3 italic text-[#5a3f2b]">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#b86a25] underline underline-offset-4"
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
              className="my-8 w-full rounded-xl border border-[#efc59a] object-cover shadow-[0_12px_28px_rgba(196,116,45,0.14)]"
            />
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");

            if (isBlock) {
              return (
                <code className="block overflow-x-auto rounded-lg bg-[#2b1f16] p-4 text-sm leading-7 text-[#f9e7d4]">
                  {children}
                </code>
              );
            }

            return <code className="rounded bg-[#f8e5d2] px-2 py-1 text-sm text-[#3f2b1d]">{children}</code>;
          },
          pre: ({ children }) => <pre className="my-6">{children}</pre>,
          hr: () => <hr className="my-8 border-[#efc59a]" />,
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-lg border border-[#efc59a] bg-white/70">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => <th className="border border-[#efc59a] bg-[#fff1e2] px-4 py-2 text-left">{children}</th>,
          td: ({ children }) => <td className="border border-[#efc59a] px-4 py-2">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
