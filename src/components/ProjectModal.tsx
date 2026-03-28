import { motion } from "motion/react";
import { X, ExternalLink, Github, Share2, Check } from "lucide-react";
import { useState, useEffect } from "react";

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleShare = () => {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-grow">
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-[var(--color-muted)]">
            <img 
              src={project.preview_url || `https://picsum.photos/seed/${project.title.replace(/\s+/g, '')}/1200/600`} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent opacity-90" />
          </div>

          <div className="p-6 md:p-10 -mt-20 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-sm font-mono tracking-wider uppercase text-[var(--color-accent)] mb-2 block">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h2>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-muted)] hover:bg-[var(--color-border)] text-white text-sm font-medium transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                  {copied ? "Copied!" : "Share"}
                </button>
                {project.source_url && (
                  <a 
                    href={project.source_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-muted)] hover:bg-[var(--color-border)] text-white text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                )}
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed">
                {project.description}
              </p>
              {/* Extended description could go here if available in data */}
              <p className="text-[var(--color-muted-foreground)] leading-relaxed mt-4">
                This project was built to solve specific challenges within its domain, focusing on performance, accessibility, and a seamless user experience. The architecture leverages modern web technologies to ensure scalability and maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
