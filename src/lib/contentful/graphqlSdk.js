import axios from "axios"

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
  try {
    const response = await axios.post(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_CDA_ACCESS_TOKEN}`,
        },
      },
    )
    return response.data.data
  } catch (error) {
    console.error("Error fetching GraphQL data:", error)
    throw new Error("Error fetching GraphQL data:")
  }
}

export async function fetchContentfulData() {
  const response = await fetchGraphQL(allDataQuery)
  return response
}
