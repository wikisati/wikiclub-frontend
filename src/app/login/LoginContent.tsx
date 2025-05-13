'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { api } from '@/lib/api';

export default function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      handleAuthCallback(code);
    }
  }, [searchParams]);

  const handleAuthCallback = async (code: string) => {
    try {
      setIsLoading(true);
      const data = await api.auth.login(code);
      toast.success('Successfully logged in!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    const loginUrl = `https://meta.wikimedia.org/w/rest.php/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_WIKI_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_WIKI_REDIRECT_URI || '')}`;
    window.location.href = loginUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Login with Wikimedia</h1>
          <p className="mt-2 text-gray-400">Join WikiClub SATI to contribute to free knowledge</p>
        </div>
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Connecting...' : 'Login via Wikimedia'}
        </button>
      </div>
    </div>
  );
} 