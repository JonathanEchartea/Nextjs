import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt, deleteSession } from '@/lib/session';

export async function proxy(request: NextRequest) {
  const singinPage = '/signin/';
  const nextResponse = NextResponse.next( request );

  // if (request.nextUrl.pathname === singinPage) {
  //   deleteSession();
  //   return nextResponse;
  // }

//   const cookiesHandler = await cookies();
//   const session = cookiesHandler.get('session')?.value;
//   if (!session && request.nextUrl.pathname === singinPage) {
//     const url = request.nextUrl.clone();
//     url.pathname = singinPage;
//     return NextResponse.redirect(url);
//   }


// if (request.nextUrl.pathname === singinPage) {
//   const url = request.nextUrl.clone();
//   url.pathname = '/';
//   return NextResponse.redirect(url);
// }


  // const sessionValues = decrypt(session);
  // if (!sessionValues) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = singingPage;
  //   return NextResponse.redirect(url);
  // }

  return nextResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
