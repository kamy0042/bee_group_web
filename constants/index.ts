export const LIMIT = 12;

export const SALON_NAME = 'Bee dandy メンズ専門美容室＆脱毛サロン'

export type NavItem = {
  href: string;
  en: string;
  ja: string;
  activePaths?: string[];
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/hairstyle', en: 'Hair Style', ja: 'ヘアスタイル' },
  { href: '/scalp-ink', en: 'Scalp Ink', ja: 'スカルプインク' },
  { href: '/waxing', en: 'Hair Removal', ja: 'メンズ脱毛' },
  { href: '/faq', en: 'FAQ', ja: 'よくある質問' },
  { href: '/blog', en: 'Blog & Voice', ja: 'ブログ・お客様の声', activePaths: ['/blog', '/articles', '/voice'] },
  { href: '/recruit', en: 'Recruit', ja: 'スタイリスト募集' },
];

export const isActivePath = (pathname: string | null, item: NavItem) =>
  !!pathname && (item.activePaths ?? [item.href]).some((path) => pathname === path || pathname.startsWith(`${path}/`));

export const STYLEBOOK_URL = 'https://www.adjustbook.com/doc/us/11750/bk/17160';

export const GOOGLE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '東京都港区新橋5丁目8-3 代市ビル'
)}`;

export const INSTAGRAM_URL = 'https://www.instagram.com/beedandy_official/';
export const FACEBOOK_URL = 'https://www.facebook.com/Beedandy.01/';
