'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from './language-provider';
import { projects, ProjectType } from '@/lib/data';
import Image from 'next/image';

export function Projects() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<ProjectType | 'all'>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.type === filter);

  const filterItems: { id: ProjectType | 'all'; labelKey: string }[] = [
    { id: 'all', labelKey: 'proj_all' },
    { id: 'backend', labelKey: 'proj_backend' },
    { id: 'fullstack', labelKey: 'proj_fullstack' },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
            {t('proj_title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-blue-500/50 transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                    {project.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
