import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '@/lib/blogPosts';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post Not Found | CaptionGen' };
  }
  return {
    title: `${post.title} | CaptionGen`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Playbooks
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 uppercase tracking-wider">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shadow-xs">
              {post.author.avatarInitials}
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">{post.author.name}</div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedDate}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Share:</span>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-slate prose-lg sm:prose-xl max-w-none prose-headings:font-extrabold prose-a:text-fuchsia-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      {/* Article Footer CTA */}
      <div className="bg-gradient-to-br from-fuchsia-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 mt-16 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Stop Writing Captions from Scratch</h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Put these frameworks into action instantly. Generate fully formatted hooks, structured spacing, and niche-specific hashtags in one click.
        </p>
        <div className="pt-2">
          <Link
            href="/tools/caption-generator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-extrabold text-sm shadow-md hover:scale-105 transition-transform"
          >
            Launch Free Generator
          </Link>
        </div>
      </div>
    </div>
  );
}
