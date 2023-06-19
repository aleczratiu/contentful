'use client';
import { gql, useQuery } from '@apollo/client';

const Query = gql`
  query ($slug: String!) {
    landingPageCollection(where: { slug: $slug }) {
      items {
        slug
        pageContentCollection {
          items {
            ... on Duplex {
              title
              containerLayout
              headline {
                json
              }
            }
            ... on HeroClasic {
              title
              description {
                json
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await useQuery(Query, { variables: { slug: params.slug } });

  console.log('params.slug', params.slug, '\n\n\n');

  console.log('result', data, '\n\n\n');
}
