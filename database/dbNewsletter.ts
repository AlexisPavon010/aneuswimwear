import { groq } from "next-sanity";
import { sanityClient } from "../sanity"

const query = groq`
*[_type == "newsletter"]{
  secondtitle,
 subtitle,
 title,
 image{
    ...asset -> {url}
 }
}
`;

export const getNewsletter = async () => {
  const pageInfo = await sanityClient.fetch(query)
  return JSON.parse(JSON.stringify(pageInfo[0]))
}
