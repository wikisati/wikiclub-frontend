import { AuthOptions } from 'next-auth';
import WikimediaProvider from 'next-auth/providers/wikimedia';

function generateSecret() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const authOptions: AuthOptions = {
  providers: [
    WikimediaProvider({
      clientId: process.env.WIKIMEDIA_CLIENT_ID || process.env.NEXT_PUBLIC_WIKI_CLIENT_ID || '',
      clientSecret: process.env.WIKIMEDIA_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || generateSecret(),
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
    signOut: '/',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.username = profile.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user = { ...session.user, username: token.username };
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
}; 