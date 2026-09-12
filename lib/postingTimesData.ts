export type SocialPlatform = 'instagram' | 'tiktok' | 'linkedin' | 'threads' | 'youtube';

export interface PlatformPostingGuide {
  id: SocialPlatform;
  name: string;
  badge: string;
  accentColor: string;
  bestDaysOverall: string[];
  worstDayOverall: string;
  primaryVelocityWindow: string;
  goldenHours: {
    day: string;
    slots: string[];
    context: string;
  }[];
  algorithmInsight2026: string;
  heatmap: number[][]; // 7 days (Mon-Sun), 24 hours (0-23) -> intensity 1 to 4
}

export interface IndustryAdjustment {
  industry: string;
  bestWindows: string;
  notes: string;
}

export const TIMEZONE_OFFSETS: Record<string, { label: string; offset: number }> = {
  EST: { label: 'Eastern Time (US / NY) [EST]', offset: 0 },
  PST: { label: 'Pacific Time (US / LA) [PST]', offset: -3 },
  GMT: { label: 'Greenwich Mean Time (London) [GMT]', offset: 5 },
  CET: { label: 'Central European (Berlin/Paris) [CET]', offset: 6 },
  AEST: { label: 'Australian Eastern (Sydney) [AEST]', offset: 15 },
};

// Intensity: 1 = Low, 2 = Moderate, 3 = High, 4 = Peak Golden Slot
export const PLATFORM_GUIDES: Record<SocialPlatform, PlatformPostingGuide> = {
  instagram: {
    id: 'instagram',
    name: 'Instagram (Reels & Carousels)',
    badge: 'Visual & Community',
    accentColor: 'from-pink-500 via-rose-500 to-amber-500',
    bestDaysOverall: ['Tuesday', 'Wednesday', 'Thursday'],
    worstDayOverall: 'Sunday afternoon',
    primaryVelocityWindow: 'First 35 minutes determine Explore distribution',
    goldenHours: [
      { day: 'Monday', slots: ['8:30 AM', '12:15 PM', '7:00 PM'], context: 'Commute kick-off and lunch scroll show strong save-rates.' },
      { day: 'Tuesday', slots: ['9:00 AM', '1:00 PM', '8:15 PM'], context: 'Peak day for Carousel swipe-throughs and educational carousels.' },
      { day: 'Wednesday', slots: ['7:45 AM', '11:30 AM', '6:30 PM'], context: 'High DM share rate day; audience seeks bite-sized entertainment.' },
      { day: 'Thursday', slots: ['9:00 AM', '1:00 PM', '8:00 PM'], context: 'Strongest Reels engagement evening before the weekend.' },
      { day: 'Friday', slots: ['7:00 AM', '12:00 PM', '4:30 PM'], context: 'Early afternoon drops perform better before evening social plans.' },
      { day: 'Saturday', slots: ['10:00 AM', '2:00 PM'], context: 'Leisure lifestyle content, shopping, and travel guides.' },
      { day: 'Sunday', slots: ['9:30 AM', '7:00 PM', '8:45 PM'], context: 'Late-night chill scroll; reflection, weekly reset, and inspiration.' },
    ],
    algorithmInsight2026:
      'In 2026, Instagram weighs "Send to Direct Message" (DM shares) as 3.5x more valuable than a feed like. Posting when your audience is on desktop or active in group chats yields immediate amplification.',
    heatmap: [
      // Mon
      [1, 1, 1, 1, 1, 2, 3, 4, 3, 2, 2, 4, 4, 3, 2, 2, 3, 3, 4, 3, 2, 2, 1, 1],
      // Tue
      [1, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 4, 4, 3, 2, 3, 3, 4, 4, 4, 3, 2, 1, 1],
      // Wed
      [1, 1, 1, 1, 1, 2, 4, 4, 3, 3, 3, 4, 4, 3, 2, 3, 4, 4, 4, 3, 2, 2, 1, 1],
      // Thu
      [1, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 4, 4, 3, 2, 1, 1],
      // Fri
      [1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1],
      // Sat
      [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 3, 3, 2, 2, 2, 3, 3, 2, 2, 1, 1],
      // Sun
      [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 2, 2, 2, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    ],
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok (Short-Form Video)',
    badge: 'High Velocity',
    accentColor: 'from-cyan-400 via-fuchsia-500 to-rose-500',
    bestDaysOverall: ['Tuesday', 'Thursday', 'Friday'],
    worstDayOverall: 'Sunday morning',
    primaryVelocityWindow: 'First 15 minutes of completion rate and re-watches',
    goldenHours: [
      { day: 'Monday', slots: ['6:00 AM', '10:00 AM', '10:00 PM'], context: 'Early morning wake-up and late-night binge watching.' },
      { day: 'Tuesday', slots: ['9:00 AM', '2:00 PM', '7:00 PM'], context: 'High volume discovery feed engagement across timezones.' },
      { day: 'Wednesday', slots: ['7:00 AM', '11:00 PM'], context: 'Midweek comedy, relatable rants, and routine videos.' },
      { day: 'Thursday', slots: ['9:00 AM', '12:00 PM', '7:00 PM'], context: 'Strongest general viewing numbers for product reviews.' },
      { day: 'Friday', slots: ['5:00 AM', '1:00 PM', '3:00 PM'], context: 'Early morning global audience push; afternoon weekend hype.' },
      { day: 'Saturday', slots: ['11:00 AM', '7:00 PM', '9:00 PM'], context: 'Leisure scrolling and trend-sound adaptation videos.' },
      { day: 'Sunday', slots: ['7:00 AM', '8:00 AM', '4:00 PM'], context: 'Early morning and evening prep for upcoming week.' },
    ],
    algorithmInsight2026:
      'TikTok 2026 indexes heavily on search intent and first 1.5s hook retention. Unlike other platforms, TikTok videos can re-surface 3 weeks later if initial completion was >65%.',
    heatmap: [
      // Mon
      [1, 1, 1, 1, 1, 2, 4, 3, 2, 3, 4, 3, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 2, 1],
      // Tue
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 2, 1, 1],
      // Wed
      [1, 1, 1, 1, 1, 2, 4, 3, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 4, 4, 4, 4, 2, 1],
      // Thu
      [1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 3, 3, 4, 3, 2, 3, 3, 4, 4, 4, 3, 2, 1, 1],
      // Fri
      [1, 1, 1, 1, 1, 4, 3, 2, 2, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 3, 2, 1, 1],
      // Sat
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 4, 3, 3, 2, 2, 3, 4, 4, 4, 3, 2, 1, 1],
      // Sun
      [1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 3, 2, 2, 2, 2, 3, 4, 3, 3, 3, 2, 2, 1, 1],
    ],
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn (B2B & Thought Leadership)',
    badge: 'Professional Growth',
    accentColor: 'from-blue-600 via-indigo-600 to-sky-500',
    bestDaysOverall: ['Tuesday', 'Wednesday', 'Thursday'],
    worstDayOverall: 'Saturday & Sunday',
    primaryVelocityWindow: 'First 2 hours of comment discourse and reposts',
    goldenHours: [
      { day: 'Monday', slots: ['8:00 AM', '11:00 AM'], context: 'Week kick-off strategy thoughts and leadership articles.' },
      { day: 'Tuesday', slots: ['8:00 AM', '10:30 AM', '1:30 PM'], context: 'Highest reach day for deep-dive case studies.' },
      { day: 'Wednesday', slots: ['8:30 AM', '12:00 PM', '3:00 PM'], context: 'Peak engagement day for hiring and career narratives.' },
      { day: 'Thursday', slots: ['9:00 AM', '1:00 PM', '4:00 PM'], context: 'Strong debate & industry trends discourse.' },
      { day: 'Friday', slots: ['8:00 AM', '10:00 AM'], context: 'Lighter wins, culture spotlights, and weekend roundups.' },
      { day: 'Saturday', slots: ['9:00 AM'], context: 'Low volume; only post personal founder stories.' },
      { day: 'Sunday', slots: ['6:00 PM', '8:00 PM'], context: 'Weekly planning and productivity framework shares.' },
    ],
    algorithmInsight2026:
      'LinkedIn penalizes external links in the body text heavily (-40% reach). High-quality text-only breakdowns and 4-6 slide PDF carousels perform best between 8 AM and 11 AM business hours.',
    heatmap: [
      // Mon
      [1, 1, 1, 1, 1, 1, 2, 4, 4, 3, 3, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      // Tue
      [1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      // Wed
      [1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      // Thu
      [1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      // Fri
      [1, 1, 1, 1, 1, 1, 2, 4, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Sat
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Sun
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 3, 2, 1, 1, 1],
    ],
  },
  threads: {
    id: 'threads',
    name: 'Threads & X (Conversational)',
    badge: 'Real-Time Pulse',
    accentColor: 'from-violet-600 via-fuchsia-600 to-indigo-600',
    bestDaysOverall: ['Monday', 'Wednesday', 'Friday'],
    worstDayOverall: 'Sunday morning',
    primaryVelocityWindow: 'First 20 minutes of replies and quote reposts',
    goldenHours: [
      { day: 'Monday', slots: ['8:00 AM', '12:30 PM', '8:00 PM'], context: 'Hot takes and industry questions sparking replies.' },
      { day: 'Tuesday', slots: ['9:30 AM', '2:00 PM'], context: 'Mid-morning discussions and tool breakdowns.' },
      { day: 'Wednesday', slots: ['8:30 AM', '1:00 PM', '7:30 PM'], context: 'High conversation volume day across niche circles.' },
      { day: 'Thursday', slots: ['9:00 AM', '12:00 PM', '6:00 PM'], context: 'Thread recaps and weekend anticipation banter.' },
      { day: 'Friday', slots: ['8:00 AM', '11:30 AM', '4:00 PM'], context: 'Casual vibes, memes, and celebration of weekly milestones.' },
      { day: 'Saturday', slots: ['10:00 AM', '3:00 PM'], context: 'Lifestyle questions and cultural commentary.' },
      { day: 'Sunday', slots: ['7:00 PM', '9:30 PM'], context: 'Nightly wind-down confessions and thoughtful threads.' },
    ],
    algorithmInsight2026:
      'Threads favors reply depth and conversational longevity over pure like counts. Ending your post with a clean, low-friction question dramatically lifts organic feed placement.',
    heatmap: [
      // Mon
      [1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 4, 4, 3, 2, 2, 3, 4, 4, 3, 2, 2, 1, 1],
      // Tue
      [1, 1, 1, 1, 1, 2, 3, 3, 4, 3, 3, 3, 4, 3, 2, 2, 3, 3, 4, 3, 2, 1, 1, 1],
      // Wed
      [1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 4, 4, 3, 2, 3, 3, 4, 4, 4, 3, 2, 1, 1],
      // Thu
      [1, 1, 1, 1, 1, 2, 3, 3, 4, 3, 3, 4, 4, 3, 2, 2, 3, 3, 4, 3, 2, 1, 1, 1],
      // Fri
      [1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
      // Sat
      [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1],
      // Sun
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 4, 4, 4, 3, 2, 1, 1],
    ],
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube Shorts',
    badge: 'Evergreen Reach',
    accentColor: 'from-red-600 via-rose-600 to-amber-600',
    bestDaysOverall: ['Friday', 'Saturday', 'Sunday'],
    worstDayOverall: 'Monday morning',
    primaryVelocityWindow: 'First 2 hours of subscriber retention and swipe-away ratio',
    goldenHours: [
      { day: 'Monday', slots: ['2:00 PM', '4:00 PM'], context: 'After-school and post-work viewing hours.' },
      { day: 'Tuesday', slots: ['2:00 PM', '5:00 PM'], context: 'Pre-prime-time upload to allow indexing.' },
      { day: 'Wednesday', slots: ['1:00 PM', '4:30 PM'], context: 'Midweek entertainment search.' },
      { day: 'Thursday', slots: ['12:00 PM', '3:00 PM', '6:00 PM'], context: 'Lead-up into the weekend binge period.' },
      { day: 'Friday', slots: ['11:00 AM', '3:00 PM', '6:00 PM'], context: 'One of the strongest days for viral Shorts exploration.' },
      { day: 'Saturday', slots: ['9:00 AM', '11:00 AM', '4:00 PM'], context: 'All-day high leisure traffic.' },
      { day: 'Sunday', slots: ['9:00 AM', '1:00 PM', '5:00 PM'], context: 'High retention viewing across all age demographics.' },
    ],
    algorithmInsight2026:
      'YouTube Shorts requires 1 to 2 hours of indexing time before pushing to the Shorts Feed. Always schedule your upload 90 minutes before your audience peak traffic time.',
    heatmap: [
      // Mon
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1],
      // Tue
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1],
      // Wed
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1],
      // Thu
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1],
      // Fri
      [1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2, 1, 1],
      // Sat
      [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 1, 1],
      // Sun
      [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1],
    ],
  },
};

export const INDUSTRY_ADJUSTMENTS: IndustryAdjustment[] = [
  {
    industry: 'Fitness & Health',
    bestWindows: '6:00 AM - 7:30 AM & 5:30 PM - 7:30 PM',
    notes: 'Audiences engage before morning gym sessions or immediately after work when looking for workout inspiration and high-protein meals.',
  },
  {
    industry: 'Food & Restaurants',
    bestWindows: '11:00 AM - 1:00 PM & 4:30 PM - 6:30 PM',
    notes: 'Trigger visual hunger cues 30-45 minutes before standard lunch and dinner decision windows.',
  },
  {
    industry: 'Fashion & E-Commerce',
    bestWindows: '12:30 PM - 2:00 PM & 7:30 PM - 9:30 PM (Thurs - Sun)',
    notes: 'Impulse shopping spikes on Thursday evenings through Sunday afternoon paychecks and weekend relaxation.',
  },
  {
    industry: 'B2B, SaaS & Agency',
    bestWindows: '8:00 AM - 10:30 AM (Tues - Thurs)',
    notes: 'Professionals review case studies and productivity tips during their morning coffee before meeting marathons begin.',
  },
  {
    industry: 'Travel & Hospitality',
    bestWindows: 'Friday 2:00 PM - 6:00 PM & Sunday 7:00 PM - 9:30 PM',
    notes: 'Audiences daydream about weekend getaways on Friday afternoons and plan future vacations during Sunday night reset.',
  },
];
