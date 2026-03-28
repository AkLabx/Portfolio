export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter">
          AK<span className="text-[var(--color-muted-foreground)]">LABX</span>
        </div>
        
        <p className="text-[var(--color-muted-foreground)] text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} AkLabx. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">Twitter</a>
          <a href="https://github.com/AkLabx" target="_blank" rel="noreferrer" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
