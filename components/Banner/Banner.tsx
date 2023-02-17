import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import NextImage from 'next/image';
import { Button, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

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
      <SwiperSlide>
        <NextImage
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          alt={'title'}
          src={banner.images[0].url}
          width={1000}
          height={1000}
        />
        <Flex
          position='absolute'
          zIndex=' 3'
          left=' 0'
          top=' 0'
          bottom=' 0'
          flex=' 1'
          right=' 0'
          font-size=' 1'
          display=' flex'
          width=' 100%'
          justifyContent=' center'
          alignItems='center'
        >
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
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}
