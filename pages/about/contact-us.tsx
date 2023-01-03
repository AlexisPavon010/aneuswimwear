import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import NextImage from "next/image";
import Head from "next/head";

const ContactUsPage = () => {
  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Contact Us</title>
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
            src='/assets/IMG_4368.JPG'
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
      <Container maxW='1000px'>
        <Text
          fontSize={{ base: '30px', md: '36px', lg: '40px' }}
          fontWeight={600}
          align='center'
          mb='25px'
        >
          CONTACT US
        </Text>
        <Text
          align='center'
          mb='25px'
        >
          For Media/PR enquiries, any general enquiries or enquiries on returns and exchanges please use the form below:
        </Text>
        <Flex gap='20px' mb='25px' direction={{ base: 'column', md: 'row' }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' />
          </FormControl>
        </Flex>
        <FormControl mb='30px'>
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Flex
          justifyContent='center'
          mb='50px'
        >
          <Button
            borderRadius={0}
            bgColor='#000'
            color='white'
            _hover={{}}
            fontSize='12px'
            p='10px 20px'
          >
            SEND
          </Button>
        </Flex>
      </Container>
    </Box >
  )
}

export default ContactUsPage;