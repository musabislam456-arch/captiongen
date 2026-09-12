import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CaptionGen',
  description: 'Terms of Service and usage conditions for CaptionGen.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div className="space-y-4 pb-8 border-b border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-slate-500">Last Updated: September 12, 2026</p>
      </div>

      <div className="prose prose-slate prose-sm sm:prose-base max-w-none prose-headings:font-bold prose-headings:text-slate-900">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of CaptionGen (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) website and services. By accessing or using the Service, you agree to be bound by these Terms.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h3>2. Use License</h3>
        <p>
          Permission is granted to temporarily use the materials (information or software) on CaptionGen&apos;s website for personal, non-commercial, and commercial social media marketing purposes. Under this license you may not:
        </p>
        <ul>
          <li>Attempt to decompile or reverse engineer any software contained on CaptionGen&apos;s website.</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
          <li>Resell the generated outputs as a standalone automated service via API scraping.</li>
        </ul>

        <h3>3. Disclaimer</h3>
        <p>
          The materials on CaptionGen&apos;s website are provided on an &apos;as is&apos; basis. CaptionGen makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p>
          Further, CaptionGen does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>

        <h3>4. Limitations</h3>
        <p>
          In no event shall CaptionGen or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CaptionGen&apos;s website, even if CaptionGen or a CaptionGen authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h3>5. Fair Use</h3>
        <p>
          Our tools are provided free of charge to help social media managers and creators. We reserve the right to block IP addresses that are utilizing automated bots to scrape or abuse our generator endpoints, to ensure availability for legitimate users.
        </p>

        <h3>6. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
}
