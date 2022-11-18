import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest | any, ev: NextFetchEvent) {
  const session: any = await getToken({ req, secret: process.env.AUTH_JWT_SECRET })

  if (!session) {
    const { protocol, host, pathname } = req.nextUrl;
    return NextResponse.redirect(`${protocol}//${host}/auth/signin?p=${pathname}`);
  }

  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (session.user.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/dashboard/:path*']
} 