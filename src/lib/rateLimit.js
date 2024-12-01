import { RateLimiterMemory } from "rate-limiter-flexible"

// catch by IP address, max 10 requests per 10 minutes
const rateLimiterByIp = new RateLimiterMemory({
  points: 2, // 2 points for testing, later will set to 10
  duration: 10 * 60, // Per 10 minutes
})

//catch all, max 30 requests per minute
const rateLimiterByEndpoint = new RateLimiterMemory({
  points: 30,
  duration: 60,
})

export async function applyRateLimit(req) {
  try {
    let ip
    if (process.env.NODE_ENV === "development") {
      ip = "127.0.0.1"
    } else {
      ip = req.headers.get("x-forwarded-for") || req.ip
    }

    if (!ip) {
      throw new Error("IP address not found")
    }

    await rateLimiterByIp.consume(ip)
    await rateLimiterByEndpoint.consume(req.url)
  } catch (rejRes) {
    throw new Error("Too many requests")
  }
}
