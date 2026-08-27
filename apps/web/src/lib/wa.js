export const WA_NUMBER = '919408216171';
export const WA_DISPLAY = '+91 94082 16171';

export function wa(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Services', href: '#pricing' },
  { label: 'Included', href: '#included' },
  { label: 'Growth', href: '#growth' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
