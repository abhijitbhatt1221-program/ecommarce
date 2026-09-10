'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <footer className="relative w-full bg-black text-white px-6 py-32 z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6">
              Let's Talk
            </h2>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-4 text-xl md:text-3xl font-light hover:text-gray-300 transition-colors group"
            >
              hello@example.com
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 text-sm font-mono uppercase tracking-widest text-gray-400">
          <div className="flex flex-col gap-4">
            <span className="text-white mb-2">Socials</span>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white mb-2">Location</span>
            <p>Digital Nomad</p>
            <p>Earth</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Built with Next.js & React Three Fiber</p>
      </div>
    </footer>
  );
}
