import { clerkMiddleware, createRouteMatcher ,} from "@clerk/nextjs/server";


const isPublicRoute  = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, request) => {
    if (isPublicRoute(request)) {
      await auth.protect()
    }
  })
  
  export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }
// import { NextRequest, NextResponse } from 'next/server'

// export async function middleware(request: NextRequest) {
//   console.log('Middleware running.....')

//   //   return NextResponse.next()
// }

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ['/((?!api|auth|_next/static|_next/image|favicon.ico).*)'],
// }