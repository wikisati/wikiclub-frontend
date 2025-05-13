'use client';

import { useStore } from '@/lib/store';
import Button from './Button';

export default function LoginButton() {
  const { isAuthenticated } = useStore();

  const handleLogin = () => {
    const redirectUri =
      process.env.NODE_ENV === 'production'
        ? 'https://wikiclub.in/api/auth/callback'
        : 'http://localhost:3000/api/auth/callback';

    const authUrl = `https://meta.wikimedia.org/w/rest.php/oauth2/authorize?response_type=code&client_id=1b6fb8608c661324acac04a79dbefb4a&redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    window.location.href = authUrl;
  };

  return !isAuthenticated ? (
    <Button onClick={handleLogin}>Login via Wikimedia</Button>
  ) : null;
}
