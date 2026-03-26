import { getProjectList } from '@/lib/microcms';
import { ProjectsGrid } from './ProjectsGrid';

export async function Projects() {
  const data = await getProjectList({ limit: 4 });
  const projects = data.contents;

  return (
    <section id="projects" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
