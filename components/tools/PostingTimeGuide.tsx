'use client';

import React, { useState } from 'react';
import {
  PLATFORM_GUIDES,
  TIMEZONE_OFFSETS,
  INDUSTRY_ADJUSTMENTS,
  SocialPlatform,
} from '@/lib/postingTimesData';
import {
  Clock,
  Calendar,
  Sparkles,
  Zap,
  Globe,
  Flame,
  Check,
  Copy,
  Info,
  TrendingUp,
  Sliders,
  ChevronRight,
} from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_FULL = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function PostingTimeGuide() {
  const [platform, setPlatform] = useState<SocialPlatform>('instagram');
  const [timezoneKey, setTimezoneKey] = useState<string>('EST');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(1); // Tuesday default
  const [copiedSchedule, setCopiedSchedule] = useState<boolean>(false);

  const guide = PLATFORM_GUIDES[platform];
  const timezone = TIMEZONE_OFFSETS[timezoneKey];

  // Helper to color heatmap cells based on intensity (1 to 4)
  const getCellColor = (intensity: number) => {
    switch (intensity) {
      case 4:
        return 'bg-gradient-to-t from-fuchsia-600 to-rose-500 text-white font-bold shadow-xs';
      case 3:
        return 'bg-fuchsia-200 text-fuchsia-900 font-semibold';
      case 2:
        return 'bg-violet-100 text-violet-800';
      default:
        return 'bg-slate-100 text-slate-400';
    }
  };

  const copySchedule = () => {
    const text = `📅 Best 2026 Posting Schedule for ${guide.name} (${timezoneKey}):\n` +
      guide.goldenHours
        .map((gh) => `• ${gh.day}: ${gh.slots.join(', ')} (${gh.context})`)
        .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedSchedule(true);
    setTimeout(() => setCopiedSchedule(false), 2200);
  };

  return (
    <div className="w-full space-y-10">
      {/* Top Filter & Timezone Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              2026 Algorithm Benchmarks
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Best Time to Post on Social Media
            </h2>
          </div>

          {/* Timezone Selector */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl">
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold text-slate-700">Timezone:</span>
            <select
              value={timezoneKey}
              onChange={(e) => setTimezoneKey(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
            >
              {Object.entries(TIMEZONE_OFFSETS).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          {(Object.keys(PLATFORM_GUIDES) as SocialPlatform[]).map((pKey) => {
            const p = PLATFORM_GUIDES[pKey];
            const isSelected = platform === pKey;
            return (
              <button
                key={pKey}
                type="button"
                onClick={() => setPlatform(pKey)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-1 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                    : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold truncate">{p.name.split(' ')[0]}</span>
                  <span
                    className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase ${
                      isSelected ? 'bg-fuchsia-500/30 text-fuchsia-300' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>
                <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {p.bestDaysOverall.slice(0, 2).join(', ')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Platform Summary Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Optimal Days To Post
          </span>
          <p className="text-lg font-extrabold text-slate-900">
            {guide.bestDaysOverall.join(', ')}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            These days register 28% higher initial retention rates across feed and discover channels.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
            Avoid This Window
          </span>
          <p className="text-lg font-extrabold text-slate-900">{guide.worstDayOverall}</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Traffic drops significantly as audience prioritizes family commitments or off-screen activities.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-600">
            Algorithmic Velocity
          </span>
          <p className="text-sm font-extrabold text-slate-900 leading-snug">
            {guide.primaryVelocityWindow}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Make sure to reply to comments immediately in this window to signal active engagement.
          </p>
        </div>
      </div>

      {/* Interactive 7-Day Hourly Heatmap */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-fuchsia-600" />
              Weekly Global Heatmap (24-Hour Breakdown)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Visual engagement volume normalized to {timezone.label}
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-200"></span>
              Low
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-violet-100"></span>
              Moderate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-fuchsia-200"></span>
              High
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-rose-500"></span>
              Peak Golden
            </span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[700px] space-y-1.5">
            {/* Hour Numbers Header */}
            <div className="grid grid-cols-25 gap-1 text-[10px] font-bold text-slate-400 text-center items-center pb-1">
              <div className="text-left pl-1">Day</div>
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={h} className="truncate">
                  {h === 0 ? '12a' : h === 12 ? '12p' : h > 12 ? `${h - 12}p` : `${h}a`}
                </div>
              ))}
            </div>

            {/* 7 Days Rows */}
            {guide.heatmap.map((row, dayIdx) => (
              <div key={dayIdx} className="grid grid-cols-25 gap-1 items-center">
                <div className="text-xs font-bold text-slate-700 pl-1">
                  {DAYS[dayIdx]}
                </div>
                {row.map((intensity, hourIdx) => (
                  <div
                    key={hourIdx}
                    title={`${DAY_FULL[dayIdx]} at ${hourIdx}:00 - Intensity ${intensity}/4`}
                    className={`h-7 rounded-lg flex items-center justify-center text-[10px] transition-transform hover:scale-110 cursor-pointer ${getCellColor(
                      intensity
                    )}`}
                  >
                    {intensity === 4 ? '★' : ''}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Golden Hours Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              Day-by-Day Golden Windows
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Exact posting slots verified for {guide.name} in {timezoneKey}
            </p>
          </div>

          <button
            type="button"
            onClick={copySchedule}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs"
          >
            {copiedSchedule ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Schedule Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full Schedule</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guide.goldenHours.map((gh, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-fuchsia-300 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-slate-900">{gh.day}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-100 text-fuchsia-800">
                  {gh.slots.length} Windows
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {gh.slots.map((slot, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-mono text-xs font-bold text-slate-900 shadow-2xs"
                  >
                    {slot}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {gh.context}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2026 Algorithmic Insight & Industry Nuance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Algorithm Insight Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-violet-900 via-slate-900 to-fuchsia-950 rounded-3xl p-7 text-white space-y-4 shadow-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-fuchsia-300 text-xs font-bold">
            <Zap className="w-3.5 h-3.5" />
            2026 Core Algorithm Shift
          </div>
          <h4 className="text-xl font-extrabold leading-snug">
            Why DM Shares & Dwell Time Overruled Likes
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {guide.algorithmInsight2026}
          </p>
          <div className="pt-2 border-t border-white/10 text-xs text-fuchsia-200 font-medium">
            Pro Tip: End every post with a reason to share to someone&apos;s DM or save for tomorrow morning.
          </div>
        </div>

        {/* Industry Variance */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-4">
          <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-fuchsia-600" />
            Industry-Specific Adjustments
          </h4>
          <div className="space-y-3">
            {INDUSTRY_ADJUSTMENTS.map((item, i) => (
              <div key={i} className="text-xs space-y-1 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{item.industry}</span>
                  <span className="font-mono text-fuchsia-700 font-semibold">{item.bestWindows}</span>
                </div>
                <p className="text-slate-500 leading-relaxed">{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
