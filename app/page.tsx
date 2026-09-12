import React from 'react';
import Link from 'next/link';
import CaptionGenerator from '@/components/tools/CaptionGenerator';
import { BLOG_POSTS } from '@/lib/blogPosts';
import {
  Sparkles,
  Hash,
  Clock,
  ArrowRight,
  Flame,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Layers,
  BookOpen,
  Star,
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="w-full space-y-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Playful background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-fuchsia-400/20 via-violet-400/20 to-amber-300/20 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="text-center space-y-5 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 border border-fuchsia-200/80 text-fuchsia-700 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-fuchsia-600 animate-pulse" />
            <span>The 2026 Social Media Agency Growth Suite</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Turn a Blank Screen into{' '}
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              High-Converting Captions
            </span>{' '}
            in Seconds.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            No robotic generic AI nonsense. Use rule-based copywriting formulas, algorithmic hashtag clusters, and 2026 posting data built specifically for social media managers and creators.
          </p>

          {/* Quick Stat Pills */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2 text-xs font-semibold text-slate-500 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Free Forever
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Zero Account Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Instant Client-Side Copy
            </span>
          </div>
        </div>

        {/* Live Interactive Generator Embed (Hero Core) */}
        <div className="mt-12 max-w-6xl mx-auto">
          <CaptionGenerator compact={false} initialNiche="creator" />
        </div>
      </section>

      {/* Core Tools Bento Feature Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">
            Engineered For Organic Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Three Powerful Tools. Zero Subscription Fees.
          </h2>
          <p className="text-sm text-slate-600">
            Everything you need to plan, write, and time your social media campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tool Card 1: Caption Generator */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Caption Idea Generator</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rule-based caption formulas across 11 distinct industries and 8 authentic tones. Includes hook optimization, fold spacing, and live Instagram phone preview.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Tested Hook-Story-Offer architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Mobile fold character counter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                  Multi-variant outputs per click
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/tools/caption-generator"
                className="inline-flex items-center gap-2 text-xs font-bold text-fuchsia-600 group-hover:text-fuchsia-700"
              >
                <span>Launch Caption Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Tool Card 2: Hashtag Generator */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Hash className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Viral Hashtag Finder</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Curate discovery-optimized hashtag clusters categorized into Mega (1M+), Community (100k-500k), and Niche (10k-100k) tiers based on 2026 NLP semantic search.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                  5-Tag Tiered Triad algorithm preset
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                  Dot-spaced Instagram format
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                  Interactive tag basket selector
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/tools/hashtag-generator"
                className="inline-flex items-center gap-2 text-xs font-bold text-pink-600 group-hover:text-pink-700"
              >
                <span>Find Viral Hashtags</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Tool Card 3: Best Posting Times */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Best Posting Time Guide</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Static engagement benchmarks covering Instagram, TikTok, LinkedIn, YouTube Shorts, and Threads with interactive 7-day hourly heatmaps and timezone offsets.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  24-hour weekly activity heatmaps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  EST, PST, GMT, CET timezone conversion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Day-by-day golden slots breakdown
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/best-posting-times"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 group-hover:text-amber-700"
              >
                <span>Explore Posting Windows</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rule-Based Beats Lazy AI Slop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-fuchsia-400 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              The CaptionGen Distinction
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Why Real Marketers Don&apos;t Rely on Generic Prompts
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Most generic AI tools spit out robotic, emoji-stuffed clichés like <em>&quot;Ready to supercharge your synergy? Let&apos;s dive in! 🚀✨&quot;</em> that audiences immediately swipe past. 
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              CaptionGen relies on proven, battle-tested copywriting frameworks (AIDA, Hook-Story-Offer, Contrarian Debate) calibrated with human-sounding cadences, deliberate line breaks, and clear micro-commitments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                <span className="text-xs font-bold text-rose-400 block">❌ Generic LLM Prompts</span>
                <p className="text-xs text-slate-400">
                  Unformatted walls of text, cheesy buzzwords, and irrelevant hashtag dump lists.
                </p>
              </div>
              <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-2xl p-4 space-y-1">
                <span className="text-xs font-bold text-fuchsia-300 block">✅ CaptionGen Architecture</span>
                <p className="text-xs text-slate-300">
                  Calculated first 125-char hooks, readable spacing, and 3-tier algorithm-ready tag clusters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog & Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">
              Agency Masterclasses
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Latest Growth Playbooks & Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-fuchsia-600 transition-colors"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
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

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                    {post.author.avatarInitials}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700">
                    {post.author.name}
                  </span>
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
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl shadow-fuchsia-600/20">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-amber-300">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Upgrade Your Social Content?
            </h2>
            <p className="text-xs sm:text-sm text-fuchsia-100 leading-relaxed">
              No credit card. No login friction. Jump straight into the generator and build your next high-converting post now.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <Link
              href="/tools/caption-generator"
              className="px-6 py-3 rounded-full bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-slate-50 transition-all hover:scale-105"
            >
              Launch Caption Generator
            </Link>
            <Link
              href="/tools/hashtag-generator"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Find Hashtags
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
