import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import ContactForm from '@/components/ContactForm';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Splash Page */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b border-[var(--bg-surface)]">
        <ParticleBackground />
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center text-center relative z-10 animate-fade-in-up">
          <div className="text-5xl md:text-7xl font-light tracking-tight mb-4 mt-[-10vh] text-[var(--text-base)]">
            Hello, I'm Sushant.
          </div>
          <div className="text-4xl md:text-6xl font-light text-[var(--text-muted)] mb-12">
            Building what <span className="font-semibold text-[var(--brand-primary)]">matters</span>, at scale.
          </div>
          <a href="#about" className="group relative flex items-center gap-3 px-8 py-4 rounded-lg bg-[var(--bg-surface)]/20 hover:bg-[var(--bg-surface)]/80 border border-[var(--brand-secondary)] backdrop-blur-sm transition-all text-[var(--brand-secondary)] text-2xl font-light overflow-hidden">
            View my work
            <svg className="w-6 h-6 transform group-hover:translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            <div className="absolute inset-0 rounded-lg border border-[var(--brand-secondary)] opacity-0 group-hover:opacity-100 shadow-[0_0_15px_var(--brand-secondary)] transition-opacity pointer-events-none"></div>
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32 relative z-10">

        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
          </div>

          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-3xl">
            Senior Backend Developer at <span className="text-[var(--text-base)] font-medium">Deloitte's Disruption Office</span>, turning complex business problems into resilient, production-grade platforms. I own the full lifecycle — from schema design to cloud orchestration.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-primary)]/30 transition-colors">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2">Distributed Systems</h3>
              <p className="text-sm text-[var(--text-muted)]">Microservices, event-driven architectures, and ETL pipelines processing big data.</p>
            </div>
            <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-secondary)]/30 transition-colors">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2">0-to-1 Products</h3>
              <p className="text-sm text-[var(--text-muted)]">Leading engineering pods to ship enterprise platforms — with or without AI — in aggressive timelines.</p>
            </div>
            <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-accent)]/30 transition-colors">
              <div className="text-2xl mb-3">🏗️</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2">Infrastructure</h3>
              <p className="text-sm text-[var(--text-muted)]">AWS, Docker, Kubernetes, CI/CD automation — systems that scale without breaking.</p>
            </div>
          </div>

          <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)]">
            <h3 className="text-lg font-bold mb-4 text-[var(--text-base)]">Core Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "AWS", "Docker", "Kubernetes", "Redis", "Node.js", "Python", "MySQL", "PostgreSQL", "React", "AI"
              ].map(skill => (
                <div key={skill} className="px-4 py-2 rounded-lg bg-[var(--bg-base)] border border-transparent hover:border-[var(--brand-primary)] transition-all group cursor-default shadow-sm hover:shadow-[0_0_8px_var(--brand-primary)]">
                  <span className="font-mono text-sm font-medium text-[var(--text-muted)] group-hover:text-[var(--text-base)] transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
          </div>

          <div className="space-y-16">
            <div className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:items-baseline gap-8">
                <div className="md:col-span-1 text-[var(--text-muted)] font-mono text-sm mb-2 md:mb-0">
                  2019 - 2023
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-[var(--text-base)]">Bachelor of Technology <span className="text-[var(--brand-primary)]">@ IIT Guwahati</span></h3>

                  <div className="mt-6 space-y-8">
                    <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-[var(--brand-secondary)]">Minor: Mathematics & Computing</h4>
                        <span className="px-3 py-1 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 text-xs font-bold rounded-full">Core Competency</span>
                      </div>
                      <p className="text-[var(--text-muted)] mb-4">
                        A rigorous foundation in algorithms, advanced data structures, and mathematical modeling. This coursework forms the backbone of my ability to design scalable distributed systems, optimize complex queries, and build efficient microservices architecture.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Algorithms", "Data Structures", "Math Modeling"].map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-[var(--brand-secondary)]">Major: Chemical Science and Technology</h4>
                        <span className="px-3 py-1 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20 text-xs font-bold rounded-full">Department Rank 2</span>
                      </div>
                      <p className="text-[var(--text-muted)] mb-4">
                        Graduated with top honors, demonstrating a strong capacity for analytical thinking and rigorous problem-solving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="scroll-mt-32">
          <div className="flex justify-center mb-16">
            <div className="inline-block px-6 py-2 rounded-lg border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 text-[var(--brand-primary)] font-medium text-sm">
              Available for new opportunities
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build<br />something <span className="text-[var(--brand-secondary)]">great.</span></h2>
              <p className="text-xl text-[var(--text-muted)] mb-8">
                I'm always open to discussing new ideas, system architecture, or just geeking out about tech. Feel free to drop a line.
              </p>

              <div className="space-y-8">
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:sunsinghny01@gmail.com" title="Email" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-[var(--text-base)] hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>

                  <a href="https://www.linkedin.com/in/sushant-i-singh/" target="_blank" rel="noreferrer" title="LinkedIn" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-[#0A66C2] hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>

                  <a href="https://github.com/Thesirloc" target="_blank" rel="noreferrer" title="GitHub" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-black dark:text-white hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>

                  <a href="https://x.com/thisSushant" target="_blank" rel="noreferrer" title="X (Twitter)" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-black dark:text-white hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                  </a>

                  <a href="https://discord.com/users/567744754293407765" target="_blank" rel="noreferrer" title="Discord" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-[#5865F2] hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5l-2 1l-2 -1l-1 -2.5c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" /><path d="M7 16.5c3.5 2 6.5 2 10 0" /></svg>
                  </a>

                  <a href="https://www.reddit.com/user/Imaginary-Spinach-59/" target="_blank" rel="noreferrer" title="Reddit" className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-surface)] flex items-center justify-center text-[#FF4500] hover:scale-110 hover:shadow-md transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" /><path d="M12 8l1 -5l6 1" /><circle cx="19" cy="4" r="1" /><circle cx="9" cy="13" r=".5" fill="currentColor" /><circle cx="15" cy="13" r=".5" fill="currentColor" /><path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

      </div>
    </main>
  );
}
