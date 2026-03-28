/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import projectsData from "./data/projects.json";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech_stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <div className="fixed inset-0 -z-20 bg-[var(--color-background)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <main className="flex-grow">
        <Hero />
        <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-[var(--color-muted-foreground)]">Works</span>
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-[var(--color-muted)] text-[var(--color-muted-foreground)] hover:text-white hover:bg-[var(--color-border)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
