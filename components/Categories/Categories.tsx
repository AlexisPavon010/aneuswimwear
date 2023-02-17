import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Link, Text } from "@chakra-ui/react"
import Image from "next/image";
import NextLink from 'next/link'
import { groq } from "next-sanity";
import useSWR from "swr";

import { sanityClient } from "../../sanity";

interface Image {
  url: string
}

interface CategoriesProps {
  title: string;
  image: Image;
}

export const Categories = () => {

  const { data = [], error } = useSWR(
    groq`
      *[_type == 'category']{
      image{
        ...asset -> {url}
      },
      title
    }`,
    (query) => sanityClient.fetch(query));

  return (
    <Box>
      <Text
        m='20px 0'
        fontSize={{ base: '16px', md: '20px' }}
        textAlign='center'
        fontFamily='Tenor Sans'
      >
        CATEGORIES
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
        {data.map(({ image, title }: CategoriesProps, i: number) => (
          <SwiperSlide key={i}>
            <Category image={image?.url} name={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box >
  )
}

const Category = ({ image, name }: { image: string, name: string }) => {
  return (
    <Link
      as={NextLink}
      href={`/categories/${name.toLowerCase().replace(" ","-")}`}
      position='relative'
      overflow='hidden'
    >
      <Box
        borderRadius='5px'
        transition='all 0.8s ease'
        transform='scale(1.03)'
        _hover={{
          transform: 'scale(1.07)',
          _after: {
            opacity: '0.3'
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
          opacity: ' 0',
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
        <Image
          style={{
            objectFit: 'cover',
            aspectRatio: '8/9'
          }}
          src={image}
          alt={name}
          height={1200}
          width={1000}
        />
      </Box>
    </Link>
  )
}