import { getProjectDetail } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const project = await getProjectDetail(id);
    return {
      title: `${project.title} | プロジェクト | マリコ☆バタフライ`,
      description: project.desc,
    };
  } catch {
    return {
      title: 'プロジェクト | マリコ☆バタフライ',
    };
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const project = await getProjectDetail(id);
    const imageUrl =
      project.img?.url ||
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

    return (
      <article className="min-h-screen pt-32 pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/projects"
              className="text-brand-teal hover:opacity-70 transition-opacity font-bold"
            >
              &larr; プロジェクト一覧へ戻る
            </Link>
          </div>

          <header className="mb-12">
            <span
              className={`inline-block px-4 py-1 mb-6 rounded-full text-sm font-bold bg-foreground/5`}
            >
              Project
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl opacity-80 mb-8 leading-relaxed">{project.desc}</p>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-foreground/10">
              <Image
                src={imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </header>

          {/* Rich Text Editor Content Output */}
          <div
            className="rich-text-content mx-auto leading-loose text-lg text-foreground/90 
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:border-b-2 [&>h2]:border-brand-teal [&>h2]:pb-2
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-4
            [&>p]:mb-6 [&>p]:leading-relaxed
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-brand-orange-light [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:opacity-80
            [&>img]:rounded-xl [&>img]:shadow-md [&>img]:my-8 [&>img]:w-full [&>img]:object-cover"
            dangerouslySetInnerHTML={{
              __html: project.content || '<p>詳細情報は現在準備中です。</p>',
            }}
          />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
