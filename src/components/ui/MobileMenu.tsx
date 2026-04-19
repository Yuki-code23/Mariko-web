'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
    </div>
  );
}

function MenuButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle} className="relative z-50 p-2 text-foreground" aria-label="Toggle menu">
      <div className="w-6 flex flex-col gap-1.5">
        <span
          className={`h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span className={`h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <span
          className={`h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </div>
    </button>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur z-40 flex flex-col items-center justify-center">
      <nav className="flex flex-col gap-6 text-xl font-bold font-heading text-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="hover:text-brand-pink transition-colors"
          >
            {link.label}
          </Link>
        ))}

        {/* Ameba Blog (モバイル) */}
        <div className="flex justify-center gap-5 mt-2">
          <a
            href="https://ameblo.jp/batahurai88/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ameba Blog"
            className="w-12 h-12 rounded-full border border-[#2da342]/30 bg-[#2da342]/10 text-[#2da342] flex items-center justify-center hover:bg-[#2da342] hover:text-white transition-all duration-300"
          >
            <span className="font-bold font-serif italic text-2xl leading-none pt-0.5 pr-0.5">
              a
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
