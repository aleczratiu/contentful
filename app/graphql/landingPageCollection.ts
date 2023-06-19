import { gql } from '@apollo/client';

export default gql`
  query landingPageCollection($slug: String!) {
    landingPageCollection(where: { slug: $slug }) {
      items {
        slug
        pageContentCollection(limit: 5) {
          items {
            ... on Duplex {
              theme {
                theme
                padding
              }
              title
              containerLayout
              headline {
                json
              }
              image {
                url
              }
            }
            ... on HeroClasic {
              title
              unicase
              theme {
                theme
                padding
              }
              description {
                json
              }
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;
