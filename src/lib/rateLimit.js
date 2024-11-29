import { RateLimiterMemory } from "rate-limiter-flexible"

const rateLimiter = new RateLimiterMemory({
  points: 2, // 2 points for testing, later will set to 10
  duration: 15 * 60, // Per 15 minutes
})

export async function applyRateLimit(req) {
  console.log("Applying rate limit")
  try {
    const ip = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1"
    await rateLimiter.consume(ip)
  } catch (rejRes) {
    throw new Error("Too many requests")
  }
}
