'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectType = { id: string; title: string; desc: string; img: string; color: string; colorText: string; };

const PROJECTS: ProjectType[] = [
  { id: 'p01', title: 'MIRAI WARAI COOOL VILLAGE', desc: '国境、言葉、世代、すべての壁を越えて友達になる場所へ', img: 'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/service_coool_village.jpg', color: 'bg-brand-pink', colorText: 'text-brand-pink' },
  { id: 'p02', title: 'NEW ERA VOYAGEツアー', desc: '希望を進化させる日本横断の旅', img: 'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2026/03/650656147_18537601456069805_2626661418232450334_n-300x300.jpg', color: 'bg-brand-teal', colorText: 'text-brand-teal' },
  { id: 'p03', title: 'おなかの中から保育園', desc: '妊娠中からでも通える保育園', img: 'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/service_onakanonakakara_hoikuen.jpg', color: 'bg-brand-orange-light', colorText: 'text-brand-orange-light' },
  { id: 'p04', title: 'ヨミガエラセ屋', desc: '農薬かけず声をかけてマンゴーを創る', img: 'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/service_yomigaeraseya.jpg', color: 'bg-brand-green', colorText: 'text-brand-green' },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <HeaderArea />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeaderArea() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">プロジェクト</h2>
        <p className="opacity-80">てんつくマンが、現在手掛けているプロジェクト</p>
      </motion.div>
      <Link href="#" onClick={(e) => { e.preventDefault(); alert('プロジェクト一覧ページは現在準備中です。'); }} className="shrink-0 bg-background text-foreground px-6 py-3 rounded-full font-bold hover:bg-brand-orange-light hover:text-white transition-colors">
        一覧を見る
      </Link>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-background text-foreground flex flex-col"
    >
      <div className="aspect-square overflow-hidden relative">
        <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity z-10`} />
        <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-6 flex flex-col flex-grow gap-3">
        <h3 className="font-bold font-heading text-lg">{project.title}</h3>
        <p className="text-sm opacity-70 flex-grow">{project.desc}</p>
        <Link href="#" onClick={(e) => { e.preventDefault(); alert('詳細ページは現在準備中です。'); }} className={`mt-4 inline-flex items-center text-sm font-bold ${project.colorText} hover:opacity-70 transition-opacity`}>
          詳しく見る &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
