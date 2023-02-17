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
    <>
      <Text
        m='20px 0'
        fontSize={{ base: '16px', md: '20px' }}
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
        style={{ padding: '8px 4px' }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          // 540: {
          //   slidesPerView: 3,
          // },
          // 720: {
          //   slidesPerView: 4,
          // },
          1200: {
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
    </>
  )
}