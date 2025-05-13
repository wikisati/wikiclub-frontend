'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const events = [
  {
    title: 'Wikipedia Edit-a-thon',
    subtitle: 'April 28, 2025',
    description: 'Collaborative session to improve articles. No experience needed.',
  },
  {
    title: 'Photography Workshop',
    subtitle: 'May 5, 2025',
    description: 'Learn to contribute images to Wikimedia Commons.',
  },
  {
    title: 'Open Knowledge Seminar',
    subtitle: 'May 12, 2025',
    description: 'Why Wikipedia matters in education. A campus-wide dialogue.',
  },
];

export default function EventsSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Card title={e.title} subtitle={e.subtitle} description={e.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
