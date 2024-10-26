import { revalidateTag } from "next/cache"

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
					... on HomeService {
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
            email
            phone
          }
        }      
      }
    }
  }
  servicesListCollection(limit: 1) {
    items {
      title
      servicesCollection(limit: 12) {
        items {
          ... on Service {
            title
            subtitle
            description
          }
        }
      }
    }
  }
  articlesListCollection(limit: 1) {
    items {
      title
      articlesCollection(limit: 40) {
        items {
          ... on Article {
            title
            author
            content
          }
        }
      }
    }
  }
}
`
async function fetchGraphQL(query) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CDA_ACCESS_TOKEN}`,
        "Cache-Control": "no-store", // Cache for 60 seconds "max-age=60" or change to "no-store" for development that needs super fast updates
      },
      body: JSON.stringify({ query }),
      // Revalidate Next.js cache, 1 for dev, 3600 for prod if business client wants to rebuild page once per day, 60 if business client wants to rebuild page on each Contentful change
      next: { revalidate: 1 },
    },
  )
  const data = await response.json()
  // Log the response for debugging
  console.log("GraphQL Response:", data)
  console.log(
    data.data.servicesListCollection.items[0].servicesCollection.items,
  )
  return data
}

export async function fetchContentfulData() {
  const response = await fetchGraphQL(allDataQuery)
  if (!response.data) {
    throw new Error("Failed to fetch content")
  }
  return response.data
}
