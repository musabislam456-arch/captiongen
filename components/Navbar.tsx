'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Hash,
  Clock,
  BookOpen,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Flame,
  Zap,
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setToolsDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { name: 'Caption Generator', href: '/tools/caption-generator', icon: Sparkles, badge: 'Popular' },
    { name: 'Hashtag Finder', href: '/tools/hashtag-generator', icon: Hash, badge: 'Viral' },
    { name: 'Best Posting Times', href: '/best-posting-times', icon: Clock, badge: '2026 Data' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-fuchsia-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                Caption<span className="bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-transparent">Gen</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-fuchsia-100 text-fuchsia-700 rounded-full">
                  Agency OS
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Social Media Marketing Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Tools Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                id="tools-dropdown-btn"
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  pathname.startsWith('/tools') || pathname === '/best-posting-times'
                    ? 'text-fuchsia-600 bg-fuchsia-50/80'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Free Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    {navLinks.map((tool) => {
                      const Icon = tool.icon;
                      const isActive = pathname === tool.href;
                      return (
                        <Link
                          key={tool.name}
                          href={tool.href}
                          className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                            isActive
                              ? 'bg-fuchsia-50 text-fuchsia-700'
                              : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold">{tool.name}</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {tool.badge}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-fuchsia-600 bg-fuchsia-50/80'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Playbooks & Blog
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/about'
                  ? 'text-fuchsia-600 bg-fuchsia-50/80'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/contact'
                  ? 'text-fuchsia-600 bg-fuchsia-50/80'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/tools/caption-generator"
              id="header-cta-btn"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 shadow-md shadow-fuchsia-500/25 hover:shadow-lg hover:shadow-fuchsia-500/35 hover:-translate-y-0.5 transition-all duration-150 active:translate-y-0"
            >
              <span>Create Captions</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/tools/caption-generator"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-fuchsia-600"
            >
              Create
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Marketing Tools
            </div>
            {navLinks.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-fuchsia-50 text-slate-800 hover:text-fuchsia-700 font-medium text-sm transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-fuchsia-600" />
                    <span>{tool.name}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {tool.badge}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="px-3 py-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Resources & Company
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium text-sm"
            >
              Playbooks & Blog (3 Guides)
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium text-sm"
            >
              About CaptionGen
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-medium text-sm"
            >
              Contact & Support
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 rounded-xl text-slate-500 text-xs hover:text-slate-800"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block px-3 py-2 rounded-xl text-slate-500 text-xs hover:text-slate-800"
            >
              Terms of Service
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/tools/caption-generator"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-fuchsia-600 to-violet-600 shadow-md text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Caption Generator</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
