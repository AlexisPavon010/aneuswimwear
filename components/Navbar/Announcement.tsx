import { Flex, Text } from "@chakra-ui/react"
import { groq } from "next-sanity"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr"

import { sanityClient } from "../../sanity"

interface IAnnouncement {
  name: string
}

export const Announcement = () => {
  const { data = [], error } = useSWR(
    groq`
      *[_type == 'announcement'][]{
        name
      }`,
    (query) => sanityClient.fetch(query)
  );

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
        {
          data.map((a: IAnnouncement, i: number) => (
            <>
              <SwiperSlide>
                <Text
                  color='white'
                  textAlign='center'
                  fontSize='13px'
                >
                  {a?.name}
                </Text>
              </SwiperSlide>
            </>
          ))
        }
      </Swiper>
    </Flex >
  )
}
