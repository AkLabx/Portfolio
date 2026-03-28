import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-muted)] px-3 py-1 text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
          Crafting digital <br className="hidden md:block" />
          <span className="text-[var(--color-muted-foreground)]">experiences that matter.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mb-10 leading-relaxed">
          I'm a full-stack developer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-sm font-medium transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent px-8 py-4 text-sm font-medium transition-colors hover:bg-[var(--color-muted)]"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]"
      >
        <span className="uppercase tracking-widest text-xs font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
