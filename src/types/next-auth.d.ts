import 'next-auth';

declare module 'next-auth' {
  interface User {
    username?: string;
  }

  interface Session {
    user: User;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username?: string;
    accessToken?: string;
  }
} 