import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <FooterNav />
        <SocialLinks />
        <p className="text-xs text-center opacity-70">©2026 Tentsukuman. – All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterNav() {
  return (
    <nav className="flex gap-4 md:gap-8 flex-wrap justify-center text-sm font-medium">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-brand-orange-light transition-colors"
        >
          {link.label}
        </Link>
      ))}
      <Link href="/policy" className="hover:text-brand-orange-light transition-colors">
        プライバシーポリシー
      </Link>
    </nav>
  );
}

function SocialLinks() {
  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/tentsukumansan/', icon: 'f' },
    { name: 'X', href: 'https://x.com/tentsukuman', icon: 'X' },
    { name: 'Instagram', href: 'https://www.instagram.com/tentsukuman/', icon: 'IG' },
    { name: 'YouTube', href: 'https://www.youtube.com/@tentsukuman', icon: 'YT' },
  ];
  return (
    <div className="flex gap-4">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-colors"
        >
          <span className="sr-only">{s.name}</span>
          <span className="font-bold text-sm">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}
