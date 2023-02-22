import Head from "next/head"
import NextLink from "next/link"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  GridItem,
  Link,
  Radio,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { destroyCookie, parseCookies } from 'nookies'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useSession } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux"
import { GetServerSideProps } from "next"
import { groq } from "next-sanity"

import { CheckoutOrder } from "../../components/CheckoutOrder"
import { IOrder } from "../../interfaces"
import { addToCart, getCartTotal, getTotalItems } from "../../redux/cart/cartSlices"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createOrder, Payphone } from "../../client"
import { setLoadShippings } from "../../redux/shippings/shippings"
import { sanityClient } from "../../sanity"


const Shipping = ({ shippings }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMesage, setErrorMesage] = useState('')
  const { items, discount } = useSelector((state: any) => state.cart)
  const shipping = useSelector((state: any) => state.shippings)
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const total = (getCartTotal(items) >= 200 ? 0 : shipping.price + getCartTotal(items, discount?.discount))

  const {
    country,
    firsName,
    lastName,
    address,
    address2,
    zip,
    city,
    phone,
  } = parseCookies()

  const handleCreateOrder = async () => {
    if (isLoading) return
    if (items.length === 0) return
    setIsLoading(true)

    const body: IOrder = {
      discount: Number((discount?.discount / 100) * getCartTotal(items)),
      discountCode: discount,
      shipping,
      orderItems: items,
      shippingAddress: {
        country,
        firsName,
        lastName,
        address,
        address2,
        zip,
        city,
        phone,
      },
      paymentMethod: "",
      numberOfItems: getTotalItems(items),
      subTotal: getCartTotal(items),
      total: total,
      tax: 0,
      isPaid: false
    }

    try {
      const { data } = await createOrder(body)
      const orderPay = {
        amount: total * 100,
        amountWithoutTax: total * 100,
        clientTransactionId: data._id,
        responseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/`,
        cancelationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`
      }
      const { data: payphone } = await Payphone(orderPay)
      dispatch(addToCart([]))
      dispatch(setLoadShippings({ name: '', price: 0 }))
      destroyCookie(null, 'cart')
      router.replace(payphone.payWithCard)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    try {
      const shippingName = cookies.country ? JSON.parse(JSON.stringify(cookies.country)) : null
      dispatch(setLoadShippings(shippingName ? shippings.find((country: { name: string }) => country.name == shippingName) : { name: '', price: 0 }))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Confirm Shipping</title>
      </Head>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <GridItem>
          <Flex direction='column' gap='40px' p={{ base: '20px 20px', lg: '40px 70px' }} borderRight='1px solid #E2E8F0'>
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
            <Box >
              <Box border='1px solid #E2E8F0' borderRadius='8px' mb='24px'>
                <Flex p='11px'>
                  <Flex flex={1}>
                    <Text
                      mr='42px'
                      color='#737373'
                    >
                      Contact</Text>
                    <Text
                      fontSize='14px'
                    >
                      {session?.user?.email}
                    </Text>
                  </Flex>
                  <NextLink href={'/checkout/information'}>
                    <Link
                      fontSize='14px'
                    >
                      Change
                    </Link>
                  </NextLink>
                </Flex>
                <Divider />
                <Flex p='11px'>
                  <Flex flex={1}>
                    <Text
                      mr='42px'
                      color='#737373'
                    >
                      Ship to
                    </Text>
                    <Text
                      fontSize='14px'
                    >
                      {`${address}, ${address2}, ${zip}, ${country}, ${city}`}
                    </Text>
                  </Flex>
                  <NextLink href={'/checkout/information'}>
                    <Link
                      fontSize='14px'
                    >
                      Change
                    </Link>
                  </NextLink>
                </Flex>
              </Box>

              <Text
                mb='10px'
                fontSize='18px'
              >
                Shipping method
              </Text>

              <Flex justifyContent='space-between' border='1px solid #E2E8F0' borderRadius='8px' p='17px'>
                <Radio defaultChecked>PayPhone Application Payments</Radio>
                <img style={{ height: '24px' }} src="/assets/logo-payment.png" alt="cards" />
              </Flex>

              <Flex justifyContent='space-between' alignItems='center' mt='21px' direction={{ base: 'column-reverse', lg: 'row' }} rowGap='20px'>
                <NextLink href='/checkout/information' passHref>
                  <Link>
                    <Flex alignItems='center' gap='8px'>
                      <FiChevronLeft color='gray.500' />
                      Return to information
                    </Flex>
                  </Link>
                </NextLink>
                <Button
                  width={{ base: '100%', lg: 'auto' }}
                  _hover={{}}
                  isLoading={isLoading}
                  onClick={handleCreateOrder}
                  color='white'
                  bg='#000000'
                >
                  Place Order
                </Button>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <CheckoutOrder />
        </GridItem>
      </SimpleGrid >
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

export default Shipping