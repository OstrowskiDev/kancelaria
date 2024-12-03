import { NextResponse } from "next/server"
import { applyRateLimit } from "@/lib/middleware/rateLimit"

export async function middleware(req) {
  try {
    await applyRateLimit(req)

    return NextResponse.next()
  } catch (error) {
    if (error.message === "Rate limit exceeded") {
      return NextResponse.json(
        {
          error:
            "Too many requests were send recently, please try again later.",
        },
        { status: 429 },
      )
    }

    console.error("Middleware Global Error Handler:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    )
  }
}

export const config = {
  matcher: "/api/:path*", // all API routes
}
