const { exec } = require("child_process")

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("Contentful Webhook Triggered:")
    if (body) {
      console.log("Trying to run rebuild.sh...")

      const inDevelopment = process.env.NODE_ENV === "development"
      const command = inDevelopment
        ? `cmd /c "src\\lib\\shell_scripts\\tests.bat"`
        : `sh src/lib/shell_scripts/rebuild.sh`
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing script: ${error.message}`)
          return
        }

        if (stderr) {
          console.error(`Script stderr: ${stderr}`)
          return
        }

        console.log(`Script output: ${stdout}`)
      })
    }

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

// C:\VSC\project-32-kancelaria\kancelaria\src\lib\shell_scripts\rebuild.sh
