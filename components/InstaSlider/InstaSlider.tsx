import { Box, Link as ChakraLink, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

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

export const InstaSlider = () => {
  return (
    <Box p='40px 0'>
      <Text
        mb='20px'
        align='center'
        fontSize='20px'
      >
        As Seen On Insta
      </Text>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        style={{ padding: '10px 0' }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          540: {
            slidesPerView: 3,
          },
          720: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map(({ link, photo, id }) => (
          <SwiperSlide style={{ height: 'initial' }} key={id}>
            <ChakraLink
              target='_blank'
              rel="noreferrer"
              href={link}
              h='100%'
            >
              <Image objectFit="cover" alt="insta-feed" src={photo} height={1000} width={1000} />
            </ChakraLink>
          </SwiperSlide>
        ))}
      </Swiper >
    </Box>
  )
}
