import { getProjectList } from '@/lib/microcms';
import { ProjectCard } from '@/components/sections/ProjectsGrid';
import Link from 'next/link';

export const metadata = {
  title: 'プロジェクト一覧 | きっかけ番長☆てんつくマン オフィシャルサイト',
  description: 'てんつくマンが現在手掛けているプロジェクトの一覧です。',
};

export default async function ProjectsPage() {
  const data = await getProjectList({ limit: 100 });
  const projects = data.contents;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">プロジェクト一覧</h1>
          <p className="opacity-80">てんつくマンが関わるすべての活動・プロジェクト</p>
        </header>

        {projects.length === 0 ? (
          <p className="text-center opacity-70 py-10">現在プロジェクトはありません。</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/#projects"
            className="inline-block border-2 border-background text-background rounded-full px-8 py-3 hover:bg-background hover:text-foreground transition-colors font-bold"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
