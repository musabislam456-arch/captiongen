import React from 'react';
import type { Metadata } from 'next';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | CaptionGen',
  description: 'Get in touch with the CaptionGen team for support, feature requests, or business inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto">
          Have a question about the tools? Want to request a new feature? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Email Support</h3>
              <p className="text-sm text-slate-500 mt-1 mb-2">For general inquiries and technical help.</p>
              <a href="mailto:support@captiongen.app" className="text-sm font-bold text-fuchsia-600 hover:underline">
                support@captiongen.app
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Social Media</h3>
              <p className="text-sm text-slate-500 mt-1 mb-2">Connect with us on X (Twitter) or LinkedIn.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-sm font-bold text-slate-700 hover:text-fuchsia-600">@CaptionGenApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder (Client-side handled via action attribute in production or a real integration) */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h2>
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all resize-y"
                placeholder="How can we help?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md hover:bg-slate-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
