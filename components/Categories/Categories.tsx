import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Link, Text } from "@chakra-ui/react"
import Image from "next/image";
import NextLink from 'next/link'

export const Categories = () => {
  return (
    <Box>
      <Text
        m='20px 0'
        fontSize='24px'
        textAlign='center'
        fontFamily='Tenor Sans'
      >
        Categories
      </Text>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Category image='/assets/58410920.jpg' name='ONE PIECES' />
        </SwiperSlide>
        <SwiperSlide>
          <Category image='/assets/136093379.jpg' name='TOPS' />
        </SwiperSlide>
        <SwiperSlide>
          <Category image='/assets/50728933.jpg' name='BOTTOMS' />
        </SwiperSlide>
      </Swiper>
    </Box >
  )
}

const Category = ({ image, name }: { image: string, name: string }) => {
  return (
    <Link
      as={NextLink}
      href={`/collections/${name.toLowerCase()}`}
      position='relative'
      overflow='hidden'
    >
      <Box
        transition='all 0.8s ease'
        transform='scale(1.03)'
        _hover={{
          transform: 'scale(1.07)',
          _after: {
            opacity: '0.5'
          }
        }}
        _after={{
          transition: 'all 0.8s ease',
          position: 'absolute',
          top: '0',
          display: 'block',
          width: '100%',
          height: '100%',
          background: '#000',
          opacity: ' 0.3',
          content: `""`
        }}
        _before={{
          fontSize: '42px',
          textAlign: 'center',
          fontFamily: 'Tenor Sans',
          color: 'white',
          zIndex: 4,
          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          w: '100%',
          content: `${JSON.stringify(name)}`,
        }}
      >
        <Image objectFit="cover" src={image} alt="imagen" height={1200} width={1000} />
      </Box>
    </Link>
  )
}