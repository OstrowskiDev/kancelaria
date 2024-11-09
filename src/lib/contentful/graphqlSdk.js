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
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CDA_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    },
  )
  const data = await response.json()
  return data
}

export async function fetchContentfulData() {
  const response = await fetchGraphQL(allDataQuery)
  if (!response.data) {
    throw new Error("Failed to fetch content")
  }
  return response.data
}
