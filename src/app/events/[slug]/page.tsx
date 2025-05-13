import Wrapper from '@/components/layout/Wrapper';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const dummyEvents: Record<string, {
  title: string;
  date: string;
  description: string;
  content: string;
}> = {
  'wikipedia-editathon': {
    title: 'Wikipedia Edit-a-thon',
    date: 'April 28, 2025',
    description:
      'A collaborative editing session focused on improving regional content on Wikipedia. Open to beginners and advanced contributors.',
    content: `Join our student-led edit-a-thon to improve Wikipedia’s open knowledge. Bring your laptop and enthusiasm for learning!`,
  },
  'photo-workshop': {
    title: 'Photography Workshop',
    date: 'May 5, 2025',
    description:
      'A practical session to teach photography and Wikimedia Commons uploading for beginners.',
    content: `Learn how to capture, license, and contribute high-quality images to Wikimedia Commons through this hands-on workshop.`,
  },
};

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = dummyEvents[slug];

  if (!event) {
    notFound();
  }

  return (
    <Wrapper>
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-yellow-400">{event.title}</h1>
          <p className="text-sm text-slate-400">{event.date}</p>
          <p className="text-lg text-slate-300">{event.description}</p>
          <hr className="border-slate-600" />
          <p className="text-sm leading-relaxed text-slate-200">{event.content}</p>
        </div>
      </section>
    </Wrapper>
  );
}
