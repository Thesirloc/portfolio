import React from 'react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-24 space-y-32">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)]">Scale</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--brand-accent)]">Velocity</span>.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mb-10 leading-relaxed">
          I am <strong className="text-[var(--text-base)]">Sushant Singh</strong>, a Senior Backend Engineer obsessed with building resilient, high-throughput microservices and data pipelines that drive real product impact.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-4 rounded-lg bg-[var(--brand-primary)] text-[var(--bg-base)] font-bold hover:opacity-90 transition-colors shadow-lg shadow-[var(--brand-primary)]/30">
            View My Work
          </a>
          <a href="#connect" className="px-8 py-4 rounded-lg border border-[var(--brand-secondary)] text-[var(--brand-secondary)] font-bold hover:bg-[var(--brand-secondary)]/10 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="h-px bg-[var(--bg-surface)] flex-grow mt-2"></div>
        </div>

        <div className="space-y-16">
          {/* Deloitte Case Study 1 */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 md:items-baseline gap-8">
              <div className="md:col-span-1 text-[var(--text-muted)] font-mono text-sm mb-2 md:mb-0">
                Jul 2023 - Present
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-[var(--text-base)]">Senior Backend Engineer <span className="text-[var(--brand-primary)]">@ Deloitte (Disruption Office)</span></h3>
                
                <div className="mt-6 space-y-8">
                  <div className="bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--bg-surface)] shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-[var(--brand-secondary)]">Case Study: 0-to-1 Microservices Platform</h4>
                    <p className="text-[var(--text-muted)] mb-4">
                      Legacy SAP/Salesforce systems were throttling operations. I architected and shipped a complete Node.js microservices platform on AWS in just 3 months. By decentralizing domain logic and implementing robust API gateways, we generated an estimated <strong>$400k in annual cost savings</strong> and drastically reduced operational latency.
                    </p>
                  </div>

                  <div className="bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--bg-surface)] shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-[var(--brand-secondary)]">Case Study: Distributed ETL at 300+ GB/hr</h4>
                    <p className="text-[var(--text-muted)] mb-4">
                      Data fragmentation across heterogeneous databases (SQL, NoSQL), external APIs, and flat files was leading to severe data loss. I designed distributed Python ETL pipelines processing 300+ GB/hr. Implementing automated reconciliation protocols across 3M+ records entirely eliminated data loss and provided teams with real-time, synchronized reporting.
                    </p>
                  </div>

                  <div className="bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--bg-surface)] shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-[var(--brand-secondary)]">Case Study: Solving the N+1 Bottleneck</h4>
                    <p className="text-[var(--text-muted)] mb-4">
                      An enterprise Licensing Module (React, Node.js, Express) serving 10+ brands was suffering from critical performance degradation due to N+1 querying. I executed a complex refactor involving strategic MySQL indexing and query optimization, paired with a zero-downtime OpenSearch cluster re-indexing, resulting in lightning-fast search capabilities and significantly stabilized backend execution.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["AWS", "Node.js", "Python", "Microservices", "Docker", "OpenSearch", "MySQL", "React"].map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border border-[var(--brand-primary)]/20">{tech}</span>
                  ))}
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
          <div className="col-span-1 md:col-span-2 group relative bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-base)] p-1 rounded-2xl border border-[var(--brand-secondary)]/30 overflow-hidden hover:border-[var(--brand-primary)] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[var(--bg-surface)] h-full p-8 md:p-12 rounded-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-bold uppercase tracking-wider rounded-full">In Active Development</span>
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
          <div className="inline-block px-6 py-2 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 text-[var(--brand-primary)] font-medium text-sm">
            Available for new opportunities
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build<br/>something <span className="text-[var(--brand-secondary)]">great.</span></h2>
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
              
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--text-base)] hover:text-[var(--brand-primary)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-base)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--brand-primary)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <span className="font-medium text-lg">LinkedIn</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--text-base)] hover:text-[var(--brand-primary)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--bg-base)] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--brand-primary)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <span className="font-medium text-lg">GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--bg-surface)] shadow-lg relative group overflow-hidden">
            <h3 className="text-2xl font-bold mb-6">Send a Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1" htmlFor="contact">Email or Phone *</label>
                <input 
                  type="text" 
                  id="contact" 
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--bg-base)] focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-colors text-[var(--text-base)]"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-base)] border border-[var(--bg-base)] focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] outline-none transition-colors resize-none text-[var(--text-base)]"
                  placeholder="Hey Sushant, loved your work on the 0-to-1 microservices platform. Let's chat about a role at our startup!"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 rounded-lg bg-[var(--brand-primary)] text-[var(--bg-base)] font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2 relative z-10"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
            
            {/* Form Overlay (for frontend only state) */}
            <div className="absolute inset-0 bg-[var(--bg-surface)] flex items-center justify-center opacity-0 group-hover:opacity-[0.97] transition-opacity duration-300 z-20">
              <div className="text-center p-6 border border-[var(--brand-secondary)]/30 rounded-xl bg-[var(--bg-base)] shadow-2xl">
                <svg className="w-8 h-8 text-[var(--brand-secondary)] mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <div className="font-bold text-[var(--text-base)] mb-1">Frontend UI Demo</div>
                <div className="text-sm text-[var(--text-muted)]">Backend API integration via NodeMailer<br/>will be added in Phase 2.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
