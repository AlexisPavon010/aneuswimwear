import { Box, Grid, Link, Text } from "@chakra-ui/react"
import Image from "next/image"

export const InstaFeed = () => {

  const data = [
    {
      id: 1,
      link: 'https://www.instagram.com/p/ChpdUkbMnfp/',
      photo: '/assets/300801037.jpg'
    },
    {
      id: 2,
      link: 'https://www.instagram.com/p/CcBEKPxrU72/',
      photo: '/assets/277923275.jpg'
    },
    {
      id: 3,
      link: 'https://www.instagram.com/p/CTSq6sLrrtq/',
      photo: '/assets/241018401.jpg'
    },
    {
      id: 4,
      link: 'https://www.instagram.com/p/CbIifHKLEI3/',
      photo: '/assets/275859908.jpg'
    },
    {
      id: 5,
      link: 'https://www.instagram.com/p/CaAcWT-LtSX/',
      photo: '/assets/273936048.jpg'
    },

    {
      id: 6,
      link: 'https://www.instagram.com/p/CZrsfyZrJPR/',
      photo: '/assets/273462228.jpg'
    },
    {
      id: 7,
      link: 'https://www.instagram.com/p/CWll35PrChy/',
      photo: '/assets/259036688.jpg'
    },
    {
      id: 8,
      link: 'https://www.instagram.com/p/CV5pl9VrDpm/',
      photo: '/assets/253775605.jpg'
    },
    {
      id: 9,
      link: 'https://www.instagram.com/p/CVjHYzoLKsy/',
      photo: '/assets/248995115.jpg'
    },
    {
      id: 10,
      link: 'https://www.instagram.com/p/CVTMNl4rq7m/',
      photo: '/assets/247411966.jpg'
    },
  ]

  return (
    <Box as='section'>
      <Box
        p='36px 30px'
      >
        <Text
          fontSize='24px'
          textAlign='center'
          m='20px 0 60px 0'
        >
          {`follow us `}
          <a href='https://www.instagram.com/aneuswimwear/' target='_blank' rel="noreferrer">
            @aneuswimwear
          </a>
        </Text>
        <Box>
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap='8px'
            rowGap='8px'
          >
            {data.map(({ link, photo, id }) => (
              <Link
                target='_blank'
                rel="noreferrer"
                href={link}
                h='100%'
                key={id}
              >
                <Image objectFit="cover" alt="insta-feed" src={photo} height={1000} width={1000} />
              </Link>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
