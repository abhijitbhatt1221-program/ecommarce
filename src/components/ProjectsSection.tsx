'use client';

import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Ethereal', category: 'Creative Development', year: '2023' },
  { id: 2, title: 'Nexus', category: 'WebGL Experience', year: '2023' },
  { id: 3, title: 'Aura', category: 'E-Commerce', year: '2024' },
  { id: 4, title: 'Quantum', category: 'Web Application', year: '2024' },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full bg-zinc-950 text-white px-6 py-32 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16"
        >
          Selected Works
        </motion.h2>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/10 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-500">
                  {project.title}
                </h3>
                <span className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <div className="relative z-10 mt-4 md:mt-0 text-gray-500 font-mono">
                {project.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
