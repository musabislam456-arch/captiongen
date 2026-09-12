import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogPosts';
import { BookOpen, Sparkles, Clock, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Strategy Playbooks & Growth Blog | CaptionGen',
  description:
    'Tactical guides and deep dives on Instagram caption formulas, 2026 hashtag strategies, and short-form video hooks. Written by agency practitioners.',
  openGraph: {
    title: 'Social Media Growth Guides & Playbooks | CaptionGen',
    description:
      'Actionable social media marketing insights without fluff. Master the 2026 algorithm.',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Agency Knowledge Base & Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Social Media Marketing Playbooks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          In-depth breakdowns, copywriting frameworks, and algorithmic research. Written by our in-house strategists for social media managers, founders, and creators.
        </p>
      </div>

      {/* Featured Article Banner */}
      {BLOG_POSTS[0] && (
        <div className="bg-gradient-to-br from-violet-950 via-slate-900 to-fuchsia-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-fuchsia-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Deep Dive
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight hover:text-fuchsia-300 transition-colors">
              <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                {BLOG_POSTS[0].title}
              </Link>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {BLOG_POSTS[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 flex-wrap">
              <span>By {BLOG_POSTS[0].author.name}</span>
              <span>•</span>
              <span>{BLOG_POSTS[0].publishedDate}</span>
              <span>•</span>
              <span className="text-fuchsia-300 font-semibold">{BLOG_POSTS[0].readTime}</span>
            </div>
            <div className="pt-2">
              <Link
                href={`/blog/${BLOG_POSTS[0].slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>Read Full Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* All Articles Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-slate-900">All Practical Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-fuchsia-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    {post.author.avatarInitials}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-none">
                      {post.author.name}
                    </div>
                    <div className="text-[10px] text-slate-400">{post.publishedDate}</div>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-fuchsia-600 group-hover:translate-x-1 transition-transform"
                >
                  Read &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
