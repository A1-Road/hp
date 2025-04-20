"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Components } from "react-markdown";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";

interface MarkdownProps {
  content: string;
}

interface CodeComponentProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const components: Components = {
    code({ node, inline, className, children, ...props }: CodeComponentProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...(props as SyntaxHighlighterProps)}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    img: ({ node, ...props }) => <img className="max-w-full h-auto rounded-lg" {...props} />,
    a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-3" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-xl font-bold my-2" {...props} />,
    p: ({ node, ...props }) => <p className="my-4 leading-relaxed" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
    ),
  };

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
