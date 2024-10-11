import { createClient } from "contentful"
import dotenv from "dotenv"

dotenv.config()

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
})

export default client

// import client from "@/server/contentfulClient"
// const res = await client.getEntries({ content_type: 'service'})
