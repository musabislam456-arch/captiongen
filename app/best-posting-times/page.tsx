import React from 'react';
import type { Metadata } from 'next';
import PostingTimeGuide from '@/components/tools/PostingTimeGuide';
import { Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Time to Post on Social Media (2026 Guide & Hourly Heatmap)',
  description:
    'Comprehensive 2026 data benchmark for the best times to post on Instagram, TikTok, LinkedIn, YouTube Shorts, and Threads. Interactive 24-hour heatmaps with timezone conversion.',
  openGraph: {
    title: 'Best Time to Post on Social Media (2026 Guide) | CaptionGen',
    description:
      'Explore 7-day hourly engagement heatmaps, golden windows, and algorithmic velocity rules for Instagram, TikTok, and LinkedIn.',
  },
};

export default function BestPostingTimesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>2026 Data Benchmark & Heatmaps</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Best Time to Post on Social Media in 2026
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Static engagement analysis based on over 14 million organic impressions. Filter across Instagram, TikTok, LinkedIn, YouTube Shorts, and Threads to identify your audience&apos;s peak browsing windows.
        </p>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" /> Multi-Timezone Adjustment (EST, PST, GMT, CET, AEST)
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-500" /> 24-Hour Day-by-Day Grid
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Tested on 2026 Feed Velocity Curves
          </span>
        </div>
      </div>

      {/* Main Guide Component */}
      <PostingTimeGuide />
    </div>
  );
}
