import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import NextImage from 'next/image';
import NextLink from 'next/link';

import { Box, Button, Flex, Text } from '@chakra-ui/react';


interface banner {
  images: Image[];
  subtitle: string;
  title: string;
}

interface Image {
  url: string;
}

export const Banner = ({ banner }: { banner: banner }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
    >
      {
        banner.images.map(({ url }, i) => (
          <SwiperSlide key={i}>
            <Box position='relative' >
              <Box
                position='absolute'
                height='100%'
                width='100%'
                left='0'
                top='0'
              >
                <NextImage
                  style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '0',
                    top: '0',
                  }}
                  width={6000}
                  height={6000}
                  src={url}
                  alt='banner'
                />
              </Box>
              <Flex
                justify='center'
                align='center'
                minH='90vh'
              >
                <Box
                  p='30px'
                  textAlign='center'
                  zIndex={1}
                >
                  <Text
                    mb={0}
                    color='white'
                    fontSize='40px'
                    fontWeight={600}
                  >
                    {banner?.title?.toUpperCase()}
                  </Text>
                  <Text
                    mb={4}
                    color='white'
                    fontSize='24px'
                  >
                    {banner?.subtitle?.toUpperCase()}
                  </Text>
                  <Button
                    as={NextLink}
                    href='/collections/all'
                    variant='outline'
                    color='white'
                    borderRadius={0}
                    _hover={{}}
                    fontSize='14px'
                    fontWeight={400}
                    height='43px'
                    width='150px'
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </Flex>
            </Box>
          </SwiperSlide>
        ))
      }
    </Swiper>

  )
}
