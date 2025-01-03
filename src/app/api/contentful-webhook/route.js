import { revalidatePath } from "next/cache"

export async function POST(request) {
  try {
    revalidatePath("/")
    revalidatePath("/zespol")
    revalidatePath("/zakres-uslug")
    revalidatePath("/kontakt")
    revalidatePath("/publikacje")
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
