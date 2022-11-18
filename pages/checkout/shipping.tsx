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
  Grid,
  GridItem,
  Link,
  Radio,
  SimpleGrid,
  Text,
  useMediaQuery
} from "@chakra-ui/react"
import { destroyCookie, parseCookies } from 'nookies'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useSession } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux"

import { CheckoutOrder } from "../../components/CheckoutOrder"
import { IOrder } from "../../interfaces"
import { addToCart, getCartTotal, getTotalItems } from "../../redux/cart/cartSlices"
import { useState } from "react"
import { useRouter } from "next/router"
import { createOrder } from "../../client"

const Shipping = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMesage, setErrorMesage] = useState('')
  const [isMaxWidth1000] = useMediaQuery('(max-width: 1000px)')
  const { items } = useSelector((state: any) => state.cart)
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const taxRate = (Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) + 1)

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
    setIsLoading(true)
    const body: IOrder = {
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
      total: (getCartTotal(items) * taxRate),
      tax: taxRate,
      isPaid: false
    }

    console.log(body)

    try {
      const { data } = await createOrder(body)
      console.log(data)
      dispatch(addToCart([]))
      destroyCookie(null, 'cart')
      router.replace(`/order/${data._id}`)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

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
                      {`${address}, ${address2}, ${zip}, ${country}, ${city},`}
                      {/* paraguay990, 2 A, 3400 Corrientes, MA, Chile */}
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
                <Radio>UPS Express (1-3 Working Days)</Radio>
                <Text>
                  $5.00
                </Text>
              </Flex>

              <Flex justifyContent='space-between' alignItems='center' mt='21px' direction={{ base: 'column-reverse', lg: 'row' }} rowGap='20px'>
                <NextLink href='/checkout/information'>
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
                  Create Order
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

export default Shipping