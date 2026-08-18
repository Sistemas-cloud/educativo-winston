// 2026-08-18: Proxy Next.js — 308 de educativo-winston.vercel.app al dominio canónico
//             y X-Robots-Tag noindex en cualquier host *.vercel.app (previews).
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL, SITE_VERCEL_HOST } from "@/lib/seo/site-config";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (host === SITE_VERCEL_HOST) {
    const destination = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      SITE_URL
    );
    return NextResponse.redirect(destination, 308);
  }

  if (host.endsWith(".vercel.app")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image).*)"],
};
