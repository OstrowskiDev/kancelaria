export async function POST(request) {
  try {
    const body = await request.json()
    console.log("Contentful Webhook Triggered:", body)

    return new Response(JSON.stringify({ message: "Webhook received" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error("Error handling webhook:", error)

    return new Response(JSON.stringify({ message: "Error handling webhook" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
}
