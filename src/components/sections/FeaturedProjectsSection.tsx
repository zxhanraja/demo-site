"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CATEGORIES = ["All", "Residential", "Commercial", "Upcoming"];

export function FeaturedProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(project => {
    if (!project.featured) return false;
    if (activeTab === "All") return true;
    if (activeTab === "Upcoming") return project.status === "Upcoming";
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="pt-20 pb-32 bg-[#f8f6f1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="label text-[var(--color-brand-gold)] mb-4 block tracking-[0.25em] uppercase text-xs font-semibold">Our Collections</span>
            <h2 className="text-[#1a1a1a] font-serif">Finest Developments</h2>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 md:pb-0">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeTab === category
                    ? "bg-[var(--color-brand-gold)] text-black font-semibold shadow-md"
                    : "bg-white border border-[#d4c9b0] text-[#666] hover:border-[var(--color-brand-gold)] hover:text-[#1a1a1a] shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid / Horizontal Scroll */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeUpVariant}>
              <ProjectCard project={project} priority={index < 3} />
            </motion.div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-[var(--color-brand-text-muted)]">
              No projects found in this category.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
