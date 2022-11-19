import { Flex, Text } from "@chakra-ui/react"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export const Announcement = () => {
  return (
    <Flex
      height='40px'
    >
      <Swiper
        direction={"vertical"}
        effect={"slide"}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          width: '100%',
          backgroundColor: '#ae9e8f',
          padding: '10px 0px',
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Text
            color='white'
            textAlign='center'
            fontSize='13px'
          >
            free shipping on US orders & international orders $200+
          </Text>
        </SwiperSlide>
        <br />
        <SwiperSlide>
          <Text
            color='white'
            textAlign='center'
            fontSize='13px'
          >
            shop our newest swim collection
          </Text>
        </SwiperSlide>

      </Swiper>
    </Flex >
  )
}
