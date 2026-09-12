export type NicheId =
  | 'fitness'
  | 'food'
  | 'fashion'
  | 'travel'
  | 'tech'
  | 'realestate'
  | 'ecommerce'
  | 'creator'
  | 'photography'
  | 'coaching'
  | 'business';

export type ToneId =
  | 'witty'
  | 'relatable'
  | 'inspirational'
  | 'educational'
  | 'bold'
  | 'sales'
  | 'aesthetic'
  | 'storytelling';

export type PlatformId = 'instagram' | 'tiktok' | 'linkedin' | 'threads';

export interface NicheOption {
  id: NicheId;
  name: string;
  emoji: string;
  description: string;
  defaultTopic: string;
}

export interface ToneOption {
  id: ToneId;
  name: string;
  emoji: string;
  tagline: string;
}

export interface GeneratedCaption {
  id: string;
  title: string;
  hook: string;
  body: string;
  cta: string;
  hashtags: string[];
  fullText: string;
  charCount: number;
  wordCount: number;
  styleTag: string;
}

export const NICHES: NicheOption[] = [
  { id: 'fitness', name: 'Fitness & Wellness', emoji: '💪', description: 'Workouts, nutrition, mindset, routines', defaultTopic: 'Morning workout consistency vs motivation' },
  { id: 'food', name: 'Food & Cafe', emoji: '☕', description: 'Recipes, cafe culture, culinary reviews', defaultTopic: 'Secret 10-minute high-protein iced matcha latte' },
  { id: 'fashion', name: 'Fashion & Beauty', emoji: '✨', description: 'Outfits, skincare, styling tips, thrift finds', defaultTopic: '3 styling rules that instantly elevate simple basics' },
  { id: 'travel', name: 'Travel & Adventure', emoji: '✈️', description: 'Hidden gems, itineraries, solo travel tips', defaultTopic: 'Underrated European coastal town you have to visit' },
  { id: 'tech', name: 'Tech & SaaS', emoji: '⚡', description: 'Productivity apps, tech tools, developer life', defaultTopic: 'Automating your content workflow with 2 simple tools' },
  { id: 'realestate', name: 'Real Estate & Interior', emoji: '🏡', description: 'Property tours, styling tips, home buying', defaultTopic: 'First-time homebuyer mistakes nobody talks about' },
  { id: 'ecommerce', name: 'E-commerce & Brands', emoji: '🛍️', description: 'Product drops, behind-the-scenes, packaging', defaultTopic: 'The story behind our newest restock formulation' },
  { id: 'creator', name: 'Creator & Personal Brand', emoji: '🎙️', description: 'Content tips, audience building, authenticity', defaultTopic: 'What 12 months of posting every day actually felt like' },
  { id: 'photography', name: 'Photography & Art', emoji: '📸', description: 'Behind the lens, lighting hacks, portfolio show', defaultTopic: 'How natural golden hour backlight changes everything' },
  { id: 'coaching', name: 'Coaching & Mentorship', emoji: '🎯', description: 'Mindset shifts, client breakthroughs, strategy', defaultTopic: 'Stop waiting until you feel ready to launch' },
  { id: 'business', name: 'Business & Finance', emoji: '📈', description: 'Bootstrapping, agency growth, wealth habits', defaultTopic: 'The single metric that doubled our client retention' },
];

export const TONES: ToneOption[] = [
  { id: 'witty', name: 'Witty & Humorous', emoji: '😏', tagline: 'Clever, playful, slightly sarcastic and memorable' },
  { id: 'relatable', name: 'Relatable & Casual', emoji: '🤝', tagline: 'Feels like texting a friend or posting in Close Friends' },
  { id: 'inspirational', name: 'Inspirational', emoji: '🔥', tagline: 'Empowering, energetic, motivates immediate action' },
  { id: 'educational', name: 'Educational & Value', emoji: '🧠', tagline: 'Save-worthy tutorials, framework teardowns, checklists' },
  { id: 'bold', name: 'Bold & Contrarian', emoji: '⚡', tagline: 'Challenges industry norms, sparks fiery debate in comments' },
  { id: 'sales', name: 'High-Converting & Sales', emoji: '🎯', tagline: 'Urgent, benefit-focused, direct call-to-actions' },
  { id: 'aesthetic', name: 'Aesthetic & Minimal', emoji: '🌿', tagline: 'Poetic, calm, understated elegance with clean spacing' },
  { id: 'storytelling', name: 'Storytelling & Vulnerable', emoji: '📖', tagline: 'Deep personal hook, raw transformation journey' },
];

export const CTA_OPTIONS = [
  { id: 'save', label: '🔖 Bookmark / Save for later', text: 'Save this post so you don\'t lose it when you need it most.' },
  { id: 'comment', label: '💬 Comment your thoughts / Debate', text: 'Which one are you doing right now? Drop a 1 or 2 below 👇' },
  { id: 'share', label: '↗️ Share with a friend', text: 'Send this to someone who definitely needs to hear this today.' },
  { id: 'link', label: '🔗 Link in bio / Free guide', text: 'Grab the complete checklist from the link in our bio.' },
  { id: 'dm', label: '📩 Send a DM', text: 'Drop "READY" in our DMs and we\'ll send you the exact breakdown.' },
  { id: 'question', label: '❓ Open question to audience', text: 'Be honest: have you ever made this mistake before?' },
  { id: 'none', label: '🚫 No CTA (Let content breathe)', text: '' },
];

interface TemplateVariant {
  styleTag: string;
  hookTemplate: (topic: string, niche: string) => string;
  bodyTemplate: (topic: string, niche: string) => string;
  defaultHashtags: string[];
}

const TEMPLATE_MATRIX: Record<ToneId, TemplateVariant[]> = {
  witty: [
    {
      styleTag: 'The Reality Check',
      hookTemplate: (topic) => `Me pretending I have my life together while dealing with ${topic.toLowerCase()}: 🤡`,
      bodyTemplate: (topic) =>
        `Look, we can either spend another 3 hours overthinking this, or admit the truth:\n\n1. It's never as complicated as the "experts" make it seem.\n2. Most people are just winging it with better lighting.\n3. The secret to ${topic.toLowerCase()} is doing the boring work nobody tweets about.\n\nConsider this your official permission slip to stop stressing and just start.`,
      defaultHashtags: ['#CreatorProblems', '#HonestTalk', '#RelatablePost', '#DailyGrind', '#SendHelp'],
    },
    {
      styleTag: 'The Unsolicited Opinion',
      hookTemplate: (topic) => `Unpopular opinion: if your approach to ${topic.toLowerCase()} feels exhausting, you're doing it wrong.`,
      bodyTemplate: (topic) =>
        `No shade, but someone had to say it. ☕\n\nWe love romanticizing the struggle, but simplicity is undefeated. Here is the actual formula that saved my sanity:\n\n• Step 1: Cut 50% of the fluff you think you need\n• Step 2: Double down on the 1 thing that actually moves the needle\n• Step 3: Drink some water and take a breath\n\nYou're welcome.`,
      defaultHashtags: ['#UnpopularOpinion', '#TruthBomb', '#KeepItSimple', '#RealTalk', '#ModernLife'],
    },
    {
      styleTag: 'The Before & After Meme',
      hookTemplate: (topic) => `Swipe to see the exact moment I realized ${topic.toLowerCase()} was simpler than I thought. 👀`,
      bodyTemplate: (topic) =>
        `Day 1: "I will master this in 24 hours."\nDay 30: "I am questioning all my life choices."\nToday: "Wait, that's literally all it took?"\n\nDon't let perfectionism rob you of your momentum. The bar is literally just showing up today.`,
      defaultHashtags: ['#PlotTwist', '#GrowthMindset', '#BehindTheScenes', '#SmallWins', '#CreatorJourney'],
    },
  ],
  relatable: [
    {
      styleTag: 'The Close Friends Text',
      hookTemplate: (topic) => `Can we normalize talking about how weird ${topic.toLowerCase()} feels at first?`,
      bodyTemplate: (topic) =>
        `Because I spent way too long thinking I was the only person struggling with this.\n\nEvery time you see someone cruising through this effortlessly online, remember:\n• They struggled through the clumsy phase too\n• Their highlight reel doesn't show the messy middle\n• You are further along than you think\n\nIf you needed this reminder today, you're not alone. We're all figuring it out in real-time.`,
      defaultHashtags: ['#BehindTheScreen', '#AuthenticContent', '#DailyReminder', '#CommunityFirst', '#HumanConnection'],
    },
    {
      styleTag: 'The Sunday Reflection',
      hookTemplate: (topic) => `A little gentle reminder for anyone navigating ${topic.toLowerCase()} right now:`,
      bodyTemplate: (topic) =>
        `You don't need a complete life makeover to make progress. Small, unglamorous micro-habits beat intense bursts of motivation every single time.\n\nHere's what helped me this week:\n1. Doing it badly instead of waiting for perfection\n2. Celebrating the quiet progress nobody claps for\n3. Protecting my peace from comparison\n\nTake what resonates, leave what doesn't.`,
      defaultHashtags: ['#SlowLiving', '#MindfulMoments', '#IntentionalLiving', '#ProgressOverPerfection', '#CalmMind'],
    },
    {
      styleTag: 'The Casual Checklist',
      hookTemplate: (topic) => `The non-aesthetic truth about ${topic.toLowerCase()} that nobody posts on their grid:`,
      bodyTemplate: (topic) =>
        `It looks like:\n• Messy desks and forgotten coffee cups\n• Rewriting the same idea three times\n• Second-guessing yourself, then doing it anyway\n\nDon't let curated feeds fool you. Real momentum is messy, and that's completely fine.`,
      defaultHashtags: ['#RealLife', '#BehindTheScenes', '#RelatableMoments', '#CreativeProcess', '#EverydayLife'],
    },
  ],
  inspirational: [
    {
      styleTag: 'The Mindset Shift',
      hookTemplate: (topic) => `The moment you stop waiting for motivation is the exact moment ${topic.toLowerCase()} changes your trajectory.`,
      bodyTemplate: (topic) =>
        `Motivation is a feeling. Discipline is an identity.\n\nOne year from today, you will either be celebrating the foundation you laid down this week, or wishing you had started today.\n\nThe secret isn't more information. It's executing with quiet obsession on the things within your control.\n\nShow up today. Even if it's just 15 minutes. Even if no one is watching yet.`,
      defaultHashtags: ['#DisciplineEqualsFreedom', '#Relentless', '#BuildYourFuture', '#SelfMastery', '#LevelUp'],
    },
    {
      styleTag: 'The Power Statement',
      hookTemplate: (topic) => `You didn't come this far to only come this far with ${topic.toLowerCase()}.`,
      bodyTemplate: (topic) =>
        `Every plateau is an invitation to upgrade your standards.\n\nWhen things feel heavy, that's not a signal to quit — that's resistance indicating you are right on the edge of a breakthrough.\n\n• Stay anchored in your vision\n• Block out the noise of people who aren't in the arena\n• Keep stacking small wins daily\n\nYour future self is already thanking you.`,
      defaultHashtags: ['#RiseAndGrind', '#Visionary', '#GoalGetter', '#NeverSettle', '#Unstoppable'],
    },
    {
      styleTag: 'The Catalyst',
      hookTemplate: (topic) => `Stop shrinking your goals to match your current environment. Master ${topic.toLowerCase()} instead.`,
      bodyTemplate: (topic) =>
        `The people you look up to didn't have fewer obstacles. They just made a non-negotiable decision that their vision was bigger than their excuses.\n\nAudit where your energy went this week:\n→ Were you reacting, or were you building?\n→ Were you consuming, or were you creating?\n\nTake control of the narrative.`,
      defaultHashtags: ['#LeadershipMindset', '#GrowthTrajectory', '#MakeItHappen', '#FocusOnTheGoal', '#HighPerformance'],
    },
  ],
  educational: [
    {
      styleTag: 'The 3-Step Framework',
      hookTemplate: (topic) => `How to master ${topic.toLowerCase()} in 3 repeatable steps (without burnout): 📌`,
      bodyTemplate: (topic) =>
        `Most people overcomplicate this. Save this breakdown for your next working session.\n\n1️⃣ Phase 1: The Foundation\nAudit your current baseline. Eliminate low-leverage steps and define your clear single outcome.\n\n2️⃣ Phase 2: Systematic Execution\nSet a 25-minute sprint daily. Focus on output over aesthetic perfection.\n\n3️⃣ Phase 3: The Feedback Loop\nMeasure real data after 14 days, not feelings. Tweak one variable at a time.\n\nWhich phase are you currently in?`,
      defaultHashtags: ['#HowToGuide', '#ActionableAdvice', '#Framework', '#ProductivityHacks', '#StepByStep'],
    },
    {
      styleTag: 'The Common Mistakes Teardown',
      hookTemplate: (topic) => `3 massive mistakes people make with ${topic.toLowerCase()} (and how to fix each one):`,
      bodyTemplate: (topic) =>
        `If you feel stuck, you might be falling into trap #2:\n\n❌ Mistake 1: Relying on sheer willpower instead of building a friction-free system.\n✅ The Fix: Pre-schedule your execution window 24h in advance.\n\n❌ Mistake 2: Measuring inputs rather than tangible outputs.\n✅ The Fix: Define one binary metric of success.\n\n❌ Mistake 3: Trying to do everything at once.\n✅ The Fix: Master the 80/20 leverage point first.`,
      defaultHashtags: ['#SkillBuilding', '#EfficiencyTips', '#CheatSheet', '#ProTips', '#LearnEveryday'],
    },
    {
      styleTag: 'The Micro-Masterclass',
      hookTemplate: (topic) => `A 60-second masterclass on ${topic.toLowerCase()} that will save you months of trial and error:`,
      bodyTemplate: (topic) =>
        `Here is the exact playbook top performers use behind closed doors:\n\n• Rule #1: Speed of implementation beats perfection every time.\n• Rule #2: Quality is a byproduct of high volume combined with honest reflection.\n• Rule #3: Keep your tools minimal so friction stays at zero.\n\nSwipe through the slides above for the visual walkthrough.`,
      defaultHashtags: ['#Masterclass', '#EducationalContent', '#SmartGrowth', '#KnowledgeDrop', '#BestPractices'],
    },
  ],
  bold: [
    {
      styleTag: 'The Harsh Truth',
      hookTemplate: (topic) => `Hard pill to swallow: the reason you're struggling with ${topic.toLowerCase()} is that you care too much about opinions.`,
      bodyTemplate: (topic) =>
        `Let's stop sugarcoating it. 🔥\n\nYou don't need another course. You don't need a new gadget. You need to sit down for two hours without checking notifications and actually do the work.\n\nMost advice online is designed to make you feel productive while you scroll.\nThis post is designed to get you off Instagram and into execution.\n\nProve me wrong in the comments.`,
      defaultHashtags: ['#HardTruths', '#NoExcuses', '#Disruptor', '#StraightTalk', '#Accountability'],
    },
    {
      styleTag: 'The Sacred Cow Buster',
      hookTemplate: (topic) => `Everything the "gurus" told you about ${topic.toLowerCase()} is completely outdated in 2026.`,
      bodyTemplate: (topic) =>
        `They're still selling 2021 playbooks that stopped working 18 months ago.\n\nHere is what is actually moving the needle right now:\n• Raw authenticity beats hyper-produced templates\n• Specific utility beats vague inspirational quotes\n• Community retention beats vanity follower counts\n\nAdapt or get left behind. It's really that simple.`,
      defaultHashtags: ['#IndustryDisruption', '#AlgorithmUpdate', '#SocialStrategy', '#ModernMarketing', '#Contrarian'],
    },
    {
      styleTag: 'The Challenge',
      hookTemplate: (topic) => `I dare you to test this one shift regarding ${topic.toLowerCase()} for the next 7 days:`,
      bodyTemplate: (topic) =>
        `No half-measures. No "I'll try if I have time."\n\nCut your output in half, but double the depth and intentionality of every single deliverable.\n\nWatch how fast your engagement, quality, and headspace improve when you stop playing the low-effort volume game.`,
      defaultHashtags: ['#7DayChallenge', '#BoldMoves', '#Standards', '#LevelUpChallenge', '#GameChanger'],
    },
  ],
  sales: [
    {
      styleTag: 'The Problem-Agitate-Solve',
      hookTemplate: (topic) => `Tired of wasting hours trying to figure out ${topic.toLowerCase()} on your own?`,
      bodyTemplate: (topic) =>
        `You know the cycle:\n• You spend hours researching\n• You try 4 different methods that conflict with each other\n• You end up overwhelmed with zero measurable results\n\nWhat if you could skip the trial-and-error and get the exact proven system ready to plug & play?\n\nWe engineered our solution specifically for people who want results, not extra busywork.\n\n✨ Limited spots open for this month's cohort.`,
      defaultHashtags: ['#LimitedAvailability', '#SpecialOffer', '#ResultsDriven', '#SolutionsThatWork', '#WorkSmarter'],
    },
    {
      styleTag: 'The Value Drop & Offer',
      hookTemplate: (topic) => `Here's what happens when you finally fix your strategy around ${topic.toLowerCase()}:`,
      bodyTemplate: (topic) =>
        `Before: 10+ hours lost per week, inconsistent results, and constant second-guessing.\nAfter: Streamlined systems, predictable growth, and more freedom to focus on what you love.\n\nWe packaged the exact templates, checklists, and workflows that made this possible into one turnkey kit.\n\nReady to transform your workflow this quarter?`,
      defaultHashtags: ['#TransformYourLife', '#ProductivityTools', '#AgencyResults', '#ExclusiveAccess', '#UpgradeToday'],
    },
    {
      styleTag: 'The Urgency Alert',
      hookTemplate: (topic) => `Only 48 hours left to lock in our complete toolkit for ${topic.toLowerCase()}. ⏳`,
      bodyTemplate: (topic) =>
        `If you've been waiting on the fence, this is your sign.\n\nInside, you'll unlock:\n✅ Instant access to our full library of proprietary frameworks\n✅ Step-by-step video walkthroughs\n✅ Lifetime updates & community support\n\nOnce the timer hits zero, the introductory pricing is gone for good.`,
      defaultHashtags: ['#FlashSale', '#EarlyBird', '#Countdown', '#DontMissOut', '#LastChance'],
    },
  ],
  aesthetic: [
    {
      styleTag: 'The Quiet Moment',
      hookTemplate: (topic) => `gentle mornings, quiet spaces, and ${topic.toLowerCase()} . ☕ ☁️`,
      bodyTemplate: (topic) =>
        `sometimes the greatest progress happens when we slow down enough to hear our own thoughts.\n\nfinding peace in the process.\nreleasing the need to rush.\ntrusting the timing of what you're cultivating.\n\nmay your day be gentle on your heart.`,
      defaultHashtags: ['#AestheticVibes', '#SoftLiving', '#CalmEnergy', '#WarmAesthetics', '#QuietMoments'],
    },
    {
      styleTag: 'The Visual Poem',
      hookTemplate: (topic) => `a visual diary of ${topic.toLowerCase()} — notes from this chapter. 🕊️`,
      bodyTemplate: (topic) =>
        `golden light spilling through the blinds.\na warm cup between both hands.\nthe quiet satisfaction of making something with intention.\n\nhere's to the subtle, unnoticed miracles tucked inside ordinary days.`,
      defaultHashtags: ['#VisualDiary', '#MoodyGrams', '#ArtOfSlowLiving', '#ChasingLight', '#PoeticSoul'],
    },
    {
      styleTag: 'The Minimalist Note',
      hookTemplate: (topic) => `less noise. more ${topic.toLowerCase()}. 🌿`,
      bodyTemplate: (topic) =>
        `clearing space for what truly matters.\n\nclarity over clutter.\ndepth over speed.\npeace over performative busywork.`,
      defaultHashtags: ['#MinimalistLiving', '#Simplicity', '#CleanAesthetic', '#MindfulLiving', '#DeepWork'],
    },
  ],
  storytelling: [
    {
      styleTag: 'The Turning Point',
      hookTemplate: (topic) => `3 years ago, I made a mistake with ${topic.toLowerCase()} that almost cost me everything.`,
      bodyTemplate: (topic) =>
        `I still remember the sinking feeling in my stomach when looking at the numbers.\n\nI was exhausted, burned out, and secretly convincing myself that maybe I just wasn't cut out for this.\n\nThen, one evening, a mentor asked me a question that stopped me dead in my tracks:\n"Are you working hard on the right things, or just working hard so you don't feel guilty?"\n\nThat conversation changed everything about how I approach ${topic.toLowerCase()}.\n\nHere's what I wish someone had told me back then...`,
      defaultHashtags: ['#FounderStory', '#VulnerablePost', '#LifeLessons', '#LessonsLearned', '#PersonalGrowth'],
    },
    {
      styleTag: 'The Uncomfortable Conversation',
      hookTemplate: (topic) => `I never talk publicly about ${topic.toLowerCase()}, but today felt like the right time.`,
      bodyTemplate: (topic) =>
        `We spend so much time curating wins that we forget the power of admitting when things are messy.\n\nThe truth?\nThe path hasn't been a straight upward line. It was filled with false starts, late-night doubts, and moments where I wanted to throw in the towel.\n\nIf you're in the thick of that season right now: keep breathing. The chapters you don't want to read out loud are usually the ones that build your strength.`,
      defaultHashtags: ['#RealStories', '#Storyteller', '#BehindTheScenes', '#AuthenticJourney', '#KeepGoing'],
    },
    {
      styleTag: 'The Transformation Arc',
      hookTemplate: (topic) => `From completely lost to finally understanding ${topic.toLowerCase()} — here's the honest timeline:`,
      bodyTemplate: (topic) =>
        `Year 1: Confusion, imposter syndrome, imitating other people.\nYear 2: Finding my own voice, making expensive mistakes, learning what NOT to do.\nYear 3: Consistency, simplicity, and trusting the compounding effect.\n\nSuccess isn't an overnight explosion; it's a hundred quiet decisions when nobody is clapping.`,
      defaultHashtags: ['#TransformationTuesday', '#JourneyToSuccess', '#Timeline', '#Milestones', '#Storytime'],
    },
  ],
};

const NICHE_HASHTAGS: Record<NicheId, string[]> = {
  fitness: ['#FitnessMotivation', '#WorkoutRoutine', '#HealthyHabits', '#FitFamLife', '#WellnessJourney', '#GymTok', '#StrengthTraining'],
  food: ['#Foodiegram', '#RecipeInspo', '#CafeCulture', '#DeliciousEats', '#HomeCooking', '#FoodPhotography', '#CoffeeAddict'],
  fashion: ['#OOTDInspo', '#StyleTips', '#AestheticFashion', '#CapsuleWardrobe', '#OutfitOfTheDay', '#FashionGrind', '#StreetwearStyle'],
  travel: ['#TravelDiaries', '#WanderlustLife', '#HiddenGems', '#TravelCommunity', '#ExploreMore', '#PassportReady', '#BucketListTravel'],
  tech: ['#TechTips', '#SaaSLife', '#ProductivityTools', '#DeveloperCommunity', '#BuildInPublic', '#AutomationHacks', '#TechFounder'],
  realestate: ['#RealEstateTips', '#DreamHomeGoals', '#InteriorInspo', '#HomeDecorLovers', '#PropertyInvesting', '#RealtorLife', '#HouseHunting'],
  ecommerce: ['#SmallBusinessLove', '#BrandStory', '#ProductLaunch', '#ShopLocal', '#EcommerceTips', '#PackagingGoals', '#BehindTheBrand'],
  creator: ['#CreatorEconomy', '#ContentCreatorTips', '#InstagramGrowth', '#ReelsStrategy', '#SocialMediaMarketing', '#PersonalBranding', '#GrowYourAudience'],
  photography: ['#PhotographyTips', '#GoldenHourMagic', '#BehindTheLens', '#PortraitPerfection', '#CameraGear', '#VisualArt', '#PhotoHacks'],
  coaching: ['#CoachingLife', '#MindsetShift', '#HighPerformanceHabits', '#ExecutiveCoaching', '#MentorshipMatters', '#PersonalDevelopment', '#GoalCrusher'],
  business: ['#BusinessStrategy', '#EntrepreneurMindset', '#AgencyGrowth', '#FinanceTips', '#StartupLife', '#RevenueGrowth', '#SmartScaling'],
};

export function generateCaptions(params: {
  nicheId: NicheId;
  toneId: ToneId;
  topic?: string;
  ctaId?: string;
  includeEmojis?: boolean;
  platform?: PlatformId;
}): GeneratedCaption[] {
  const { nicheId, toneId, topic, ctaId = 'save', includeEmojis = true, platform = 'instagram' } = params;
  const niche = NICHES.find((n) => n.id === nicheId) || NICHES[0];
  const cleanTopic = (topic && topic.trim().length > 0) ? topic.trim() : niche.defaultTopic;
  const variants = TEMPLATE_MATRIX[toneId] || TEMPLATE_MATRIX.witty;
  const selectedCta = CTA_OPTIONS.find((c) => c.id === ctaId)?.text || '';
  const nicheTags = NICHE_HASHTAGS[nicheId] || [];

  return variants.map((variant, index) => {
    let rawHook = variant.hookTemplate(cleanTopic, niche.name);
    let rawBody = variant.bodyTemplate(cleanTopic, niche.name);
    let rawCta = selectedCta;

    if (!includeEmojis) {
      // Clean emojis if disabled
      const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu;
      rawHook = rawHook.replace(emojiRegex, '').trim();
      rawBody = rawBody.replace(emojiRegex, '').trim();
      rawCta = rawCta.replace(emojiRegex, '').trim();
    }

    // Platform-specific formatting adjustments
    let combinedTags: string[] = [];
    if (platform === 'linkedin') {
      combinedTags = [...variant.defaultHashtags.slice(0, 2), ...nicheTags.slice(0, 2)];
    } else if (platform === 'threads') {
      combinedTags = nicheTags.slice(0, 2);
    } else {
      combinedTags = Array.from(new Set([...variant.defaultHashtags, ...nicheTags.slice(0, 4)]));
    }

    const ctaSection = rawCta ? `\n\n---\n${rawCta}` : '';
    const hashtagSection = combinedTags.length > 0 ? `\n\n.\n.\n.\n${combinedTags.join(' ')}` : '';

    const fullText = `${rawHook}\n\n${rawBody}${ctaSection}${hashtagSection}`.trim();
    const wordCount = fullText.split(/\s+/).filter(Boolean).length;

    return {
      id: `caption-${toneId}-${index}-${Date.now()}`,
      title: `${variant.styleTag}`,
      hook: rawHook,
      body: rawBody,
      cta: rawCta,
      hashtags: combinedTags,
      fullText,
      charCount: fullText.length,
      wordCount,
      styleTag: variant.styleTag,
    };
  });
}
