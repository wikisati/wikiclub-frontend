import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-200 px-4 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-yellow-400">WikiClub SATI</h2>
          <p className="mt-2 text-sm">
            Promoting open knowledge and free education at Samrat Ashok Technological Institute,
            Vidisha. A student-driven community powered by Wikimedia values.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/events" className="hover:text-yellow-400">Events</Link></li>
            <li><Link href="/dashboard" className="hover:text-yellow-400">Dashboard</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Connect</h3>
          <ul className="text-sm space-y-1">
            <li>Email: wikiclubsati@gmail.com</li>
            <li><Link href="https://meta.wikimedia.org/" target="_blank" className="hover:text-yellow-400">Wikimedia Meta</Link></li>
            <li><Link href="/meet" className="hover:text-yellow-400">Join Meeting</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} WikiClub SATI. Built with love and open source.
      </div>
    </footer>
  );
}
