'use client';

import { motion } from 'framer-motion';

const feedbacks = [
  { name: 'Ananya', quote: 'Editing Wikipedia gave me purpose. I feel more confident in my writing.' },
  { name: 'Ravi', quote: 'The workshops helped me get into FOSS. WikiClub really opened my mind.' },
  { name: 'Zoya', quote: 'Collaborating on Wiki Commons felt like I’m part of something global.' },
];

export default function FeedbackSection() {
  return (
    <section className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl text-center font-bold text-yellow-400">Voices from the Club</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 p-5 rounded-md border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="italic text-slate-300 mb-3">“{f.quote}”</p>
              <p className="text-sm text-yellow-300 font-medium">— {f.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
