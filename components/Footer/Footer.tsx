import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiSend } from 'react-icons/fi'

import { sendNewsletterEmail } from '../../client'

export const Footer = () => {
  return (
    <Box
      backgroundColor='rgb(174, 158, 143)'
      float='left'
      width='100%'
    >
      <Box
        padding='90px 0 50px'
        overflow='hidden'
        color='#888888'
      >

        <Container maxW='720px' display={{ base: 'block', lg: 'none' }}>
          <Accordion allowMultiple>
            <AccordionItem border={0}>
              <AccordionButton>
                <Text
                  as='h2'
                  flex='1'
                  color='white'
                  textAlign='left'
                  fontWeight={600}
                >
                  SHOP
                </Text>
                <AccordionIcon color='white' fontSize='24px' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex direction='column' color='white'>
                  <NextLink href='/collections/new-arrivals'>
                    New Arrivals
                  </NextLink>
                  <NextLink href='/collections/all'>
                    Swimwear
                  </NextLink>
                  <NextLink href='/collections/sale'>
                    Sale
                  </NextLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Text
                    flex='1'
                    color='white'
                    textAlign='left'
                    fontWeight={600}
                  >
                    CUSTOMER CARE
                  </Text>
                  <AccordionIcon color='white' fontSize='24px' />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction='column' color='white'>
                  <NextLink href='/about/size-guide'>
                    Size Guide
                  </NextLink>
                  <NextLink href='/about/shipping-and-delivery'>
                    Shipping & Delivery
                  </NextLink>
                  <NextLink href='/about/returns-exchanges'>
                    Returns & Exchanges
                  </NextLink>
                  <NextLink href='/about/faq'>
                    FAQs
                  </NextLink>
                  <NextLink href='/about/contact-us'>
                    Contact Us
                  </NextLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            {/* <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Text
                    flex='1'
                    color='white'
                    textAlign='left'
                    fontWeight={600}
                  >
                    DISCOVER
                  </Text>
                  <AccordionIcon color='white' fontSize='24px' />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex direction='column'>
                  <NextLink href='/about'>
                    About
                  </NextLink>
                  <NextLink href='/about/values'>
                    Values
                  </NextLink>
                </Flex>
              </AccordionPanel>
            </AccordionItem> */}
          </Accordion>
          <Box p='8px 16px'>
            <h2>
              <Text
                mb={4}
                flex='1'
                color='white'
                textAlign='left'
                fontWeight={600}
              >
                JOIN THE ANEU CLUB
              </Text>
            </h2>
            <Box pb={2}>
              <EmailLargeForm />
            </Box>
          </Box>

        </Container>
        <Grid
          gridTemplateColumns='repeat(4, 1fr)'
          display={{ base: 'none', lg: 'grid' }}
          maxW='1280px'
          margin='0 auto'
        >
          <Flex
            p='0 15px'
            lineHeight='30px'
            direction='column'
            color='white'
          >
            <Text
              fontWeight={700}
              color='white'
              mb='25px'
              as='h3'
            >
              SHOP
            </Text>
            <NextLink href='/collections/new-arrivals'>
              New Arrivals
            </NextLink>
            <NextLink href='/collections/all'>
              Swimwear
            </NextLink>
            <NextLink href='/collections/sale'>
              Sale
            </NextLink>
          </Flex>
          <Flex
            p='0 15px'
            lineHeight='30px'
            direction='column'
            color='white'
          >
            <Text
              mb='25px'
              fontWeight={700}
              color='white'
            >
              CUSTOMER CARE
            </Text>
            <NextLink href='/about/size-guide'>
              Size Guide
            </NextLink>
            <NextLink href='/about/shipping-and-delivery'>
              Shipping & Delivery
            </NextLink>
            <NextLink href='/about/returns-exchanges'>
              Returns & Exchanges
            </NextLink>
            <NextLink href='/about/faq'>
              FAQs
            </NextLink>
            <NextLink href='/about/contact-us'>
              Contact Us
            </NextLink>
          </Flex>
          <Flex
            p='0 15px'
            lineHeight='30px'
            direction='column'
          >
            {/* <Text
              mb='25px'
              fontWeight={700}
              color='white'
            >
              DISCOVER
            </Text>
            <NextLink href='/about'>
              About
            </NextLink>
            <NextLink href='/about/values'>
              Values
            </NextLink> */}
          </Flex>
          <Box p='0 15px' lineHeight='30px'>
            <Text
              mb='25px'
              color='white'
              fontWeight={700}
            >
              JOIN THE ANEU CLUB
            </Text>
            <Box>
              <EmailSmallForm />
            </Box>
          </Box>

        </Grid >

        <Box p='8px 16px'>
          <Flex pt='25px' justifyContent='center'>
            <Image mr='10px' src="/assets/visa.png" alt="Visa" />
            <Image mr='10px' src="/assets/master_card.png" alt="Master Card" />
            <Image mr='10px' src="/assets/payphone-xs.svg" alt="Payphone" />
            <Image mr='10px' src="/assets/paypal.png" alt="Paypal" />
          </Flex>
        </Box>

      </Box>

      <Box>
        <Container
          maxW='960px'
          borderTop='1px solid white'
          padding='30px 0px'
        >
          <Text
            color='white'
            fontSize='13px'
            textAlign='center'
          >
            © 2023 - Ecommerce software developed by Aneuswimwear ™
          </Text>
        </Container>
      </Box>
    </Box >
  )
}

const EmailLargeForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const sendEmail = async (fomrData: any) => {
    setIsLoading(true)
    console.log(fomrData)
    try {
      const { data } = await sendNewsletterEmail(fomrData.email)
      setValue('email', '')
      console.log(data)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormControl isInvalid={!!errors.email}>
      <InputGroup>
        <Input
          {...register('email', { required: "Please enter an email." })}
          _placeholder={{ color: 'white' }}
          placeholder='Enter email'
          focusBorderColor='none'
          borderRadius='none'
          type='email'
        />
        <InputRightElement>
          {isLoading ? (
            <Spinner />
          ) : (
            <FiSend color='white' cursor='pointer' size='20px' onClick={handleSubmit(sendEmail)} />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>please enter an email</FormErrorMessage>
    </FormControl>
  )
}

const EmailSmallForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const sendEmail = async (fomrData: any) => {
    setIsLoading(true)
    console.log(fomrData)
    try {
      const { data } = await sendNewsletterEmail(fomrData.email)
      setValue('email', '')
      console.log(data)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormControl isInvalid={!!errors.email}>
      <InputGroup>
        <Input
          {...register('email', { required: "Please enter an email." })}
          _placeholder={{ color: 'white' }}
          placeholder='Enter email'
          focusBorderColor='none'
          borderRadius='none'
          type='email'
        />
        <InputRightElement>
          {isLoading ? (
            <Spinner />
          ) : (
            <FiSend color='white' cursor='pointer' size='20px' {...register('email', { required: "Please enter an email." })} onClick={handleSubmit(sendEmail)} />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>please enter an email</FormErrorMessage>
    </FormControl>
  )
}