import {NextResponse,type NextRequest} from "next/server";

/**
 * Make the requested locale available to the root server layout.
 * No redirects, geolocation, tracking, or language guessing.
 */
export function middleware(request:NextRequest){
 const pathname=request.nextUrl.pathname;
 const locale=pathname==="/en"||pathname.startsWith("/en/")?"en":"fr";
 const requestHeaders=new Headers(request.headers);
 requestHeaders.set("x-salu-locale",locale);
 return NextResponse.next({request:{headers:requestHeaders}});
}
export const config={
 matcher:["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
