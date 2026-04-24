import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import ContactForm from '@/components/ContactForm';

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
            <a href="#case-microservices" className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-primary)]/30 transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors">Distributed Systems</h3>
              <p className="text-sm text-[var(--text-muted)]">Microservices, event-driven architectures, and ETL pipelines processing big data.</p>
            </a>
            <a href="#case-etl" className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-secondary)]/30 transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2 group-hover:text-[var(--brand-secondary)] transition-colors">0-to-1 Products</h3>
              <p className="text-sm text-[var(--text-muted)]">Leading engineering pods to ship enterprise platforms — with or without AI — in aggressive timelines.</p>
            </a>
            <a href="#case-n1" className="bg-[var(--bg-surface)] p-6 rounded-lg border border-[var(--bg-surface)] hover:border-[var(--brand-accent)]/30 transition-all hover:-translate-y-1 cursor-pointer group">
              <div className="text-2xl mb-3">🏗️</div>
              <h3 className="font-bold text-[var(--text-base)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">Infrastructure</h3>
              <p className="text-sm text-[var(--text-muted)]">AWS, Docker, Kubernetes, CI/CD automation — systems that scale without breaking.</p>
            </a>
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
        <section id="experience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[var(--text-base)] mb-1">Senior Backend Engineer</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[var(--brand-primary)] font-semibold text-lg">Deloitte — Disruption Office</span>
              <span className="text-[var(--text-muted)] font-mono text-sm">Jul 2023 – Present</span>
            </div>
            <p className="text-[var(--text-muted)] max-w-3xl">
              Engineering lead across multiple high-stakes enterprise transformation programs. Responsible for end-to-end system design, cloud infrastructure, and shipping production-grade platforms under aggressive deadlines.
            </p>
          </div>

          {/* Timeline */}
          <div className="pl-6 timeline-line space-y-12">

            {/* Case Study 1: Microservices */}
            <div id="case-microservices" className="relative scroll-mt-32 animate-fade-in-up">
              <div className="timeline-dot" style={{borderColor: 'var(--brand-primary)'}}></div>
              <div className="case-study-card bg-[var(--bg-surface)] rounded-lg border border-[var(--bg-surface)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--brand-primary)]/10 to-transparent p-6 md:p-8 border-b border-[var(--bg-base)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[var(--brand-primary)]/15 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">Case Study</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">3 months</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[var(--text-base)]">0-to-1 Microservices Platform</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Replacing legacy enterprise systems with a modern, cloud-native architecture</p>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Challenge */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">The Challenge</h5>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      The organization's operations were tightly coupled to legacy SAP and Salesforce monoliths. Cross-system data flows relied on fragile point-to-point integrations, causing cascading failures during peak load. Teams were spending 60% of engineering hours on maintenance instead of feature development, and the licensing overhead was bleeding $400k+ annually.
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">Technical Approach</h5>
                    <ul className="space-y-2 text-[var(--text-muted)]">
                      <li className="flex gap-2"><span className="text-[var(--brand-primary)] mt-1 shrink-0">▸</span>Decomposed the monolith into 8 bounded-context microservices using domain-driven design principles</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-primary)] mt-1 shrink-0">▸</span>Built a centralized API Gateway with rate limiting, JWT authentication, and request routing</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-primary)] mt-1 shrink-0">▸</span>Implemented event-driven communication via message queues to decouple service dependencies</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-primary)] mt-1 shrink-0">▸</span>Containerized all services with Docker and orchestrated deployments on AWS ECS with auto-scaling groups</li>
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-3">Impact & Results</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-primary)]">$400K</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Annual savings</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-primary)]">3 mo</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Delivery timeline</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-primary)]">8</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Microservices shipped</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-primary)]">60%</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Less maintenance</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-[var(--bg-base)]">
                    <div className="flex flex-wrap gap-2">
                      {["AWS ECS", "Node.js", "Docker", "API Gateway", "Microservices", "DDD"].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: ETL */}
            <div id="case-etl" className="relative scroll-mt-32 animate-fade-in-up delay-100">
              <div className="timeline-dot" style={{borderColor: 'var(--brand-secondary)'}}></div>
              <div className="case-study-card bg-[var(--bg-surface)] rounded-lg border border-[var(--bg-surface)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--brand-secondary)]/10 to-transparent p-6 md:p-8 border-b border-[var(--bg-base)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[var(--brand-secondary)]/15 text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/20">Case Study</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">Ongoing</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[var(--text-base)]">Distributed ETL at 300+ GB/hr</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Zero-loss data pipelines across heterogeneous source systems</p>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Challenge */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">The Challenge</h5>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      Critical business data was fragmented across SQL databases, NoSQL stores, third-party APIs, and legacy flat-file exports. Manual reconciliation attempts were failing at scale — records were silently dropped during peak ingestion windows, leading to downstream reporting discrepancies affecting executive decision-making across 3 business units.
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-2">Technical Approach</h5>
                    <ul className="space-y-2 text-[var(--text-muted)]">
                      <li className="flex gap-2"><span className="text-[var(--brand-secondary)] mt-1 shrink-0">▸</span>Designed a distributed Python ETL framework with pluggable connectors for SQL, NoSQL, REST APIs, and SFTP sources</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-secondary)] mt-1 shrink-0">▸</span>Implemented checkpointing and idempotent write patterns to guarantee exactly-once delivery semantics</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-secondary)] mt-1 shrink-0">▸</span>Built an automated reconciliation engine that validates record counts, checksums, and schema integrity after each batch</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-secondary)] mt-1 shrink-0">▸</span>Deployed on serverless infrastructure (AWS Lambda + Step Functions) to achieve elastic scaling without idle cost</li>
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-secondary)] mb-3">Impact & Results</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-secondary)]">300+</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">GB/hr throughput</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-secondary)]">0</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Records lost</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-secondary)]">3M+</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Records reconciled</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-secondary)]">3</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Business units served</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-[var(--bg-base)]">
                    <div className="flex flex-wrap gap-2">
                      {["Python", "AWS Lambda", "Step Functions", "Docker", "PostgreSQL", "Serverless"].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] border border-[var(--brand-secondary)]/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: N+1 */}
            <div id="case-n1" className="relative scroll-mt-32 animate-fade-in-up delay-200">
              <div className="timeline-dot" style={{borderColor: 'var(--brand-accent)'}}></div>
              <div className="case-study-card bg-[var(--bg-surface)] rounded-lg border border-[var(--bg-surface)] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--brand-accent)]/10 to-transparent p-6 md:p-8 border-b border-[var(--bg-base)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20">Case Study</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">10+ brands</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[var(--text-base)]">Solving the N+1 Bottleneck</h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">Performance rescue of a critical multi-brand licensing platform</p>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Challenge */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-accent)] mb-2">The Challenge</h5>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      An enterprise Licensing Module built with React and Node.js was serving 10+ brands but had reached a critical performance cliff. API response times had degraded to 8-12 seconds due to classic N+1 query patterns in the ORM layer. The OpenSearch cluster was returning stale results after a failed migration, and the team had deprioritized the growing technical debt for months.
                    </p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-accent)] mb-2">Technical Approach</h5>
                    <ul className="space-y-2 text-[var(--text-muted)]">
                      <li className="flex gap-2"><span className="text-[var(--brand-accent)] mt-1 shrink-0">▸</span>Profiled all critical API paths using query analysis tooling to identify and map 47 distinct N+1 patterns</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-accent)] mt-1 shrink-0">▸</span>Implemented strategic MySQL composite indexes and rewrote hot-path queries into batch-loaded joins</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-accent)] mt-1 shrink-0">▸</span>Executed a zero-downtime OpenSearch cluster re-index using blue-green alias rotation</li>
                      <li className="flex gap-2"><span className="text-[var(--brand-accent)] mt-1 shrink-0">▸</span>Added Redis caching layer for high-frequency read patterns and implemented cache invalidation via pub/sub</li>
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-accent)] mb-3">Impact & Results</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-accent)]">95%</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Faster response</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-accent)]">47</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">N+1s eliminated</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-accent)]">0</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Downtime minutes</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[var(--bg-base)]">
                        <div className="text-2xl font-bold text-[var(--brand-accent)]">10+</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">Brands stabilized</div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-[var(--bg-base)]">
                    <div className="flex flex-wrap gap-2">
                      {["OpenSearch", "MySQL", "Redis", "React", "Node.js", "Express"].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] border border-[var(--brand-accent)]/20">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Placeholder Project */}
            <div className="col-span-1 md:col-span-2 group relative bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-base)] p-1 rounded-lg border border-[var(--brand-secondary)]/30 overflow-hidden hover:border-[var(--brand-primary)] transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[var(--bg-surface)] h-full p-8 md:p-12 rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider rounded-lg">In Active Development</span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-[var(--text-base)]">Distributed Event-Streaming Engine</h3>
                  </div>
                  <a href="#" className="text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
                <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
                  Currently designing an end-to-end distributed event processing architecture capable of ingesting and transforming millions of real-time events. This project demonstrates deep technical depth in handling concurrency, fault tolerance, and message queuing at massive scale.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <strong className="block text-[var(--text-base)] mb-1">Architecture Highlights:</strong>
                    <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                      <li>Horizontal scaling via Docker/Kubernetes</li>
                      <li>Zero-data loss dead-letter queues</li>
                      <li>Low-latency consensus and processing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-[var(--bg-base)] text-[var(--text-muted)] font-mono text-xs rounded-md border border-[var(--text-muted)]/20">Rust</span>
                  <span className="px-3 py-1 bg-[var(--bg-base)] text-[var(--text-muted)] font-mono text-xs rounded-md border border-[var(--text-muted)]/20">Kafka</span>
                  <span className="px-3 py-1 bg-[var(--bg-base)] text-[var(--text-muted)] font-mono text-xs rounded-md border border-[var(--text-muted)]/20">Redis</span>
                  <span className="px-3 py-1 bg-[var(--bg-base)] text-[var(--text-muted)] font-mono text-xs rounded-md border border-[var(--text-muted)]/20">PostgreSQL</span>
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
                <strong className="text-[var(--text-base)]">I read every single message.</strong> Whether you're recruiting for a high-velocity startup, looking for a technical co-founder, or just want to chat about system architecture—drop a line.
              </p>

              <div className="space-y-6">
                <a href="mailto:sunsinghny01@gmail.com" className="flex items-center gap-4 text-[var(--text-base)] hover:text-[var(--brand-primary)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-base)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--brand-primary)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span className="font-medium text-lg">sunsinghny01@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/sushant-i-singh/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--text-base)] hover:text-[var(--brand-primary)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-base)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--brand-primary)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>

                <a href="https://github.com/Thesirloc" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--text-base)] hover:text-[var(--brand-primary)] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-base)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--brand-primary)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <span className="font-medium text-lg">GitHub</span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

      </div>
    </main>
  );
}
