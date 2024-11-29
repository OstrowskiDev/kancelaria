import { NextResponse } from "next/server"
import { applyRateLimit } from "@/lib/rateLimit"

export async function middleware(req) {
  const res = NextResponse.next()

  // Manually setting IP address for local development
  let ip = req.headers.get("x-forwarded-for") || "127.0.0.1"
  if (process.env.NODE_ENV !== "development") {
    ip = req.headers.get("x-forwarded-for") || req.ip
  }

  // Add custom header for IP address
  req.headers.set("x-real-ip", ip)

  try {
    await applyRateLimit(req, res)
  } catch (error) {
    return NextResponse.json(
      { error: "Too many requests from this IP, please try again later." },
      { status: 429 },
    )
  }

  return res
}

export const config = {
  matcher: "/api/:path*", // Apply middleware to all API routes
}
