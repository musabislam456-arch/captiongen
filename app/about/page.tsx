import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Users, Target, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | CaptionGen',
  description: 'Learn about CaptionGen, the agency-built platform for modern social media marketing, copywriting, and algorithm insights.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Built by Marketers. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            Engineered for Reach.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          CaptionGen started as an internal agency tool. We got tired of generic AI output that ignored copywriting fundamentals, mobile fold constraints, and current algorithm changes. So, we built our own rule-based engine.
        </p>
      </section>

      {/* Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Anti-Slop Philosophy</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We ban robotic phrases like &quot;supercharge your synergy.&quot; Our generators rely on human-tested formulas like Hook-Story-Offer and PAS (Problem, Agitation, Solution).
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">100% Free Access</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            No paywalls. No subscription traps. No mandatory account creation. We believe foundational marketing tools should be universally accessible to creators and small agencies.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Privacy First</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We don&apos;t harvest your brand ideas or prompt inputs to train external datasets. Everything generates safely and securely within your browser session.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-fuchsia-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              The 2026 Shift
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Why We Launched Publicly
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              As Instagram and TikTok shifted heavily toward NLP (Natural Language Processing) and semantic SEO, a single unformatted caption or spammy hashtag cluster could tank a post&apos;s reach. 
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We opened our internal toolkit to the public so every creator could format text beautifully, cluster tags correctly, and post at the right time without needing an agency retainer.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/tools/caption-generator"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="font-bold text-sm">Try the Caption Engine</div>
              <ArrowRight className="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tools/hashtag-generator"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="font-bold text-sm">Test the Hashtag Finder</div>
              <ArrowRight className="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/best-posting-times"
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="font-bold text-sm">View 2026 Benchmark Data</div>
              <ArrowRight className="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
