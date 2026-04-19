'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MobileMenu } from '@/components/ui/MobileMenu';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-white/75 backdrop-blur-md'}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      className="font-heading font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity"
    >
      <span className="text-brand-orange-light">マリコ☆</span>
      <span className="text-foreground">バタフライ</span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-6 items-center">
      {NAV_LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="font-heading font-medium text-sm hover:text-brand-pink transition-colors"
        >
          {l.label}
        </Link>
      ))}
      <div className="flex items-center gap-3">
        {/* Ameblo (アメブロ) */}
        <a
          href="https://ameblo.jp/batahurai88/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ameba Blog"
          className="w-9 h-9 rounded-full bg-[#2da342]/10 text-[#2da342] border border-[#2da342]/30 flex items-center justify-center hover:bg-[#2da342] hover:text-white transition-all duration-300"
          title="マリコ☆バタフライのアメブロを見る"
        >
          {/* Ameba風の『a』アイコン */}
          <span className="font-bold font-serif italic text-lg leading-none pt-0.5 pr-0.5">a</span>
        </a>
        <Link
          href="https://line.me/R/ti/p/@101qdmxr?ts=09212203&oat_content=url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-green text-background px-4 py-2 rounded-full font-bold text-sm hover:opacity-90"
        >
          LINE登録
        </Link>
      </div>
    </nav>
  );
}
