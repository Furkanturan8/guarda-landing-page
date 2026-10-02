import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  isLocale,
  localeFromAcceptLanguage,
  type Locale,
} from "@/lib/i18n";

/*
Turkish is served from the root and English from /en, but both render from
app/[locale]. Unprefixed paths are rewritten to /tr internally; /tr itself
redirects to the root so each page has exactly one public URL.

The first visit picks a language from Accept-Language. Visiting a prefixed URL
(which is what the TR/EN switcher links to) records that choice in the cookie,
so a Turkish pick on an English browser isn't bounced back to /en.

Named proxy.ts, not middleware.ts: the middleware convention is renamed in Next.js 16.
*/
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segment = pathname.split("/")[1];
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;

  if (segment === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return withLocaleCookie(NextResponse.redirect(url), DEFAULT_LOCALE, cookie);
  }

  if (isLocale(segment)) {
    return withLocaleCookie(NextResponse.next(), segment, cookie);
  }

  const locale = isLocale(cookie) ? cookie : localeFromAcceptLanguage(request.headers.get("accept-language"));
  if (locale !== DEFAULT_LOCALE) {
    const url = new URL(`/${locale}${pathname === "/" ? "" : pathname}${search}`, request.url);
    return NextResponse.redirect(url);
  }

  const response = NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}${search}`, request.url));
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

function withLocaleCookie(response: NextResponse, locale: Locale, current: string | undefined) {
  if (current !== locale) {
    response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: LOCALE_COOKIE_MAX_AGE, sameSite: "lax" });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
