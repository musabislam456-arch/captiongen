import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://captiongen.utilix.site'),
  title: {
    default: 'CaptionGen — Social Media Marketing Tools, Caption Generator & Hashtag Finder',
    template: '%s | CaptionGen',
  },
  description: 'Instant rule-based caption generator, 2026 hashtag finder, and best posting times guide. Free creator tools with zero sign-up required.',
  keywords: ['caption generator', 'instagram captions', 'hashtag generator', 'best posting times', 'social media marketing', 'tiktok hooks'],
  openGraph: {
    title: 'CaptionGen — Social Media Marketing Tools',
    description: 'Instant rule-based caption generator, viral hashtag finder, and 2026 posting time guide for creators & agencies.',
    type: 'website',
    url: 'https://captiongen.utilix.site',
    siteName: 'CaptionGen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaptionGen — Social Media Marketing Tools',
    description: 'Instant rule-based caption generator, viral hashtag finder, and 2026 posting time guide.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 antialiased selection:bg-fuchsia-500 selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />

        {/* <!-- CHATBOT_SCRIPT_START --> */}
        {/* <!-- Paste client's chatbot <script> embed code here --> */}
        {/* <!-- CHATBOT_SCRIPT_END --> */}
      </body>
    </html>
  );
}
