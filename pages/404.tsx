import { Divider, Flex, Text } from "@chakra-ui/react"
import Head from "next/head";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <Flex
      p={2}
      h='100vh'
      align='center'
      textAlign='center'
      direction='column'
      justify='center'
    >
      <Head>
        <title>Aneuswimwear | Bikini Shop</title>
      </Head>
      <Image src='/assets/logo.jpg' objectFit="cover" height={400} width={400} alt='404' />
      <Flex direction='column'>
        <Text
          as='h1'
          lineHeight='48px'
          fontSize='48px'
          fontWeight={500}
        >
          404
        </Text>
        <Divider orientation="vertical" />
        <Text
          fontSize='24px'
          lineHeight='48px'
        >
          This page could not be found
        </Text>
      </Flex>
    </Flex>
  )
}

export default PageNotFound;