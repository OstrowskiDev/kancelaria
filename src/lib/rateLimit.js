import rateLimit from "express-rate-limit"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Enable standard rate limit headers (RateLimit-*) in the response
  legacyHeaders: false, // Disable legacy rate limit headers (X-RateLimit-*) in the response
})

export async function applyRateLimit(req, res) {
  console.log("Applying rate limit")
  await new Promise((resolve, reject) => {
    limiter(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      resolve(result)
    })
  })
}
