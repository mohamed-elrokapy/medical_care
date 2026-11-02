export const SITE_NAME = 'Medical Care';
export const SITE_TAGLINE = 'Sample clinic website';

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/projects' },
] as const;

export const SERVICES = [
  'General consultation',
  'Preventive check-up',
  'Physical therapy',
  'Family health visit',
  'Mental wellbeing session',
] as const;

export const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
] as const;
