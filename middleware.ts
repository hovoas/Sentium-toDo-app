import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import Constants from '@/lib/constants';
import type { NextRequest } from 'next/server';
import type { Database } from '@/lib/schema';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);

  if (!session) {
    return res;
  } else {
    return NextResponse.redirect(Constants.SITE_URL);
  }
}
export const config = {
  matcher: '/auth/:path*',
};
