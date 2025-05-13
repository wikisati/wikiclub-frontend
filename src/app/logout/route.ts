import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session) {
    // Clear the session cookie
    const response = NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
    response.cookies.delete('next-auth.session-token');
    return response;
  }
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
}
