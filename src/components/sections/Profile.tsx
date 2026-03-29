'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Profile() {
  return (
    <section id="profile" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <ImageSection />
        <TextSection />
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <motion.div
      className="w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-brand-orange-light/20 z-10 mix-blend-overlay" />
      <img
        src="https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/profileTopSec_img01.jpg"
        alt="きっかけ番長てんつくマン"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

function TextSection() {
  return (
    <motion.div
      className="w-full md:w-1/2 flex flex-col items-start gap-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-sm font-bold tracking-widest text-brand-teal uppercase">Tentsukuman</h2>
      <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
        きっかけ番長
        <br />
        てんつくマンとは？
      </h3>
      <p className="text-foreground/80 leading-relaxed text-lg">
        元祖路上詩人としてこれまでに約15万人以上の方たちにインスピレーションで言葉を届けてきた。お笑い芸人から転身し、『動けば変わる』を合い言葉に「行動することの大切さ」を伝える講演や、社会活動家として幅広い分野で活動。
      </p>
      <Link
        href="/profile"
        className="inline-flex items-center gap-2 mt-4 text-brand-orange-dark font-bold hover:gap-4 transition-all"
      >
        プロフィールを見る <span aria-hidden="true">&rarr;</span>
      </Link>
    </motion.div>
  );
}
