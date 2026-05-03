import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    name: string;
    status: string;
    type: string[];
    carpetArea: string;
    location: string;
    thumbnail: string;
    startingPrice?: string;
    priceOnRequest?: boolean;
  };
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.13)] transition-all duration-400 hover:-translate-y-1 flex flex-col">
      
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
          priority={priority}
          className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
        />

        {/* Status Badge */}
        <span className="absolute top-3 left-3 z-10 bg-[var(--color-brand-gold)] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow">
          {project.status}
        </span>

        {/* Arrow button top-right */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
        >
          <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
        </Link>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Name + Config */}
        <div className="mb-3">
          <h3 className="font-serif text-[1.35rem] text-[#1a1a1a] leading-tight mb-1 group-hover:text-[var(--color-brand-gold)] transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-[11px] text-[#888] font-light tracking-wide">
            {project.type.join(" & ")}
          </p>
        </div>

        {/* Carpet Area Badge */}
        <div className="mb-3">
          <span className="inline-block border border-[#e0d9cc] text-[#555] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            {project.carpetArea.toLowerCase().includes("sba") || project.carpetArea.toLowerCase().includes("carpet")
              ? project.carpetArea
              : `Carpet – ${project.carpetArea}`}
          </span>
        </div>

        {/* Location */}
        <p className="text-[11px] font-semibold text-[var(--color-brand-gold)] uppercase tracking-wider leading-snug mb-4">
          {project.location}
        </p>

        {/* Divider */}
        <div className="border-t border-[#f0ece4] mt-auto pt-4 flex items-center justify-between gap-3">
          {/* Price */}
          <div>
            {project.priceOnRequest ? (
              <p className="text-[11px] font-semibold text-[#1a1a1a] uppercase tracking-widest">
                Price on Request
              </p>
            ) : (
              <>
                <p className="text-[9px] text-[#999] uppercase tracking-widest mb-0.5">Starting From</p>
                <p className="text-[15px] font-bold text-[#1a1a1a]">{project.startingPrice}</p>
              </>
            )}
          </div>

          {/* Enquire Button */}
          <Link
            href={`/projects/${project.slug}`}
            className="shrink-0 bg-[var(--color-brand-gold)] hover:bg-[#b8920a] text-black text-[10px] font-bold px-4 py-2.5 rounded-full uppercase tracking-widest transition-colors duration-200"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
