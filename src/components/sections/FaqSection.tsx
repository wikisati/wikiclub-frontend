'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need prior experience to join?',
    a: 'Not at all! We welcome beginners and train them through our workshops.',
  },
  {
    q: 'Is it free to participate?',
    a: 'Yes! All our events and contributions are open and free of charge.',
  },
  {
    q: 'What can I contribute?',
    a: 'From writing articles to uploading media, translating content to curating sources.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  return (
    <section className="bg-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-yellow-400">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-700 rounded-md">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-4 py-3 text-left"
              >
                <span className="text-slate-200">{faq.q}</span>
                <span className="text-yellow-400 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-slate-400 text-sm">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
