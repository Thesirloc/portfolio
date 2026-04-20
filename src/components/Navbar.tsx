import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[var(--bg-base)]/80 border-b border-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-[var(--text-base)]">
          <span className="text-[var(--brand-primary)]">&lt;</span>
          Sushant Singh
          <span className="text-[var(--brand-secondary)]"> /&gt;</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#experience" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Projects</a>
          <a href="#connect" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Connect</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
