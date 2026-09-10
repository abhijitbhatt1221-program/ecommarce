'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white px-6 py-24 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12">
            The Vision
          </h2>
          <div className="space-y-8 text-xl md:text-3xl font-light leading-relaxed text-gray-300">
            <p>
              I build interactive digital experiences that bridge the gap between design and engineering.
              My focus is on creating immersive, high-performance web applications using modern technologies.
            </p>
            <p>
              With expertise in React, WebGL, and creative coding, I transform complex problems into
              elegant, user-centric solutions. Every pixel is purposeful; every animation is intentional.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
