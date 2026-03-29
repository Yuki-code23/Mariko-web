'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/microcms';

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <>
        <HeaderArea />
        <p className="text-center opacity-70 py-10">現在プロジェクトはありません。</p>
      </>
    );
  }

  return (
    <>
      <HeaderArea />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </>
  );
}

function HeaderArea() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">プロジェクト</h2>
        <p className="opacity-80">マリコ☆バタフライが、現在手掛けているプロジェクト</p>
      </motion.div>
      <Link
        href="/projects"
        className="shrink-0 bg-background text-foreground px-6 py-3 rounded-full font-bold hover:bg-brand-orange-light hover:text-white transition-colors shadow-sm cursor-pointer"
      >
        一覧を見る
      </Link>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const imageUrl =
    project.img?.url ||
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-background text-foreground flex flex-col"
    >
      <div className="aspect-square overflow-hidden relative">
        <div
          className={`absolute inset-0 ${project.color || 'bg-brand-pink'} mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity z-10`}
        />
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow gap-3">
        <h3 className="font-bold font-heading text-lg leading-tight">{project.title}</h3>
        <p className="text-sm opacity-70 flex-grow">{project.desc}</p>
        <Link
          href={`/projects/${project.id}`}
          className={`mt-4 inline-flex items-center text-sm font-bold ${project.colorText || 'text-brand-pink'} hover:opacity-70 transition-opacity cursor-pointer`}
        >
          詳しく見る &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
