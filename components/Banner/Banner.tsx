import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import Image from 'next/image';

import { Box } from '@chakra-ui/react';

export const Banner = () => {
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
        <Box>
          <Image src='https://capricathemes.com/prestashop/PRS12/PRS120296/modules/cz_imageslider/views/img/sample-2.jpg' alt='banner' width={6000} height={2500} />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image src='https://capricathemes.com/prestashop/PRS12/PRS120296/modules/cz_imageslider/views/img/sample-1.jpg' alt='banner' width={6000} height={2500} />
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}
