'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HISTORY: { year: string; items: string[] }[] = [
  {
    year: '2015',
    items: ['自己啓発をテーマに、学びのアウトプットとしてアメブロを開設'],
  },
  {
    year: '2023',
    items: ['ブログの内容を動画で届けようと、知識ゼロからYouTubeをスタート'],
  },
  {
    year: '2024',
    items: [
      'TikTok運用大全の出版パーティーに参加。師匠・とっしーさんと出会い、その塾に入門',
      '「幸せなら手をたたこう」の替え歌を投稿し、TikTokで70万再生の大バズりを達成',
      '4月よりバースデーソングのリクエストが殺到（200件超）。一時有料化・受付休止を経て、9月に再開し現在に至る',
    ],
  },
  {
    year: '2025',
    items: ['ライブ配信アプリ「マシェバラ」のオフラインイベントにアーティストとして出演・活躍中'],
  },
];

export function ProfileClient() {
  return (
    <div className="pt-24 pb-32 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-brand-orange-light/10 py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-sm tracking-widest text-brand-teal uppercase block mb-4">
                Profile
              </span>
              マリコ☆バタフライ
            </h1>
            <p className="text-xl font-bold text-brand-orange-dark mb-6 leading-relaxed">
              開運クリエイター／TikTokerYouTuber／配信者／アーティスト
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              笑顔と歌声で人々の日常に光を灯すクリエイター。明るく前向きな動画やブログを発信しています。即興の応援ソングやスピリチュアルな言葉で、見る人の心をそっと押し上げます。
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/profiledetail.jpg"
                alt="マリコ☆バタフライ"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg mx-auto mb-24"
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">彼女が歩んできた道</h2>
          <p className="leading-loose opacity-90">
            20代の頃に統合失調症を発症して、1年間は引きこもりになった経験がある。
            <br />
            <br />
            現在も通院中 生きるのが辛いと思うことがあるからこそ、同じように辛い思いをしている人に
            元気を届けたいと思い活動しています
          </p>
        </motion.div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-heading mb-16 text-center tracking-widest">
            経歴・沿革
          </h2>
          <div className="max-w-4xl mx-auto">
            {HISTORY.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 md:gap-8 group"
              >
                {/* Year */}
                <div className="w-16 md:w-24 shrink-0 text-right pt-0.5">
                  <span className="font-heading font-bold text-lg md:text-xl text-brand-orange-dark">
                    {item.year}
                  </span>
                  <span className="text-xs md:text-sm font-bold opacity-60 ml-0.5 text-brand-orange-dark">
                    年
                  </span>
                </div>

                {/* Line & Dot & Content */}
                <div className="relative pb-12 w-full border-l-2 border-brand-orange-light/30 pl-6 md:pl-8">
                  {/* Dot */}
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-brand-orange-light rounded-full border-4 border-background shadow-sm group-hover:scale-125 transition-transform duration-300" />

                  {/* Event Items */}
                  {item.items.length === 1 ? (
                    <p className="text-lg font-medium leading-relaxed">{item.items[0]}</p>
                  ) : (
                    <ul className="space-y-3">
                      {item.items.map((event, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-orange-dark/60" />
                          <p className="text-base md:text-lg font-medium leading-relaxed">
                            {event}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
