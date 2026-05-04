"use client";

import { useState, useEffect } from "react";

type ProjectData = {
  id: string;
  title: string;
  shortDesc: string;
  tech: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  metric: string;
};

const projects: ProjectData[] = [
  {
    id: "gpms",
    title: "GPMS (Goals & Performance Management System)",
    shortDesc: "Unified Talent platform serving 50,000+ users across 6 business units.",
    tech: ["Node.js", "AWS ECS", "MySQL", "Microservices"],
    situation: "Internal performance assessment was fragmented across legacy tools and manual spreadsheets.",
    task: "Build a unified Talent platform to handle KPI tracking and appraisals for the entire organization.",
    action: "Functioned as the effective backend lead of a 4-person squad, releasing the MVP in a record 3 months. Designed the complete schema, built 3 microservices from scratch on AWS, and scaled the system to handle 40K concurrent reviewers.",
    result: "Replaced legacy systems, retiring ~$400K/year in operational costs. Won the 'Best Individual Contributor' award out of 50+ engineers for seamlessly managing the 2-week go-live peak period solo.",
    metric: "$400K/yr Cost Retired"
  },
  {
    id: "etl",
    title: "Distributed ETL Pipeline",
    shortDesc: "Automated data ingestion processing 300+ GB/hr with zero data loss.",
    tech: ["Python", "AWS EventBridge", "Data Pipelines"],
    situation: "Data required for GPMS was heavily fragmented across 10+ heterogeneous systems, causing data silos and missing records.",
    task: "Automate the data ingestion pipeline to replace manual CSV uploads with a continuous, reliable sync mechanism capable of handling high loads (300+ GB/hr).",
    action: "Architected a modular Python ETL pipeline triggered by AWS EventBridge. Implemented a per-field source-of-truth precedence logic to elegantly handle source format changes without massive rewrites.",
    result: "Achieved zero data loss across 3M+ reconciled records, unlocking real-time, synchronized reporting for HR leadership.",
    metric: "3M+ Records Reconciled"
  },
  {
    id: "dff",
    title: "DataFlowFinder (DFF)",
    shortDesc: "Enterprise process capture tool with multi-tenant licensing & robust auth.",
    tech: ["Node.js", "AWS Cognito", "Docker", "CI/CD"],
    situation: "An enterprise process capture tool lacked critical enterprise features like multi-tenant licensing, robust auth, and automated deployment.",
    task: "Finalize the backend architecture, implement enterprise licensing, revamp the authentication flow, and establish development hygiene to prepare the product for enterprise sales.",
    action: "Designed a multi-tenant MySQL schema for the Enterprise Licensing Module serving 10+ brands. Executed a zero-downtime auth migration to AWS Cognito and built the team's first automated Docker-to-AWS CI/CD pipeline.",
    result: "Cut deployment time by 85% (saving ~6 hrs/week) and unlocked 3x daily release velocity. Hardened security by successfully triaging and fixing 100+ vulnerabilities.",
    metric: "85% Faster Deployments"
  }
];

export default function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="experience" className="scroll-mt-32 relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
      </div>

      {/* Intro Context */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[var(--text-base)] mb-2">
          Senior Backend Engineer <span className="text-[var(--brand-primary)]">@ Deloitte (Disruption Office)</span>
        </h3>
        <p className="text-[var(--text-muted)] font-mono text-sm">Jul 2023 - Present</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--bg-surface)] hover:border-[var(--brand-primary)]/50 hover:shadow-[0_0_20px_var(--brand-primary)]/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-xs font-bold rounded-bl-lg border-b border-l border-[var(--brand-primary)]/20">
              {project.metric}
            </div>
            <h4 className="font-bold text-xl mb-3 text-[var(--text-base)] group-hover:text-[var(--brand-primary)] transition-colors pr-12">
              {project.title}
            </h4>
            <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow">
              {project.shortDesc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded text-xs font-mono bg-[var(--bg-base)] text-[var(--text-muted)] border border-[var(--text-muted)]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center text-sm font-medium text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)] transition-colors">
              Explore Details
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in-up">
          <div 
            className="absolute inset-0 bg-[var(--bg-base)]/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-[var(--bg-surface)] border border-[var(--brand-primary)]/30 rounded-2xl shadow-2xl shadow-[var(--brand-primary)]/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[var(--bg-surface)]/95 backdrop-blur z-10 p-6 border-b border-[var(--bg-base)] flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-base)] mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 -mr-2 -mt-2 text-[var(--text-muted)] hover:text-[var(--text-base)] hover:bg-[var(--bg-base)] rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Body (STAR Format) */}
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-[var(--brand-secondary)] font-mono font-bold text-sm tracking-wider uppercase pt-1">
                  Situation
                </div>
                <div className="md:col-span-9 text-[var(--text-muted)] leading-relaxed">
                  {selectedProject.situation}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-[var(--brand-secondary)] font-mono font-bold text-sm tracking-wider uppercase pt-1">
                  Task
                </div>
                <div className="md:col-span-9 text-[var(--text-muted)] leading-relaxed">
                  {selectedProject.task}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-[var(--brand-secondary)] font-mono font-bold text-sm tracking-wider uppercase pt-1">
                  Action
                </div>
                <div className="md:col-span-9 text-[var(--text-muted)] leading-relaxed">
                  {selectedProject.action}
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-4 bg-[var(--brand-primary)]/5 p-4 rounded-xl border border-[var(--brand-primary)]/20">
                <div className="md:col-span-3 text-[var(--brand-primary)] font-mono font-bold text-sm tracking-wider uppercase pt-1">
                  Result
                </div>
                <div className="md:col-span-9 text-[var(--text-base)] font-medium leading-relaxed">
                  {selectedProject.result}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
