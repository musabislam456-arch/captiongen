import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CaptionGen',
  description: 'Privacy Policy and data handling practices for CaptionGen.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div className="space-y-4 pb-8 border-b border-slate-200">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last Updated: September 12, 2026</p>
      </div>

      <div className="prose prose-slate prose-sm sm:prose-base max-w-none prose-headings:font-bold prose-headings:text-slate-900">
        <p>
          At CaptionGen, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </li>
          <li>
            <strong>Tool Usage Data:</strong> The inputs you provide to our free tools (Caption Generator, Hashtag Finder) are processed client-side or ephemerally on our servers solely for the purpose of returning the generated content. We do not store your inputs or outputs to train external AI models.
          </li>
        </ul>

        <h3>2. Use of Your Information</h3>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Improve the performance of our algorithm benchmarking tools.</li>
        </ul>

        <h3>3. Analytics and Cookies</h3>
        <p>
          We may use third-party analytics services (such as Google Analytics) to help analyze how users use the Site. These services use cookies and similar technologies to collect information about the use of the Site and to report website trends, without identifying individual visitors.
        </p>

        <h3>4. Data Security</h3>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h3>5. Contact Us</h3>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: <br />
          <a href="mailto:privacy@captiongen.app" className="text-fuchsia-600 hover:underline">privacy@captiongen.app</a>
        </p>
      </div>
    </div>
  );
}
