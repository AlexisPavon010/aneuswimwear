import { Box, Stack } from "@chakra-ui/react"
import { groq } from "next-sanity";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

import { sanityClient } from "../../sanity";

interface ColorSelectedProps {
  color: Colors;
  slug: string;
}

interface Colors {
  url: string
}

export const ColorSelected = () => {
  const router = useRouter()

  const { data = [], error } = useSWR(
    groq`
    *[_type == 'products']{
      color{
        ...asset -> {url}
      },
        "slug": slug.current
    }`,
    (query) => sanityClient.fetch(query));

  return (
    <Stack m='10px 0' spacing={2} direction='row' align='center'>
      {data?.map(({ color, slug }: ColorSelectedProps, i: number) => {
        if (!color || Object.keys(color).length === 0) return;
        return (
          <NextLink key={i} href={`/product/${slug}`}>
            <Box

              transition='all .3s ease'
              rounded='full'
              h='30px'
              w='30px'
              backgroundImage={color?.url}
              backgroundSize='30px'
              style={
                router.query.slug == slug ? {
                  transform: 'scale(0.85)',
                  boxShadow: '0 0 0 1px black',
                  border: '2px solid white'
                } : {}
              }
            />
          </NextLink>
        )
      }
      )}
    </Stack>
  )
}
