'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const { isAuthenticated, user } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 10 && nav) {
        nav.classList.add('shadow-md', 'bg-slate-900/95');
      } else if (nav) {
        nav.classList.remove('shadow-md', 'bg-slate-900/95');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full bg-slate-900 text-white backdrop-blur-sm transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-yellow-400">
          WikiClub SATI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-yellow-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {!isAuthenticated ? (
            <button
              onClick={() => signIn('wikimedia', { callbackUrl: '/dashboard' })}
              className="flex items-center gap-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-slate-900 transition-colors"
            >
              {!imageError ? (
                <Image
                  src="/images/wikimedia-logo.svg"
                  alt="Wikimedia"
                  width={20}
                  height={20}
                  onError={() => setImageError(true)}
                  className="w-5 h-5"
                />
              ) : (
                <span className="w-5 h-5 flex items-center justify-center text-yellow-400">W</span>
              )}
              Join with Wikimedia
            </button>
          ) : (
            <span className="text-yellow-400 text-sm font-medium">Hi, {user?.username}</span>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-yellow-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  signIn('wikimedia', { callbackUrl: '/dashboard' });
                }}
                className="flex items-center gap-2 px-4 py-2 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-slate-900 transition-colors w-full justify-center"
              >
                {!imageError ? (
                  <Image
                    src="/images/wikimedia-logo.svg"
                    alt="Wikimedia"
                    width={20}
                    height={20}
                    onError={() => setImageError(true)}
                    className="w-5 h-5"
                  />
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center text-yellow-400">W</span>
                )}
                Join with Wikimedia
              </button>
            ) : (
              <p className="text-yellow-400 text-sm mt-2">Hi, {user?.username}</p>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
