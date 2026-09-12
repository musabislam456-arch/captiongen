import React from 'react';
import type { Metadata } from 'next';
import HashtagGenerator from '@/components/tools/HashtagGenerator';
import { Hash, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Viral Hashtag Generator & 2026 Strategy Finder | CaptionGen',
  description:
    'Discover algorithm-optimized hashtag clusters categorized by Mega (1M+), Community (100k-500k), and Niche (10k-100k) tiers. One-click copy for Instagram, TikTok, and Threads.',
  openGraph: {
    title: 'Viral Hashtag Generator | CaptionGen',
    description:
      'Search and cluster hashtags for maximum reach. Uses the 2026 3-tier algorithm framework.',
  },
};

export default function HashtagGeneratorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold">
          <Hash className="w-3.5 h-3.5" />
          <span>Hashtag Search & Discovery Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Viral Hashtag Generator & 2026 Cluster Finder
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Stop copying 30 spam tags that hurt your distribution. Build targeted, 3-tier hashtag bundles that align with Instagram and TikTok&apos;s natural language search algorithms.
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" /> Algorithm-Tested 5-Tag Clusters
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Dot-Spaced Clean Layout
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Safe From Shadowban Spam Flags
          </span>
        </div>
      </div>

      {/* Main Hashtag Generator Tool */}
      <HashtagGenerator />

      {/* 2026 Hashtag Guide Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          The 2026 Hashtag Strategy: Why Less Is More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">Tier 1: Mega Category (1 Tag)</span>
            <p>
              Establishes your broad industry macro-pillar (e.g. #socialmediamarketing). Do not use more than one or two, as you will get buried in seconds.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">Tier 2: Community Sub-Niche (2 Tags)</span>
            <p>
              Connects with your actual target audience (e.g. #reelsgrowthtips). These tags have active daily searches and high comment-to-view ratios.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">Tier 3: Problem / Outcome Specific (2 Tags)</span>
            <p>
              Hyper-focused on the exact deliverable in your post (e.g. #captionideasforcreators). Gives you the highest probability of ranking in Top Posts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
