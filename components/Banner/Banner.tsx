import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import NextImage from 'next/image';

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
      </SwiperSlide>
    </Swiper>
  )
}
