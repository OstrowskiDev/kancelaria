export function errorHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
      console.error("Global API error handler:", error)
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 },
      )
    }
  }
}
