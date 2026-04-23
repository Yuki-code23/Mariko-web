'use client';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <FooterNav />
        <SocialLinks />
        <p className="text-xs text-center opacity-70">
          ©2026 Mariko Butterfly. – All rights reserved.
        </p>
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

const btnBase =
  'w-11 h-11 rounded-full border border-background/30 bg-background/10 flex items-center justify-center transition-all duration-200 hover:scale-110';

function SocialLinks() {
  return (
    <div className="flex gap-4">
      {/* Ameba Blog */}
      <a
        href="https://ameblo.jp/batahurai88/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ameba Blog"
        className={`${btnBase} hover:bg-[#2da342] hover:border-[#2da342] hover:text-white`}
      >
        <span className="sr-only">Ameba Blog</span>
        <span className="font-bold font-serif italic text-xl leading-none pt-0.5 pr-0.5">a</span>
      </a>
      {/* X (Twitter) */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className={`${btnBase} hover:bg-black hover:border-black`}
      >
        <span className="sr-only">X (Twitter)</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Instagram (グラデーションはインラインスタイルで対応) */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`${btnBase} hover:border-[#ee2a7b]`}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background =
            'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = '';
        }}
      >
        <span className="sr-only">Instagram</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={`${btnBase} hover:bg-[#FF0000] hover:border-[#FF0000]`}
      >
        <span className="sr-only">YouTube</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
  );
}
