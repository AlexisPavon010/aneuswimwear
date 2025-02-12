import Head from "next/head";
import NextLink from 'next/link'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  GridItem,
  Input,
  Link,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { parseCookies, setCookie } from 'nookies'
import { useDispatch } from "react-redux";
import * as yup from 'yup'
import { useEffect } from "react";
import { groq } from "next-sanity";

import { IAddress } from "../../interfaces";
import { CheckoutOrder } from "../../components/CheckoutOrder";
import { addToCart } from "../../redux/cart/cartSlices";
import { sanityClient } from "../../sanity";
import { setLoadShippings } from "../../redux/shippings/shippings";
import { GetServerSideProps } from "next";

const schema = yup.object({
  country: yup.string().required('Country is required'),
  firstName: yup.string().required('FirstName is required'),
  lastName: yup.string().required('LastName is required'),
  address: yup.string().required('Address is required'),
  address2: yup.string().optional(),
  zip: yup.string().required('Zip is required'),
  city: yup.string().required('City is required'),
  phone: yup.string().required('Phone is required'),
  cedula: yup.string().required('Cedula is required'),
})

interface AddressPagesProps {
  shippings: any
}

const AddressPages = ({ shippings }: AddressPagesProps) => {
  const {
    country,
    firstName,
    lastName,
    address,
    address2,
    zip,
    city,
    phone,
    cedula
  } = parseCookies()
  const { register, handleSubmit, watch, formState: { errors } }: any = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      country: country,
      firstName: firstName,
      lastName: lastName,
      address: address,
      address2: address2,
      zip: zip,
      city: city,
      phone: phone,
      cedula: cedula,
    }
  })
  const { data: session } = useSession()
  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmitAddress = (data: IAddress) => {
    setCookie(null, 'country', data.country, { path: '/', })
    setCookie(null, 'firstName', data.firstName, { path: '/', })
    setCookie(null, 'lastName', data.lastName, { path: '/', })
    setCookie(null, 'address', data.address, { path: '/', })
    setCookie(null, 'address2', data.address2 || '', { path: '/', })
    setCookie(null, 'zip', data.zip, { path: '/', })
    setCookie(null, 'city', data.city, { path: '/', })
    setCookie(null, 'phone', data.phone, { path: '/', })
    setCookie(null, 'cedula', data.cedula, { path: '/', })
    router.push('/checkout/shipping')
  }

  useEffect(() => {
    const cookies = parseCookies()
    try {
      const cartCookies = cookies.cart ? JSON.parse(cookies.cart) : []
      dispatch(addToCart(cartCookies))
    } catch (error) {
      dispatch(addToCart([]))
    }
  }, [])

  useEffect(() => {
    const cookies = parseCookies()
    try {
      const shippingName = cookies.country ? JSON.parse(JSON.stringify(cookies.country)) : null
      dispatch(setLoadShippings(shippingName ? shippings.find((country: { name: string }) => country.name == shippingName) : shippings[0]))
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const subscribe = watch((value: any, { name, type }: { name: string, type: string }) => {
      console.log(name, value, 'form')
      if (name === 'country') {
        const shipping = shippings.find((country: { name: string }) => country.name == value.country)
        dispatch(setLoadShippings(shipping))
      }
    })
    return () => subscribe.unsubscribe();
  }, [])

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Confirm Address</title>
      </Head>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <GridItem>
          <Flex direction='column' gap='40px' p={{ base: '40px 20px', md: '40px 70px' }} borderRight='1px solid #E2E8F0'>
            <Text
              fontSize='24px'
              fontWeight='600'
              textAlign='center'
            >
              Aneuswimwear
            </Text>
            <Breadcrumb spacing='8px' fontSize='12px' separator={<FiChevronRight color='gray.500' />}>
              <BreadcrumbItem >
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Information</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box>
              <Flex justifyContent='space-between' mb='10px'>
                <Text
                  fontSize='18px'
                >
                  Contact information
                </Text>
                {session ? (<></>) : (
                  <Text
                    fontSize='14px'
                  >
                    Already have an account?
                    <NextLink href='/auth/signin'>
                      Log in
                    </NextLink>
                  </Text>
                )}
              </Flex>
              <Box mb='10px'>
                <Text
                  fontSize='14px'
                >
                  {session?.user?.email}
                </Text>
              </Box>
              <Checkbox defaultChecked>Email me with news and offers</Checkbox>
            </Box>
            <Box >
              <Text
                mb='10px'
                fontSize='18px'
              >
                Shipping address
              </Text>
              <Flex direction='column' gap='12px' mb='10px'>
                <FormControl isInvalid={errors.country}>
                  <Select {...register('country')} name="country" type='text' focusBorderColor='none' >
                    {
                      shippings.map(({ name, price }: { name: string, price: number }, i: number) => (
                        <option key={name} value={name}>{name}</option>
                      ))
                    }
                  </Select>
                  {/* <Input {...register('country')} placeholder='Country' name="country" type='text' focusBorderColor='none' /> */}
                  <FormErrorMessage>{errors?.country?.message}</FormErrorMessage>
                </FormControl>
                <Flex gap='12px'>
                  <FormControl isInvalid={errors.firstName}>
                    <Input {...register('firstName')} placeholder='First Name' name="firstName" type='text' focusBorderColor='none' />
                    <FormErrorMessage>Enter a name</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.lastName}>
                    <Input {...register('lastName')} placeholder='Last Name' name="lastName" type='text' focusBorderColor='none' />
                    <FormErrorMessage>Enter a last name.</FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl isInvalid={errors.address}>
                  <Input {...register('address')} placeholder='Address' name="address" type='text' focusBorderColor='none' />
                  <FormErrorMessage>Enter an address</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <Input {...register('address2')} placeholder='Apartment, suite, etc. (optional)' name="address2" type='text' focusBorderColor='none' />
                </FormControl>
                <Flex gap='12px'>
                  <FormControl isInvalid={errors.zip}>
                    <Input {...register('zip')} placeholder="Postal Code" name="zip" type='text' focusBorderColor='none' />
                    <FormErrorMessage>Enter the area or postal code</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.cedula}>
                    <Input {...register('cedula')} placeholder="ID" name="cedula" type='text' focusBorderColor='none' />
                    <FormErrorMessage>Enter the ID</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.city}>
                    <Input {...register('city')} placeholder="City" name="city" type='text' focusBorderColor='none' />
                    <FormErrorMessage>Enter the city.</FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl isInvalid={errors.phone}>
                  <Input {...register('phone')} placeholder="Phone" name="phone" type='text' focusBorderColor='none' />
                  <FormErrorMessage>Enter the Phone.</FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex gap='10px' direction='column' mb='20px'>
                <Checkbox>Save this information for next time</Checkbox>
                <Checkbox>Text me with news and offers</Checkbox>
              </Flex>
              <Flex justifyContent='space-between' alignItems='center' >
                <NextLink href='/'>
                  <Link>
                    <Flex alignItems='center' gap='8px'>
                      <FiChevronLeft color='gray.500' />
                      Return to cart
                    </Flex>
                  </Link>
                </NextLink>
                <Button onClick={handleSubmit(onSubmitAddress)} color='white' bg='#000000'>Continue to shipping</Button>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <CheckoutOrder />
        </GridItem>
      </SimpleGrid>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const query = groq`
  *[_type == 'shippings'][]{
    name,
    price
  }
  `
  const shippings = await sanityClient.fetch(query)

  return {
    props: {
      shippings
    }
  }
}

export default AddressPages;