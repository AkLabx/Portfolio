import { Search, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({ searchQuery, setSearchQuery }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-[var(--color-border)] px-6 md:px-12 py-4 flex items-center justify-between"
    >
      <div className="text-xl font-bold tracking-tighter">
        AK<span className="text-[var(--color-muted-foreground)]">LABX</span>
      </div>

      <div className="flex items-center bg-[var(--color-muted)] rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-[var(--color-border)] w-40 md:w-64 focus-within:w-48 md:focus-within:w-80 transition-all duration-300">
        <Search className="w-3 h-3 md:w-4 md:h-4 text-[var(--color-muted-foreground)] mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none outline-none text-xs md:text-sm w-full text-white placeholder:text-[var(--color-muted-foreground)]"
        />
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/AkLabx" target="_blank" rel="noreferrer" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-[var(--color-muted-foreground)] hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}
