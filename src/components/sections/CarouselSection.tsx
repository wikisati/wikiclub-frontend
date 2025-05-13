'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { 
    src: '/images/group.jpg', 
    alt: 'Team', 
    caption: 'WikiClub Team Collaboration'
  },
  { 
    src: '/images/workshop.jpg', 
    alt: 'Workshop', 
    caption: 'Edit-a-thon Workshop at SATI'
  },
  { 
    src: '/images/seminar.jpg', 
    alt: 'Seminar', 
    caption: 'Open Knowledge Seminar'
  }
];

export default function CarouselSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-slate-900 py-16 text-white text-center px-4">
      <h2 className="text-3xl text-yellow-400 font-bold mb-10">Our Moments</h2>
      <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-xl border border-slate-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].src}
              alt={slides[index].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black/50 w-full text-yellow-200 py-2 text-sm">
              {slides[index].caption}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
