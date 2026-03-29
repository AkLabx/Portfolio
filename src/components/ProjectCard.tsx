import { ExternalLink, Github, Star, Share2, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  preview_url: string;
  tech_stack: string[];
  live_url: string;
  source_url: string;
  is_featured: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: import("react").MouseEvent) => {
    e.stopPropagation();
    const url = project.live_url || project.source_url || window.location.href;
    if (navigator.share) {
      navigator.share({ title: project.title, url }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full bg-[var(--color-muted)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-muted-foreground)]/30 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {project.is_featured && (
        <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-yellow-400 p-1.5 rounded-full">
          <Star className="w-4 h-4 fill-yellow-400" />
        </div>
      )}
      
      <div className="relative aspect-video overflow-hidden bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-muted)] to-transparent z-10 opacity-60" />
        <img 
          src={project.preview_url || `https://picsum.photos/seed/${project.title.replace(/\s+/g, '')}/800/600`} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono tracking-wider uppercase text-[var(--color-accent)]">
            {project.category}
          </span>
          <div className="flex gap-3">
            <button 
              onClick={handleShare}
              className="text-[var(--color-muted-foreground)] hover:text-white transition-colors"
              aria-label="Share project"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            {project.source_url && (
              <a 
                href={project.source_url} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[var(--color-muted-foreground)] hover:text-white transition-colors"
                aria-label="Source code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live_url && (
              <a 
                href={project.live_url} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[var(--color-muted-foreground)] hover:text-white transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 tracking-tight line-clamp-1">{project.title}</h3>
        <p className="text-[var(--color-muted-foreground)] text-sm mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--color-border)]">
          {project.tech_stack.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
