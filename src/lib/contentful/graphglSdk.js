const homeIntroductionQuery = `
  query {
    homeIntroductionCollection {
      items {
        title
        content
      }
    }
  }
`

async function fetchGraphQL(query, preview = false) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_CDA_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: [] },
    },
  )
  const data = await response.json()
  console.log("GraphQL Response:", data) // Log the response for debugging
  return data
}

export async function fetchHomeIntroduction(preview = false) {
  const response = await fetchGraphQL(homeIntroductionQuery, preview)
  return response.data.homeIntroductionCollection.items[0]
}
