import { groq } from "next-sanity"
import { sanityClient } from "../sanity"

const query = groq`
*[_type == "banner"]{
  images[]{
      ...asset->{url}
    },
  title,
  subtitle,
}
`;

export const getBanner = async () => {
  const pageInfo = await sanityClient.fetch(query)
  return JSON.parse(JSON.stringify(pageInfo[0]))
}
