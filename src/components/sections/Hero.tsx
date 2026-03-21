'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-brand-teal/5">
      <HeroBackground />
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <HeroCopy />
        <HeroDesc />
        <HeroButton />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <Image
        src="https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/profileTopSec_img01.jpg"
        alt="てんつくマン メインビジュアル"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}

function HeroCopy() {
  return (
    <motion.h1 
      className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      動けば変わる、<br className="md:hidden" />
      <span className="text-brand-orange-dark">きっかけ</span>を届ける。
    </motion.h1>
  );
}

function HeroDesc() {
  return (
    <motion.p 
      className="text-lg md:text-2xl mb-12 font-medium text-foreground/80 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      お笑い芸人から路上詩人、映画監督、社会活動家へ。<br />
      笑いと行動で人と社会をつなぎます。
    </motion.p>
  );
}

function HeroButton() {
  return (
    <motion.a 
      href="#projects"
      className="bg-brand-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-pink/90 transition-colors shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      プロジェクトを見る
    </motion.a>
  );
}
