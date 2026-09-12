'use client';

import React, { useState, useEffect } from 'react';
import {
  HASHTAG_DATABASE,
  HashtagItem,
  getHashtagsByQuery,
} from '@/lib/hashtagData';
import {
  Hash,
  Copy,
  Check,
  Search,
  Sparkles,
  Shuffle,
  Info,
  Layers,
  Filter,
  Flame,
  CheckSquare,
  Square,
  RefreshCw,
} from 'lucide-react';

export default function HashtagGenerator() {
  const [query, setQuery] = useState<string>('creator');
  const [selectedNicheKey, setSelectedNicheKey] = useState<string>('creator');
  const [formatMode, setFormatMode] = useState<'dots' | 'space' | 'comma'>('dots');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const [activeResults, setActiveResults] = useState<{
    mega: HashtagItem[];
    mid: HashtagItem[];
    niche: HashtagItem[];
    matchedNicheName: string;
  }>({
    mega: [],
    mid: [],
    niche: [],
    matchedNicheName: '',
  });

  const runSearch = (keyword: string, niche?: string) => {
    const results = getHashtagsByQuery(keyword, niche);
    setActiveResults(results);

    // By default, pick an algorithmically ideal 5-tag cluster (1 mega, 2 mid, 2 niche)
    const initialTags: string[] = [
      ...(results.mega.slice(0, 1).map((t) => t.tag)),
      ...(results.mid.slice(0, 2).map((t) => t.tag)),
      ...(results.niche.slice(0, 2).map((t) => t.tag)),
    ];
    setSelectedTags(initialTags);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runSearch(query, selectedNicheKey);
    }, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNicheKey]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSearch(query, selectedNicheKey);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const selectAll = () => {
    const all = [
      ...activeResults.mega.map((t) => t.tag),
      ...activeResults.mid.map((t) => t.tag),
      ...activeResults.niche.map((t) => t.tag),
    ];
    setSelectedTags(Array.from(new Set(all)));
  };

  const deselectAll = () => {
    setSelectedTags([]);
  };

  const selectRecommendedCluster = (count: 5 | 10 | 15) => {
    if (count === 5) {
      // 1 mega, 2 mid, 2 niche
      setSelectedTags([
        ...(activeResults.mega.slice(0, 1).map((t) => t.tag)),
        ...(activeResults.mid.slice(0, 2).map((t) => t.tag)),
        ...(activeResults.niche.slice(0, 2).map((t) => t.tag)),
      ]);
    } else if (count === 10) {
      setSelectedTags([
        ...(activeResults.mega.slice(0, 2).map((t) => t.tag)),
        ...(activeResults.mid.slice(0, 4).map((t) => t.tag)),
        ...(activeResults.niche.slice(0, 4).map((t) => t.tag)),
      ]);
    } else {
      setSelectedTags([
        ...(activeResults.mega.slice(0, 3).map((t) => t.tag)),
        ...(activeResults.mid.slice(0, 6).map((t) => t.tag)),
        ...(activeResults.niche.slice(0, 6).map((t) => t.tag)),
      ]);
    }
  };

  const getFormattedOutput = (): string => {
    if (selectedTags.length === 0) return '';
    if (formatMode === 'dots') {
      return `.\n.\n.\n${selectedTags.join(' ')}`;
    }
    if (formatMode === 'comma') {
      return selectedTags.join(', ');
    }
    return selectedTags.join(' ');
  };

  const handleCopy = () => {
    const text = getFormattedOutput();
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full space-y-8">
      {/* Search & Niche Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <form onSubmit={handleSearchSubmit} className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, aesthetic, or keyword (e.g. matcha, outfit, gym)..."
              className="w-full pl-11 pr-24 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Search
            </button>
          </form>

          {/* Preset Niche Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {HASHTAG_DATABASE.map((group) => (
              <button
                key={group.nicheKey}
                type="button"
                onClick={() => {
                  setSelectedNicheKey(group.nicheKey);
                  setQuery(group.keywords[0]);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedNicheKey === group.nicheKey
                    ? 'bg-fuchsia-100 text-fuchsia-800 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {group.name.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 2026 Strategy Tip Banner */}
        <div className="bg-gradient-to-r from-violet-50 via-fuchsia-50 to-pink-50 rounded-2xl p-4 border border-fuchsia-100 flex items-start gap-3">
          <div className="w-7 h-7 rounded-xl bg-fuchsia-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900 mr-1">2026 Recommendation:</span>
            Instagram&apos;s NLP semantic classifier penalizes 30-tag blocks. Use our{' '}
            <strong className="text-fuchsia-700">&quot;5-Tag Tiered Triad&quot;</strong> (1 Mega + 2 Community + 2 Niche) for optimal explore vector placement.
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Categorized Tag Discovery (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick Selection Presets */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Quick Select:</span>
              <button
                type="button"
                onClick={() => selectRecommendedCluster(5)}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-fuchsia-600 text-white shadow-xs hover:bg-fuchsia-700"
              >
                5 Tags (2026 Optimal)
              </button>
              <button
                type="button"
                onClick={() => selectRecommendedCluster(10)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                10 Tags
              </button>
              <button
                type="button"
                onClick={selectAll}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Select All
              </button>
            </div>

            {selectedTags.length > 0 && (
              <button
                type="button"
                onClick={deselectAll}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear Selection
              </button>
            )}
          </div>

          {/* Tier 1: Niche & Low Competition (Best For Explore Discovery) */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Niche & Specific Tags (10k - 100k Posts)
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                Highest Ranking Odds
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Low competition tags help you dominate the Top Posts feed in your precise sub-category.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {activeResults.niche.map((item) => {
                const isChecked = selectedTags.includes(item.tag);
                return (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => toggleTag(item.tag)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isChecked
                        ? 'bg-emerald-600 text-white font-bold shadow-xs scale-102'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.tag}</span>
                    <span className={`text-[10px] ${isChecked ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {item.postsCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier 2: Community & Mid-Volume */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Community & Targeted Tags (100k - 500k Posts)
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                Core Engagement
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Active communities where like-minded creators and customers search daily.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {activeResults.mid.map((item) => {
                const isChecked = selectedTags.includes(item.tag);
                return (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => toggleTag(item.tag)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isChecked
                        ? 'bg-indigo-600 text-white font-bold shadow-xs scale-102'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.tag}</span>
                    <span className={`text-[10px] ${isChecked ? 'text-indigo-100' : 'text-slate-400'}`}>
                      {item.postsCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier 3: Mega & High Reach */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Mega & Broad Reach Tags (1M+ Posts)
                </h4>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                Macro Pillar
              </span>
            </div>
            <p className="text-xs text-slate-500">
              High competition broad tags. Use sparingly (1 or 2 max) so you don&apos;t dilute your ranking signal.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {activeResults.mega.map((item) => {
                const isChecked = selectedTags.includes(item.tag);
                return (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => toggleTag(item.tag)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isChecked
                        ? 'bg-amber-600 text-white font-bold shadow-xs scale-102'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.tag}</span>
                    <span className={`text-[10px] ${isChecked ? 'text-amber-100' : 'text-slate-400'}`}>
                      {item.postsCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Tag Basket & Copy Deck (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-5 sticky top-24">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-fuchsia-600" />
                  Selected Hashtags
                </h3>
                <p className="text-xs text-slate-500">
                  Ready to paste into your caption
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                selectedTags.length > 10 ? 'bg-amber-100 text-amber-800' : 'bg-fuchsia-100 text-fuchsia-800'
              }`}>
                {selectedTags.length} / 30 Tags
              </span>
            </div>

            {/* Format Style Switcher */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600">Formatting Layout</label>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormatMode('dots')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    formatMode === 'dots' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Dot Spaced
                </button>
                <button
                  type="button"
                  onClick={() => setFormatMode('space')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    formatMode === 'space' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Inline Space
                </button>
                <button
                  type="button"
                  onClick={() => setFormatMode('comma')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    formatMode === 'comma' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Comma
                </button>
              </div>
            </div>

            {/* Formatted Output Preview */}
            <div className="space-y-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[160px] max-h-[220px] overflow-y-auto text-xs text-slate-800 font-mono leading-relaxed whitespace-pre-wrap">
                {selectedTags.length > 0 ? (
                  getFormattedOutput()
                ) : (
                  <span className="text-slate-400 font-sans italic">
                    No hashtags selected yet. Click any tag on the left or tap &quot;5 Tags&quot; to populate.
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{getFormattedOutput().length} characters</span>
                <span>{selectedTags.length} hashtags</span>
              </div>
            </div>

            {/* Copy CTA */}
            <button
              type="button"
              disabled={selectedTags.length === 0}
              onClick={handleCopy}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-150 ${
                copied
                  ? 'bg-emerald-600 text-white shadow-md'
                  : selectedTags.length === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-700 hover:to-indigo-700 text-white shadow-md shadow-fuchsia-500/25'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy {selectedTags.length} Hashtags</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
