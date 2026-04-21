'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function OshiIntro() {
  return (
    <section id="oshi" className="py-24 bg-brand-pink/5 text-foreground overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-pink/8 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* セクションタイトル */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-widest text-brand-pink uppercase mb-2">
            My Favorite Artist
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight">推しの紹介</h2>
        </motion.div>

        {/* メインコンテンツ: 左画像 / 右テキスト */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* ── 左: 画像エリア ── */}
          <motion.div
            className="w-full md:w-5/12 shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              {/* 21Selfの画像 */}
              <img
                src="/images/21self.jpg"
                alt="21Self（ツーワンセルフ）"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* オーバーレイ: ピンクのグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/40 via-transparent to-transparent" />
              {/* アーティスト名バッジ */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-pink font-bold font-heading text-xl px-5 py-2 rounded-2xl shadow-lg">
                  21Self
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── 右: テキストエリア ── */}
          <motion.div
            className="w-full md:w-7/12 flex flex-col gap-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* アーティスト名 */}
            <div>
              <p className="text-sm font-bold tracking-widest text-brand-pink uppercase mb-1">
                21Self / ツーワンセルフ
              </p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold leading-snug">
                パワフルな歌声と
                <br />
                美しいハーモニー
              </h3>
            </div>

            {/* 推しエピソード */}
            <div className="flex flex-col gap-5">
              {/* 出会い */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5 shrink-0">🎸</span>
                <div>
                  <p className="font-bold text-brand-pink mb-1">出会い</p>
                  <p className="text-foreground/80 leading-relaxed">
                    横浜のストリートライブで初めて21Selfのパフォーマンスに出会い、その瞬間から虜になりました。
                  </p>
                </div>
              </div>

              {/* ユニット紹介 */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5 shrink-0">🎵</span>
                <div>
                  <p className="font-bold text-brand-pink mb-1">ユニットについて</p>
                  <p className="text-foreground/80 leading-relaxed">
                    ピアノボーカルとギターボーカルによる2人組。パワフルでありながら繊細な、唯一無二のハーモニーが魅力です。
                  </p>
                </div>
              </div>

              {/* 推しへの思い */}
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5 shrink-0">💖</span>
                <div>
                  <p className="font-bold text-brand-pink mb-1">推して11年・私への影響</p>
                  <p className="text-foreground/80 leading-relaxed">
                    推し始めて11年。21Selfのパフォーマンスに感動し、自分でもピアノとギターを購入しました。
                    音楽の楽しさを教えてくれた、人生に欠かせないアーティストです。
                  </p>
                </div>
              </div>
            </div>

            {/* 仕切り線 */}
            <div className="border-t border-brand-pink/20" />

            {/* 公式サイトリンク */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.215elf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-pink text-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-brand-pink/30"
              >
                <span>🎤</span>
                公式サイトを見る
              </Link>
              <Link
                href="https://lite.tiktok.com/t/ZSHEdxraf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-pink text-brand-pink font-bold px-8 py-3.5 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-200"
              >
                <span>▶</span>
                21Selfへの想い
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
