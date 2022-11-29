import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IProduct } from '../../interfaces/Product';
import { ProductItem } from '../Products';

interface NewArrivalsProps {
  title: string;
  products: IProduct[];
}

export const SlideProducts = ({ title, products }: NewArrivalsProps) => {
  const router = useRouter()
  return (
    <Box p={{ base: '10px', md: '30px' }}>
      <Text
        m='20px 0'
        fontSize='24px'
        textAlign='center'
        fontFamily='Tenor Sans'
      >
        {title}
      </Text>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
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
        {products?.map((data: IProduct, i: number) => (
          <SwiperSlide key={i} style={{ height: 'initial' }}>
            <ProductItem {...data} />
          </SwiperSlide>
        ))}
      </Swiper >
      <Flex
        justifyContent='center'
      >
        <Button
          onClick={() => router.push('/collections/all')}
          variant='ghost'
        >
          See All
        </Button>
      </Flex>
    </Box >
  )
}