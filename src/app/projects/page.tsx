import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "All Projects | Plinth & Co Homes",
  description: "Explore all luxury residential and commercial developments by Plinth & Co Homes in Vadodara — from ultra-luxury penthouses to premium commercial spaces.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="label text-[var(--color-brand-gold)] mb-4 block">Our Portfolio</span>
          <h1 className="text-white font-serif text-5xl">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
