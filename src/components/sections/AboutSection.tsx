'use client';

import { motion } from 'framer-motion';

const highlights = [
  'Wikipedia + FOSS training for students',
  'Photography, audio and content workshops',
  'Edit-a-thons and collaborative campaigns',
  'Open knowledge outreach on campus',
  'Partnering with global Wiki communities',
];

export default function AboutSection() {
  return (
    <section className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About WikiClub SATI
        </motion.h2>

        <motion.p
          className="text-center text-slate-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          WikiClub SATI is a student-led initiative promoting free knowledge at Samrat Ashok Technological Institute. We collaborate, edit, and empower.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((point, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 p-5 rounded-lg border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-yellow-300 font-medium text-sm">• {point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
