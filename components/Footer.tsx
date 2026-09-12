import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Hash,
  Clock,
  BookOpen,
  Mail,
  ShieldCheck,
  Heart,
  ExternalLink,
  Zap,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Caption<span className="bg-gradient-to-r from-fuchsia-400 to-amber-300 bg-clip-text text-transparent">Gen</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The creator and social media agency toolkit. Generate high-retention caption formulas, discovery-optimized hashtags, and master 2026 posting windows without corporate fluff.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                100% Client-Side & Private
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold">
                <Zap className="w-3 h-3" />
                Zero Sign-Up Required
              </span>
            </div>
          </div>

          {/* Column 2: Free Growth Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Growth Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/tools/caption-generator"
                  className="hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  Caption Idea Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/hashtag-generator"
                  className="hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2"
                >
                  <Hash className="w-3.5 h-3.5 text-pink-400" />
                  Viral Hashtag Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/best-posting-times"
                  className="hover:text-fuchsia-400 transition-colors inline-flex items-center gap-2"
                >
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Best Posting Times (2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Playbooks & Guides */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Playbooks & Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/blog/instagram-caption-formulas-that-work"
                  className="hover:text-fuchsia-400 transition-colors block text-slate-400 hover:text-slate-200"
                >
                  Caption Formulas That Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/hashtag-strategy-2026"
                  className="hover:text-fuchsia-400 transition-colors block text-slate-400 hover:text-slate-200"
                >
                  Hashtag Strategy 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/viral-reels-hooks-guide"
                  className="hover:text-fuchsia-400 transition-colors block text-slate-400 hover:text-slate-200"
                >
                  Short-Form Video Hooks
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-fuchsia-400 transition-colors inline-flex items-center gap-1 text-fuchsia-400 font-medium"
                >
                  View All Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Agency & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-fuchsia-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-fuchsia-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-fuchsia-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-fuchsia-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CaptionGen Media Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <span className="flex items-center gap-1 text-slate-400">
              Crafted for creators everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
