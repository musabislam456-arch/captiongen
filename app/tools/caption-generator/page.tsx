import React from 'react';
import type { Metadata } from 'next';
import CaptionGenerator from '@/components/tools/CaptionGenerator';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Caption Idea Generator — Instagram, TikTok, LinkedIn & Threads',
  description:
    'Generate high-engagement social media captions with proven copywriting formulas. Select your niche and tone for instant hooks, spacing, and hashtags.',
  openGraph: {
    title: 'Free Social Media Caption Idea Generator | CaptionGen',
    description:
      'Turn blank screens into viral captions. Rule-based copywriting formulas for 11 niches and 8 tones.',
  },
};

export default function CaptionGeneratorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Rule-Based Social Media Copy Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Social Media Caption Idea Generator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Craft high-converting captions structured with proven mobile copywriting formulas. Select your niche, pick a tone, and get 3 distinct variants formatted with hooks, spacing, and relevant hashtags.
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Client-Side Tool
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> Instant Generation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Zero Data Saved on External Servers
          </span>
        </div>
      </div>

      {/* Main Generator Tool */}
      <CaptionGenerator compact={false} />

      {/* Educational Guide below the tool */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          How to Get the Most Engagement from Your Generated Captions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">1. Nail the 125-Character Hook</span>
            <p>
              Instagram and TikTok truncate captions with a &quot;...more&quot; link after 125 characters. Make sure the first line poses an urgent question or provocative statement.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">2. Use Vertical White Space</span>
            <p>
              Dense walls of text fatigue mobile users. We automatically format our templates with generous line breaks and bullet points to double reader dwell time.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block text-sm">3. Prioritize Saves and DM Shares</span>
            <p>
              Likes are vanity metrics in 2026. A user saving your post to an Instagram collection or forwarding it to a group chat triggers the highest recommendation weight in the algorithm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
