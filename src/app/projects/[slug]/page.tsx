import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { LeadForm } from "@/components/sections/LeadForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Plinth & Co Homes`,
    description: `${project.name} - ${project.category} project in ${project.location}. Featuring ${project.type.join(", ")} with ${project.carpetArea} carpet area.`,
    openGraph: {
      title: `${project.name} | Plinth & Co Homes`,
      description: `Explore ${project.name} in ${project.location}. ${project.status} luxury development.`,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
            <span className="label text-[var(--color-brand-gold)] mb-4 block">{project.status}</span>
            <h1 className="text-white font-serif text-5xl md:text-7xl mb-4">{project.name}</h1>
            <p className="text-xl text-[var(--color-brand-text-primary)] font-light">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-white font-serif text-3xl mb-6">Project Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[var(--color-brand-border)]">
                <div>
                  <div className="text-[var(--color-brand-text-muted)] text-sm mb-1">Category</div>
                  <div className="text-white font-medium">{project.category}</div>
                </div>
                <div>
                  <div className="text-[var(--color-brand-text-muted)] text-sm mb-1">Type</div>
                  <div className="text-white font-medium uppercase">{project.type.join(" | ")}</div>
                </div>
                <div>
                  <div className="text-[var(--color-brand-text-muted)] text-sm mb-1">Carpet Area</div>
                  <div className="text-white font-medium">{project.carpetArea}</div>
                </div>
                <div>
                  <div className="text-[var(--color-brand-text-muted)] text-sm mb-1">Status</div>
                  <div className="text-[var(--color-brand-gold)] font-medium">{project.status}</div>
                </div>
              </div>
            </section>

            {/* Placeholder for Gallery, Floor Plans, Amenities */}
            <section>
              <h2 className="text-white font-serif text-3xl mb-6">Gallery & Floor Plans</h2>
              <div className="aspect-video bg-[#111] border border-[var(--color-brand-border)] rounded-xl flex items-center justify-center text-[var(--color-brand-text-muted)]">
                Gallery & Floor Plans Component Placeholder
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
