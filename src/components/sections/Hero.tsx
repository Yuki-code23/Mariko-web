'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* 背景フル写真 */}
      <Image
        src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1600&auto=format&fit=crop"
        alt="マリコ☆バタフライ メインビジュアル"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 全体を少し暗くするオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* 左下: 名前バッジ＋キャッチコピー */}
      <div className="absolute bottom-16 left-0 flex flex-col gap-3 pl-8 md:pl-16">
        {/* 名前バッジ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/90 text-foreground font-bold font-heading text-base md:text-lg px-5 py-2 shadow-md">
            マリコ☆バタフライ
          </span>
        </motion.div>

        {/* キャッチコピー h1 */}
        <motion.h1
          className="text-white font-bold font-heading text-2xl md:text-4xl leading-snug drop-shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          明るく前向きになれる開運クリエイター
          <br />
          <span className="text-brand-pink drop-shadow-md">あなたに元気をお届けします</span>
        </motion.h1>
      </div>

      {/* 底部 ウォーターマーク文字 */}
      <motion.p
        className="absolute bottom-0 left-0 w-full text-center text-[clamp(3rem,10vw,9rem)] font-heading font-extrabold text-white/20 leading-none select-none tracking-widest pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        aria-hidden="true"
      >
        Mariko Butterfly
      </motion.p>
    </section>
  );
}
