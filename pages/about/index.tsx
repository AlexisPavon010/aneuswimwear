import { Box, Container, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import NextImage from 'next/image'

const AboutAneu = () => {
  return (
    <Box>
      <Box position='relative' mb={8}>
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
            src={'https://cdn.shopify.com/s/files/1/2247/4301/files/LOOK_4_019_1600x.jpg?v=1650942336'}
            alt='banner'
          />
        </Box>
        <Flex
          justify='center'
          align='center'
          minH='40vh'
        >
          <Box
            p='30px'
            textAlign='center'
            zIndex={1}
          >
            <Text
              mb={4}
              color='white'
              fontSize={{ base: '40px', md: '48px', lg: '60px' }}
              fontWeight={600}
            >
              ABOUT ANEU
            </Text>
          </Box>
        </Flex>
      </Box>
      <Container maxW='1200px' p='30px'>
        <SimpleGrid
          gap='40px'
          columns={{ base: 1, lg: 2 }}
        >
          <Box
            gridRow={{ base: 2, lg: 1 }}
          >
            <Image src="https://cdn.shopify.com/s/files/1/2247/4301/files/Untitled_1000_x_1200_px_1000_x_1300_px.png?v=1637708815" />
          </Box>
          <Flex
            justifyContent='center'
            direction='column'
            textAlign='center'
          >
            <Text
              mb={4}
            >
              Collections that transcend seasons.
            </Text>
            <Text
              mb={4}
            >
              Sommer Swim is a pioneering label at the cutting edge of design.
              Carved from the foundations of elegant minimalism, nostalgic sensuality,
              and understated luxury. Our highly anticipated annual collections come to
              life through the art of story telling captured in postcard-perfect destinations.
            </Text>
            <Text
              mb={4}
            >
              Originating from a desire to create unique silhouettes not yet seen on the market,
              Sommer Swim quickly developed into cult brand status and has continued to mature into
              one of the most recognisable swimwear names internationally.
            </Text>
            <Text
              mb={4}
            >
              Our highly coveted styles are simplistic, alluring in nature, and coax out the sensual
              side of all who wear them. Sommer Swim is for women of a new-era. Minimalists who seek
              effortless staples and the elegantly bold who set the trends rather than follow them.
            </Text>
            <Text
              mb={4}
            >
              Inspired by our loyal followers, designed for seasons to come, and here for the magic moments. We are Sommer Swim.
            </Text>
          </Flex>
        </SimpleGrid >
      </Container>
    </Box >
  )
}

export default AboutAneu;