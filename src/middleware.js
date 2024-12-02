import { NextResponse } from "next/server"
import { applyRateLimit } from "@/lib/middleware/rateLimit"

export async function middleware(req) {
  try {
    await applyRateLimit(req)
  } catch (error) {
    return NextResponse.json(
      { error: "Too many requests from this IP, please try again later." },
      { status: 429 },
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*", // all API routes
}
