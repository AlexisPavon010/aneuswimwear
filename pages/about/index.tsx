import { Box, Container, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import NextImage from 'next/image'
import Head from 'next/head'
import { GetServerSideProps } from "next";
import { groq } from "next-sanity";

import { sanityClient } from "../../sanity";
import PortableText from "react-portable-text";

interface Image {
  url: string;
}

interface Props {
  banner: Image;
  bodyImage: Image;
  body: any;
}

const AboutAneu = ({ banner, bodyImage, body }: Props) => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | About</title>
      </Head>
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
            src={banner?.url}
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
            <Image src={bodyImage?.url} alt="demo" />
          </Box>
          <Flex
            justifyContent='center'
            direction='column'
            textAlign='center'
          >
            <PortableText
              content={body}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              serializers={{
                normal: (props: any) => (
                  <p style={{ marginBottom: '16px' }} {...props} />
                )
              }}
            />
          </Flex>
        </SimpleGrid >
      </Container>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`
    *[_type == 'about'][0]{
      banner{
        ...asset->{url}
      },
      bodyImage{
        ...asset->{url}
      },
      body
    }
  `

  const pageInfo = await sanityClient.fetch(query)

  return {
    props: {
      ...pageInfo,
    }
  }
}

export default AboutAneu;