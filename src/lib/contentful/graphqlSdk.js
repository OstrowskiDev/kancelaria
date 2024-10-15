const allDataQuery = `
query {
  homeIntroductionCollection(limit: 1) {
    items {
      title
      content
    }
  }
  homeServicesListCollection(limit: 1) {
    items {
      title
      servicesCollection(limit: 12) {
        items {
					... on Service {
            title
            description
          }
        }
      }
    }
  }
  homeTeamCollection(limit: 1) {
    items {
      title
      content
    }
  }
  membersListCollection(limit: 2) {
    items {
      title
      membersCollection {
        items {
          ... on Member {
            name
            title
            description
            image 
          }
        }      
      }
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
        "Cache-Control": "max-age=60", // Cache for 60 seconds or change to "no-store" for development that needs super fast updates
      },
      body: JSON.stringify({ query }),
      next: { tags: [] },
    },
  )
  const data = await response.json()
  // Log the response for debugging
  // console.log("GraphQL Response:", data)
  return data
}

export async function fetchContentfulData(preview = false) {
  const response = await fetchGraphQL(allDataQuery, preview)
  if (!response.data) {
    throw new Error("Failed to fetch content")
  }
  return response.data
}
