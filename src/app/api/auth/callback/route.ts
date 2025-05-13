import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/login?error=no_code');
  }

  try {
    // Exchange code for token
    const tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/exchange/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Token exchange failed');
    }

    const data = await tokenResponse.json();
    
    // Set the token in an HTTP-only cookie
    const redirectResponse = NextResponse.redirect('/dashboard');
    redirectResponse.cookies.set('auth_token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return redirectResponse;
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect('/login?error=auth_failed');
  }
} 