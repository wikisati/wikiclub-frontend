'use client';
import React from 'react';

export default function LoginPage() {
  const wikiAuthUrl = `${process.env.NEXT_PUBLIC_WIKI_AUTH_URL}?client_id=${process.env.NEXT_PUBLIC_WIKI_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_WIKI_REDIRECT_URI}&response_type=code`;

  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href={wikiAuthUrl}
        className="px-6 py-3 bg-black text-white rounded-xl text-lg font-semibold"
      >
        Login via Wikimedia
      </a>
    </div>
  );
}
