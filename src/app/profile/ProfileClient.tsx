'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HISTORY = [
  { year: '1968', event: '兵庫県にて心配症の母と嘘つきな父との間に元気に誕生' },
  { year: '1986', event: '島田紳助さんに弟子入りを頼むが断られる' },
  { year: '1988', event: '吉本興業専門学校に入学、お笑いコンビ”TEAM 0″（相方：月亭方正）結成' },
  { year: '1989', event: '吉本初！売れてないのに東京進出。これを機に東京で新人発掘プロジェクトが始まる' },
  { year: '1991', event: 'ABC漫才コンクール新人賞受賞' },
  { year: '1994', event: '「やりたいことが見つかった」と吉本興業円満退社、映画の世界へ' },
  { year: '1998', event: '自信をつけるため1ヵ月連続毎日フルマラソン（42.195キロ）に挑戦、完走' },
  { year: '1998', event: '映画の資金を集めるために路上に座りインスピレーションで言葉を書く路上詩人となり大ブレーク！路上詩人という職業を作る' },
  { year: '2001', event: '一年で6,000万円を集める自転車日本一周の旅に挑戦、2002年に11ヶ月で6,000万円集める' },
  { year: '2002', event: '名前を”てんつくマン”に改名' },
  { year: '2003', event: '7年半追い続けた夢、映画「107＋1～天国はつくるもの～」完成、上映開始' },
  { year: '2004', event: 'NGO「MAKE THE HEAVEN」設立、カンボジアの海外支援開始' },
  { year: '2005', event: '中国内モンゴル自治区での植林活動開始' },
  { year: '2007', event: '環境の意識を高める環境新聞「30秒で世界を変えちゃう豪快な号外」を3000万部発行' },
  { year: '2009', event: '映画「107＋1～天国はつくるもの～パート2」完成、上映開始' },
  { year: '2010', event: '日本の山のきらめき間伐活動開始' },
  { year: '2011', event: '東日本大震災後、緊急支援チーム「め組JAPAN」を結成し、被災地で支援活動を行う' },
  { year: '2012', event: '一人一人の可能性を引き出すセミナー「アホで良し学園」を開講' },
  { year: '2013', event: '女子プロゴルファーのメンタルコーチ開始、シード権獲得のサポートに成功！' },
  { year: '2014', event: 'フィリピンの台風被害支援活動開始' },
  { year: '2014', event: '鼻唄を歌いながら夢の花を咲かせるセミナー「HANAHANA LAND」開講' },
  { year: '2015', event: '人間の可能性は無限であることを伝えるために46歳からゴルフを始め、プロゴルファーになることを宣言！' },
  { year: '2016', event: 'プロゴルファーになるため海外に武者修行' },
  { year: '2018', event: 'フィジーに住んで天国の創り方を学ぶ' },
  { year: '2019', event: 'タイの四部のプロサッカーチームのオーナー就任' },
  { year: '2019', event: '不登校の子どもたちと沖縄から北海道から歩く【歩く学校】開催' },
  { year: '2020', event: 'バリ島で【海外に視野が広がる子どもたちだけで住む合宿】開催' },
  { year: '2021', event: '沖縄県南城市にて、農薬かけず声をかけてマンゴーを創るヨミガエラセ屋始動！' },
  { year: '2022', event: '子どもママも妊娠中も通える「おなかの中から保育園」を開園' },
  { year: '2024', event: '子どもも大人も自分の ”好き” ”やりたい” に寄り添う小中高大一環校「ミライワライ」を開校' },
  { year: '2024', event: '「令和6年能登半島地震」支援チーム 復興支援団体 「TEAM JAPAN」を立ち上げる' },
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
              <span className="text-sm tracking-widest text-brand-teal uppercase block mb-4">Profile</span>
              てんつくマン
            </h1>
            <p className="text-xl font-bold text-brand-orange-dark mb-6 leading-relaxed">
              元祖路上詩人／元お笑い芸人（相方：月亭方正）／ミライワライ創始者／おなかの中から保育園理事長
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              死んでから天国に行ってもしょうがない。生きてる今、住んでいる場所、生まれた国、そしてこの世界を天国にした方が面白い！
              この世を天国のように幸せな場所を作る男と言う意味で『てんつくマン』。
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
                src="https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/profileTopSec_img01.jpg" 
                alt="てんつくマン" 
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
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">彼が歩んできた道</h2>
          <p className="leading-loose opacity-90">
            吉本興業奇跡の円満退社後、路上詩人、映画「天国はつくるもの」総指揮監督、NPO法人MAKE THE HEAVEN理事長、高校野球、女子ゴルファーのメンタルコーチとなるが、突然、プロゴルファーになると言い出し海外に武者修行。フィジーで天国の創り方を学ぶ。<br/><br/>
            帰国後、不登校の子どもたちと沖縄から北海道を歩くツアーを開催。現在、沖縄で農薬かけずに声かけて作るマンゴー農家、妊娠中から通える保育園の理事長、個性と感性を伸ばすニュースクール【ミライワライ】の絶校長！<br/><br/>
            沖縄南城市に世界中が友達になれる天国のようなビレッジを運営中！また全国やオンライン上で希望しかない爆笑講演、人生が劇的に変わる問いかけワークショップ、いろんな存在と繋がりメッセージがもらえる自動書記ワークショップも開催している！<br/><br/>
            2026年春から沖縄から北海道までを飛び回る『新時代を創る』全国キャラバンを企んでいる。
          </p>
        </motion.div>

        {/* History Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-heading mb-16 text-center tracking-widest">経歴・沿革</h2>
          <div className="max-w-4xl mx-auto">
            {HISTORY.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 md:gap-8 group"
              >
                {/* Year */}
                <div className="w-16 md:w-24 shrink-0 text-right pt-0.5">
                  <span className="font-heading font-bold text-lg md:text-xl text-brand-orange-dark">
                    {item.year}
                  </span>
                  <span className="text-xs md:text-sm font-bold opacity-60 ml-0.5 text-brand-orange-dark">年</span>
                </div>
                
                {/* Line & Dot & Content */}
                <div className="relative pb-12 w-full border-l-2 border-brand-orange-light/30 pl-6 md:pl-8">
                  {/* Dot */}
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-brand-orange-light rounded-full border-4 border-background shadow-sm group-hover:scale-125 transition-transform duration-300" />
                  
                  {/* Event Text */}
                  <p className="text-lg font-medium leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
