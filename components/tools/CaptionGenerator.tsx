'use client';

import React, { useState, useEffect } from 'react';
import {
  NICHES,
  TONES,
  CTA_OPTIONS,
  NicheId,
  ToneId,
  PlatformId,
  GeneratedCaption,
  generateCaptions,
} from '@/lib/captionTemplates';
import {
  Sparkles,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  RefreshCw,
  Eye,
  Sliders,
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Share2,
  Trash2,
  Smile,
  Instagram,
} from 'lucide-react';

interface CaptionGeneratorProps {
  compact?: boolean;
  initialNiche?: NicheId;
}

export default function CaptionGenerator({ compact = false, initialNiche }: CaptionGeneratorProps) {
  const [selectedNiche, setSelectedNiche] = useState<NicheId>(initialNiche || 'creator');
  const [selectedTone, setSelectedTone] = useState<ToneId>('witty');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>('instagram');
  const [selectedCta, setSelectedCta] = useState<string>('save');
  const [customTopic, setCustomTopic] = useState<string>('');
  const [includeEmojis, setIncludeEmojis] = useState<boolean>(true);

  const [captions, setCaptions] = useState<GeneratedCaption[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedFavorites, setSavedFavorites] = useState<GeneratedCaption[]>([]);
  const [activeTab, setActiveTab] = useState<'generate' | 'favorites'>('generate');
  const [previewCaption, setPreviewCaption] = useState<GeneratedCaption | null>(null);
  const [previewExpanded, setPreviewExpanded] = useState<boolean>(false);

  // Load favorites from localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem('captiongen_saved_captions');
        if (stored) {
          setSavedFavorites(JSON.parse(stored));
        }
      } catch {
        // Ignore localstorage issues in sandbox
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Sync to localStorage
  const saveToLocalStorage = (list: GeneratedCaption[]) => {
    setSavedFavorites(list);
    try {
      localStorage.setItem('captiongen_saved_captions', JSON.stringify(list));
    } catch {
      // safe fallback
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = generateCaptions({
        nicheId: selectedNiche,
        toneId: selectedTone,
        topic: customTopic,
        ctaId: selectedCta,
        includeEmojis,
        platform: selectedPlatform,
      });
      setCaptions(results);
      setPreviewCaption((prev) => (!prev && results.length > 0 ? results[0] : prev));
    }, 0);
    return () => clearTimeout(timer);
  }, [selectedNiche, selectedTone, selectedPlatform, selectedCta, includeEmojis, customTopic]);

  const handleGenerate = () => {
    const results = generateCaptions({
      nicheId: selectedNiche,
      toneId: selectedTone,
      topic: customTopic,
      ctaId: selectedCta,
      includeEmojis,
      platform: selectedPlatform,
    });
    setCaptions(results);
    if (!previewCaption && results.length > 0) {
      setPreviewCaption(results[0]);
    }
  };

  const handleCopy = (caption: GeneratedCaption) => {
    navigator.clipboard.writeText(caption.fullText);
    setCopiedId(caption.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const toggleFavorite = (caption: GeneratedCaption) => {
    const exists = savedFavorites.some((item) => item.fullText === caption.fullText);
    if (exists) {
      const updated = savedFavorites.filter((item) => item.fullText !== caption.fullText);
      saveToLocalStorage(updated);
    } else {
      const updated = [caption, ...savedFavorites];
      saveToLocalStorage(updated);
    }
  };

  const isFavorite = (caption: GeneratedCaption) => {
    return savedFavorites.some((item) => item.fullText === caption.fullText);
  };

  const currentNicheObj = NICHES.find((n) => n.id === selectedNiche) || NICHES[0];

  return (
    <div className="w-full space-y-8">
      {/* Top Header Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-4">
        <div className="flex items-center gap-2 bg-slate-100/90 p-1 rounded-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('generate')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'generate'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-fuchsia-600" />
              Generator Studio
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'favorites'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bookmark className="w-4 h-4 text-amber-500" />
            <span>Saved Captions</span>
            {savedFavorites.length > 0 && (
              <span className="px-1.5 py-0.2 bg-fuchsia-600 text-white rounded-full text-[10px] font-bold">
                {savedFavorites.length}
              </span>
            )}
          </button>
        </div>

        {/* Quick Platform Switcher */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-2xl">
          {(['instagram', 'tiktok', 'linkedin', 'threads'] as PlatformId[]).map((plat) => (
            <button
              key={plat}
              type="button"
              onClick={() => setSelectedPlatform(plat)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors ${
                selectedPlatform === plat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {plat === 'threads' ? 'Threads / X' : plat}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'favorites' ? (
        /* Favorites View */
        <div className="space-y-6">
          {savedFavorites.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No saved captions yet</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Click the bookmark icon on any generated caption to save it for your next scheduled post.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('generate')}
                className="px-5 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Back to Generator
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedFavorites.map((fav, i) => (
                <div
                  key={`fav-${i}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-fuchsia-50 text-fuchsia-700">
                        {fav.styleTag}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(fav)}
                        title="Remove from favorites"
                        className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed bg-slate-50/70 p-3.5 rounded-xl max-h-56 overflow-y-auto">
                      {fav.fullText}
                    </pre>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {fav.wordCount} words • {fav.charCount} chars
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(fav)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-slate-800"
                    >
                      {copiedId === fav.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Main Generator Controls & Outputs */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column (Left, 5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-fuchsia-600" />
                  Formula Controls
                </h3>
                <span className="text-xs text-slate-400">Rule-based AI engine</span>
              </div>

              {/* 1. Niche Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center justify-between">
                  <span>1. Select Niche</span>
                  <span className="text-fuchsia-600 font-semibold">{currentNicheObj.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {NICHES.map((niche) => {
                    const isSelected = selectedNiche === niche.id;
                    return (
                      <button
                        key={niche.id}
                        type="button"
                        onClick={() => setSelectedNiche(niche.id)}
                        className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex items-center gap-2 ${
                          isSelected
                            ? 'bg-fuchsia-50/90 border-fuchsia-300 text-fuchsia-950 font-bold shadow-xs'
                            : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50 font-medium'
                        }`}
                      >
                        <span className="text-base">{niche.emoji}</span>
                        <span className="truncate">{niche.name.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Tone Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  2. Select Voice & Tone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {TONES.map((tone) => {
                    const isSelected = selectedTone === tone.id;
                    return (
                      <button
                        key={tone.id}
                        type="button"
                        onClick={() => setSelectedTone(tone.id)}
                        className={`p-2.5 rounded-2xl text-left border transition-all ${
                          isSelected
                            ? 'bg-violet-50/90 border-violet-300 text-violet-950 shadow-xs'
                            : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm">{tone.emoji}</span>
                          <span className="text-xs font-bold truncate">{tone.name}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                          {tone.tagline}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Custom Topic Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    3. Topic or Specific Angle (Optional)
                  </label>
                  <button
                    type="button"
                    onClick={() => setCustomTopic(currentNicheObj.defaultTopic)}
                    className="text-[11px] font-semibold text-fuchsia-600 hover:text-fuchsia-700"
                  >
                    Use sample topic
                  </button>
                </div>
                <input
                  type="text"
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder={`e.g. ${currentNicheObj.defaultTopic}`}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* 4. Call to Action Preset */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  4. Call-to-Action (CTA) Goal
                </label>
                <select
                  value={selectedCta}
                  onChange={(e) => setSelectedCta(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500"
                >
                  {CTA_OPTIONS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Toggle Emojis & Refresh */}
              <div className="pt-2 flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeEmojis}
                    onChange={(e) => setIncludeEmojis(e.target.checked)}
                    className="w-4 h-4 text-fuchsia-600 rounded-md border-slate-300 focus:ring-fuchsia-500"
                  />
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <Smile className="w-3.5 h-3.5 text-amber-500" />
                    Include Social Emojis
                  </span>
                </label>

                <button
                  type="button"
                  onClick={handleGenerate}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Regenerate</span>
                </button>
              </div>
            </div>

            {/* Instagram Live Phone Simulator Card */}
            {previewCaption && (
              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span className="text-xs font-bold text-slate-800">Live Post Preview</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Mobile View
                  </span>
                </div>

                {/* Simulated Instagram Post Frame */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white text-slate-900 shadow-xs">
                  {/* Account Header */}
                  <div className="p-3 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 p-0.5">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800">
                          CG
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">your_brand_handle</div>
                        <div className="text-[10px] text-slate-500">Original audio • 2h ago</div>
                      </div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>

                  {/* Post Image Placeholder */}
                  <div className="w-full aspect-square bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 relative flex flex-col items-center justify-center p-6 text-white text-center">
                    <div className="backdrop-blur-md bg-black/25 p-4 rounded-2xl border border-white/20 max-w-[85%]">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300 mb-1">
                        {previewCaption.styleTag}
                      </p>
                      <p className="text-sm font-bold leading-snug">
                        {previewCaption.hook.slice(0, 95)}...
                      </p>
                    </div>
                    <span className="absolute bottom-3 right-3 text-[10px] font-semibold bg-black/40 px-2 py-0.5 rounded-full">
                      1 / 5
                    </span>
                  </div>

                  {/* Action Icons */}
                  <div className="p-3 pb-1 flex items-center justify-between text-slate-800">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                      <MessageCircle className="w-5 h-5 hover:text-slate-600" />
                      <Send className="w-5 h-5 hover:text-slate-600" />
                    </div>
                    <Bookmark className="w-5 h-5 text-slate-800 fill-slate-800" />
                  </div>

                  {/* Likes and Caption with ...more toggle */}
                  <div className="px-3 pb-4 text-xs space-y-1">
                    <div className="font-bold text-slate-900">1,482 likes</div>
                    <div className="leading-relaxed">
                      <span className="font-bold mr-1.5">your_brand_handle</span>
                      {previewExpanded ? (
                        <span className="whitespace-pre-wrap text-slate-700">
                          {previewCaption.fullText}
                          <button
                            type="button"
                            onClick={() => setPreviewExpanded(false)}
                            className="text-slate-400 font-semibold ml-2 hover:text-slate-600"
                          >
                            less
                          </button>
                        </span>
                      ) : (
                        <span>
                          {previewCaption.hook.slice(0, 110)}
                          <button
                            type="button"
                            onClick={() => setPreviewExpanded(true)}
                            className="text-slate-400 font-bold ml-1 hover:text-slate-700"
                          >
                            ...more
                          </button>
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1">
                      View all 48 comments
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Column (Right, 7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Generated Caption Variations</h2>
                <p className="text-xs text-slate-500">
                  Formula-engineered variations matching your niche & voice
                </p>
              </div>
              <span className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 px-3 py-1 rounded-full border border-fuchsia-100">
                {captions.length} Options Ready
              </span>
            </div>

            <div className="space-y-5">
              {captions.map((caption, index) => {
                const isFav = isFavorite(caption);
                const isCopied = copiedId === caption.id;

                return (
                  <div
                    key={caption.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-4 group"
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <h4 className="font-extrabold text-sm text-slate-900">{caption.title}</h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {caption.styleTag}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewCaption(caption);
                            setPreviewExpanded(false);
                          }}
                          className="p-2 rounded-xl text-slate-500 hover:text-fuchsia-600 hover:bg-fuchsia-50 transition-colors text-xs flex items-center gap-1 font-semibold"
                          title="Preview in mock phone feed"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Preview</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(caption)}
                          className={`p-2 rounded-xl text-xs transition-colors flex items-center gap-1 font-semibold ${
                            isFav
                              ? 'bg-amber-50 text-amber-600'
                              : 'text-slate-500 hover:text-amber-500 hover:bg-amber-50'
                          }`}
                          title="Bookmark caption"
                        >
                          {isFav ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Hook Callout */}
                    <div className="bg-fuchsia-50/50 border-l-4 border-fuchsia-500 p-3 rounded-r-2xl">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-fuchsia-700 block mb-0.5">
                        Hook (Above the Fold)
                      </span>
                      <p className="text-xs font-bold text-slate-900 leading-snug">{caption.hook}</p>
                    </div>

                    {/* Full Body Text */}
                    <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-wrap max-h-72 overflow-y-auto">
                      {caption.fullText}
                    </div>

                    {/* Footer Stats & Copy Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        <span>
                          <strong>{caption.wordCount}</strong> words
                        </span>
                        <span>•</span>
                        <span>
                          <strong>{caption.charCount}</strong> / 2,200 chars
                        </span>
                        <span>•</span>
                        <span className="text-emerald-600 font-medium">
                          {caption.hashtags.length} Tags Included
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(caption)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all duration-150 ${
                          isCopied
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 text-white shadow-xs hover:shadow-md'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Caption & Tags</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
