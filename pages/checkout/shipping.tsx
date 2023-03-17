import Head from "next/head"
import NextLink from "next/link"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  CircularProgress,
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
import { PayPalButtons } from "@paypal/react-paypal-js";

import { CheckoutOrder } from "../../components/CheckoutOrder"
import { IOrder } from "../../interfaces"
import { addToCart, getCartTotal, getTotalItems } from "../../redux/cart/cartSlices"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { confirmOrder, createOrder, Payphone, successOrder } from "../../client"
import { setLoadShippings } from "../../redux/shippings/shippings"
import { sanityClient } from "../../sanity"

interface OrderResponseBody {
  id: string;
  status:
  | "COMPLETED"
  | "SAVED"
  | "APPROVED"
  | "VOIDED"
  | "COMPLETED"
  | "PAYER_ACTION_REQUIRED";
}


const Shipping = ({ shippings }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const { items, discount } = useSelector((state: any) => state.cart)
  const shipping = useSelector((state: any) => state.shippings)
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: session } = useSession()

  useEffect(() => {
    setTotal(getCartTotal(items) >= 200 ? getCartTotal(items) : shipping.price + getCartTotal(items, discount?.discount))
  }, [shipping, discount])

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

  const handleCreateOrder = async (details: OrderResponseBody) => {
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
      const response = await confirmOrder({
        transactionId: details.id,
        orderId: data._id,
      })
      await successOrder(data)
      dispatch(addToCart([]))
      dispatch(setLoadShippings({ name: '', price: 0 }))
      destroyCookie(null, 'cart')
      router.push(`/order/${data._id}`)
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

              <Flex justifyContent='space-between' alignItems='center' my='21px' direction={{ base: 'column-reverse', lg: 'row' }} rowGap='20px'>
                <NextLink href='/checkout/information' passHref>
                  <Link>
                    <Flex alignItems='center' gap='8px'>
                      <FiChevronLeft color='gray.500' />
                      Return to information
                    </Flex>
                  </Link>
                </NextLink>
              </Flex>
              <Box>
                {isLoading ? (
                  <Flex justifyContent='center'>
                    <CircularProgress size='60px' thickness='8px' isIndeterminate color='#009cde' />
                  </Flex>
                ) : (
                  <PayPalButtons
                    style={{
                      height: 40,
                    }}
                    createOrder={async (data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: `${total}`,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order!.capture().then((details) => {
                        handleCreateOrder(details)
                      });
                    }}
                  />
                )}
              </Box>
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