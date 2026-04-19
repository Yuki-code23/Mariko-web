'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HISTORY = [
  { year: '1990', event: '誕生。幼少期から色彩豊かな世界に惹かれる' },
  { year: '2010', event: 'デザインコンペティションで最優秀賞を受賞' },
  { year: '2015', event: '初の個展「Butterfly Effect」を開催、大きな反響を呼ぶ' },
  { year: '2018', event: 'クリエイティブ・スタジオを設立' },
  { year: '2021', event: '「世界に美しい羽ばたきを」プロジェクトを始動' },
  { year: '2023', event: '全国ツアーを展開し、各地でワークショップを開催' },
  { year: '2026', event: '新たなデジタルアートプロジェクトを発表' },
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
              開運クリエイター／アーティスト／「世界に美しい羽ばたきを」代表
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              「日常に魔法をかける」をテーマに活動するクリエイター。独自の感性でファッションやアートの分野に新たな風を吹き込み、多くの人々にインスピレーションを与え続けている。
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
                src="https://images.unsplash.com/photo-1544605177-74be8dfc20f5?q=80&w=1200"
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
            幼少期からアートやファッションに親しみ、独自の感性を磨く。その後、デザイナーとして独立し、数々のアパレルブランドやアートプロジェクトを手掛ける。
            <br />
            <br />
            「世界に美しい羽ばたきを」というビジョンのもと、日常に魔法をかけるような体験を創り出し、多くの人々にインスピレーションを与え続けている。
            <br />
            <br />
            現在は全国各地で個展やワークショップを開催し、参加者一人ひとりの内なる美しさを引き出す活動に力を入れている。
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

                  {/* Event Text */}
                  <p className="text-lg font-medium leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
