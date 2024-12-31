import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const publicDir = path.join(process.cwd(), "public")
  try {
    const files = fs.readdirSync(publicDir)
    return NextResponse.json({ files })
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to read public directory" },
      { status: 500 },
    )
  }
}
