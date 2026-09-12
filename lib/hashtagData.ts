export interface HashtagItem {
  tag: string;
  postsCount: string;
  volumeCategory: 'mega' | 'mid' | 'niche';
  difficulty: 'High' | 'Medium' | 'Low';
  relevanceScore: number;
}

export interface HashtagGroup {
  nicheKey: string;
  name: string;
  category: string;
  keywords: string[];
  mega: HashtagItem[];
  mid: HashtagItem[];
  niche: HashtagItem[];
}

export const HASHTAG_DATABASE: HashtagGroup[] = [
  {
    nicheKey: 'fitness',
    name: 'Fitness, Gym & Wellness',
    category: 'Health & Lifestyle',
    keywords: ['gym', 'workout', 'fitness', 'lifting', 'crossfit', 'healthy', 'protein', 'muscle', 'gains', 'pilates', 'yoga', 'cardio'],
    mega: [
      { tag: '#fitness', postsCount: '520M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 92 },
      { tag: '#gym', postsCount: '280M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 90 },
      { tag: '#workout', postsCount: '210M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 88 },
      { tag: '#fitfam', postsCount: '135M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 85 },
      { tag: '#bodybuilding', postsCount: '140M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 84 },
    ],
    mid: [
      { tag: '#gymmotivation', postsCount: '450K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 95 },
      { tag: '#legdayworkout', postsCount: '320K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 94 },
      { tag: '#fitnesstipsdaily', postsCount: '280K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 92 },
      { tag: '#strengthtrainingforwomen', postsCount: '190K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 91 },
      { tag: '#highproteindiet', postsCount: '260K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 89 },
      { tag: '#cleanbulking', postsCount: '175K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 88 },
    ],
    niche: [
      { tag: '#progressiveoverloadtraining', postsCount: '45K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#morninggymroutine', postsCount: '78K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 96 },
      { tag: '#hypertrophycoach', postsCount: '38K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#mindmuscleconnection', postsCount: '89K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 94 },
      { tag: '#homeworkoutform', postsCount: '52K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 92 },
      { tag: '#pilatesprinciples', postsCount: '34K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 90 },
    ],
  },
  {
    nicheKey: 'creator',
    name: 'Content Creator & Social Media',
    category: 'Marketing',
    keywords: ['creator', 'content', 'reels', 'algorithm', 'instagram', 'tiktok', 'social media', 'growth', 'personal brand', 'viral'],
    mega: [
      { tag: '#socialmediamarketing', postsCount: '34M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 95 },
      { tag: '#contentcreator', postsCount: '48M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 94 },
      { tag: '#digitalmarketing', postsCount: '31M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
      { tag: '#creatoreconomy', postsCount: '12M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 87 },
    ],
    mid: [
      { tag: '#reelsgrowthtips', postsCount: '380K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 97 },
      { tag: '#contentstrategytips', postsCount: '410K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 96 },
      { tag: '#instagramforbusiness', postsCount: '490K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 93 },
      { tag: '#socialmediagrowth', postsCount: '320K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 91 },
      { tag: '#shortformcontent', postsCount: '240K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 90 },
    ],
    niche: [
      { tag: '#videohooksthatwork', postsCount: '28K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 99 },
      { tag: '#captionideasforcreators', postsCount: '42K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#batchcontentcreation', postsCount: '65K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 97 },
      { tag: '#personalbrandingcoach', postsCount: '84K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#creatorsworkflow', postsCount: '19K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 93 },
      { tag: '#monetizeyouraudience', postsCount: '33K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 91 },
    ],
  },
  {
    nicheKey: 'food',
    name: 'Food, Cafe & Culinary',
    category: 'Lifestyle',
    keywords: ['food', 'coffee', 'cafe', 'recipe', 'baking', 'cooking', 'chef', 'brunch', 'matcha', 'dinner', 'dessert'],
    mega: [
      { tag: '#foodporn', postsCount: '310M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 90 },
      { tag: '#foodie', postsCount: '240M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 92 },
      { tag: '#instafood', postsCount: '235M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 88 },
      { tag: '#coffeelover', postsCount: '58M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
    ],
    mid: [
      { tag: '#easyweeknightmeals', postsCount: '420K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 96 },
      { tag: '#cafeculturevibes', postsCount: '310K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 94 },
      { tag: '#homecookingaesthetic', postsCount: '290K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 93 },
      { tag: '#matchalovercommunity', postsCount: '185K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 91 },
      { tag: '#quicklunchideas', postsCount: '370K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 90 },
    ],
    niche: [
      { tag: '#10minuterecipes', postsCount: '54K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#specialtycoffeeshop', postsCount: '82K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 96 },
      { tag: '#sourdoughbakingjourney', postsCount: '71K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 94 },
      { tag: '#aestheticplates', postsCount: '39K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 92 },
      { tag: '#cleaneatingprep', postsCount: '62K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 91 },
    ],
  },
  {
    nicheKey: 'fashion',
    name: 'Fashion, Beauty & Style',
    category: 'Aesthetic',
    keywords: ['fashion', 'ootd', 'style', 'outfit', 'beauty', 'skincare', 'thrift', 'makeup', 'streetwear', 'aesthetic'],
    mega: [
      { tag: '#fashion', postsCount: '1.1B', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 90 },
      { tag: '#ootd', postsCount: '430M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 94 },
      { tag: '#beauty', postsCount: '550M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
      { tag: '#streetstyle', postsCount: '110M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 91 },
    ],
    mid: [
      { tag: '#capsulewardrobestyle', postsCount: '390K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 97 },
      { tag: '#neutraloutfitinspo', postsCount: '440K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 95 },
      { tag: '#skincarethatworks', postsCount: '310K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 93 },
      { tag: '#vintagefashionlover', postsCount: '280K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 92 },
      { tag: '#everydayoutfitideas', postsCount: '480K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 94 },
    ],
    niche: [
      { tag: '#minimaliststyling', postsCount: '67K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#barrierrepairskincare', postsCount: '43K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 97 },
      { tag: '#colorpalettefashion', postsCount: '58K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#thrifthaulfinds', postsCount: '81K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 94 },
      { tag: '#sandwichdressingmethod', postsCount: '29K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 93 },
    ],
  },
  {
    nicheKey: 'travel',
    name: 'Travel & Adventure',
    category: 'Lifestyle',
    keywords: ['travel', 'wanderlust', 'vacation', 'flight', 'backpacking', 'mountains', 'beach', 'solotravel', 'itinerary'],
    mega: [
      { tag: '#travel', postsCount: '710M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 92 },
      { tag: '#wanderlust', postsCount: '150M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
      { tag: '#adventure', postsCount: '145M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 88 },
      { tag: '#travelphotography', postsCount: '210M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 91 },
    ],
    mid: [
      { tag: '#solotravelgirl', postsCount: '480K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 96 },
      { tag: '#hiddengemstravel', postsCount: '360K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 95 },
      { tag: '#budgettraveleurope', postsCount: '290K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 93 },
      { tag: '#travelitineraries', postsCount: '210K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 92 },
      { tag: '#cabinlifeaesthetic', postsCount: '180K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 90 },
    ],
    niche: [
      { tag: '#underrateddestinations', postsCount: '47K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#packlightcarryononly', postsCount: '38K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 96 },
      { tag: '#coastalvillagetown', postsCount: '52K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#trainstraveladventures', postsCount: '31K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 93 },
      { tag: '#scenicwalkroutes', postsCount: '64K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 91 },
    ],
  },
  {
    nicheKey: 'tech',
    name: 'Tech, SaaS & Productivity',
    category: 'Business',
    keywords: ['tech', 'saas', 'coding', 'productivity', 'software', 'developer', 'apps', 'ai', 'automation', 'startup'],
    mega: [
      { tag: '#technology', postsCount: '260M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 90 },
      { tag: '#programming', postsCount: '42M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 88 },
      { tag: '#productivity', postsCount: '24M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 93 },
      { tag: '#startup', postsCount: '33M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
    ],
    mid: [
      { tag: '#saasgrowthtips', postsCount: '290K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 97 },
      { tag: '#nocodedeveloper', postsCount: '340K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 95 },
      { tag: '#productivityhacksdaily', postsCount: '420K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 94 },
      { tag: '#buildinpublicsaas', postsCount: '190K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 92 },
      { tag: '#deskaesthetics', postsCount: '490K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 91 },
    ],
    niche: [
      { tag: '#workspacemaximalism', postsCount: '35K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#zapierautomations', postsCount: '48K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 96 },
      { tag: '#microconfcommunity', postsCount: '22K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#notiondashboardsetup', postsCount: '76K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 94 },
      { tag: '#devlifestylegear', postsCount: '51K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 92 },
    ],
  },
  {
    nicheKey: 'business',
    name: 'Business, Finance & Entrepreneurship',
    category: 'Finance',
    keywords: ['business', 'money', 'investing', 'entrepreneur', 'finance', 'agency', 'wealth', 'sales', 'mindset', 'sidehustle'],
    mega: [
      { tag: '#business', postsCount: '120M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 90 },
      { tag: '#entrepreneur', postsCount: '95M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 92 },
      { tag: '#investing', postsCount: '28M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 89 },
      { tag: '#personalfinance', postsCount: '15M', volumeCategory: 'mega', difficulty: 'High', relevanceScore: 91 },
    ],
    mid: [
      { tag: '#agencybusinessmodel', postsCount: '210K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 96 },
      { tag: '#sidehustleideas2026', postsCount: '370K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 95 },
      { tag: '#bootstrappedfounder', postsCount: '180K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 94 },
      { tag: '#clientacquisitionsystem', postsCount: '140K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 92 },
      { tag: '#compoundinterestmagic', postsCount: '260K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 90 },
    ],
    niche: [
      { tag: '#coldoutreachsecrets', postsCount: '43K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: '#agencyretentionrate', postsCount: '27K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 97 },
      { tag: '#indexfundstrategy', postsCount: '83K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
      { tag: '#solopreneursystems', postsCount: '62K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 94 },
      { tag: '#cashflowmanagementtips', postsCount: '39K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 91 },
    ],
  },
];

export function getHashtagsByQuery(query: string, nicheFilter?: string): {
  mega: HashtagItem[];
  mid: HashtagItem[];
  niche: HashtagItem[];
  matchedNicheName: string;
} {
  const cleanQ = query.trim().toLowerCase().replace(/^#/, '');

  let matchedGroup = HASHTAG_DATABASE.find((g) => g.nicheKey === nicheFilter);

  if (!matchedGroup && cleanQ) {
    matchedGroup = HASHTAG_DATABASE.find((g) =>
      g.keywords.some((k) => cleanQ.includes(k) || k.includes(cleanQ)) ||
      g.name.toLowerCase().includes(cleanQ)
    );
  }

  if (!matchedGroup) {
    matchedGroup = HASHTAG_DATABASE[1]; // default to Creator
  }

  // If there's a custom keyword, dynamically append smart synthetic tags for that keyword
  let extraTags: HashtagItem[] = [];
  if (cleanQ && cleanQ.length > 2) {
    const kw = cleanQ.replace(/\s+/g, '');
    extraTags = [
      { tag: `#${kw}life`, postsCount: '240K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 99 },
      { tag: `#${kw}tips`, postsCount: '82K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 98 },
      { tag: `#${kw}community`, postsCount: '310K', volumeCategory: 'mid', difficulty: 'Medium', relevanceScore: 97 },
      { tag: `#daily${kw}`, postsCount: '49K', volumeCategory: 'niche', difficulty: 'Low', relevanceScore: 95 },
    ];
  }

  const mega = [...matchedGroup.mega];
  const mid = [...extraTags.filter((t) => t.volumeCategory === 'mid'), ...matchedGroup.mid];
  const niche = [...extraTags.filter((t) => t.volumeCategory === 'niche'), ...matchedGroup.niche];

  return {
    mega: Array.from(new Map(mega.map((item) => [item.tag, item])).values()),
    mid: Array.from(new Map(mid.map((item) => [item.tag, item])).values()),
    niche: Array.from(new Map(niche.map((item) => [item.tag, item])).values()),
    matchedNicheName: matchedGroup.name,
  };
}
