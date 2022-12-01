import { GetServerSideProps, NextPage } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Head from "next/head"
import {
  Flex,
  Divider,
  Box,
  Text,
  Link as ChakraLink,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react"
import {
  BsArrowLeft,
  BsCreditCard2Back
} from "react-icons/bs";
import moment from 'moment'

import { getOrderById } from "../../database/dbOrders"
import { IOrder } from "../../interfaces"

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  const router = useRouter()

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Order</title>
      </Head>
      <Flex p='12px 32px 0 32px' align='center'>
        <ChakraLink display='flex' alignItems='center' onClick={() => router.push('/order/history')}>
          <BsArrowLeft size='24px' />
        </ChakraLink>
        <Text
          ml={2}
          fontSize='14px'
          fontWeight={600}
        >
          {`Order: (${order._id})`}
        </Text>
      </Flex>
      <Box p='20px'>

        <Box p='12px' borderWidth='1px' borderRadius='lg'>
          <Flex justifyContent='space-between' mb={4} direction={{ base: 'column', md: 'row' }}>
            <Box mb={2}>
              <Text
                fontWeight={600}
                mb={2}
              >
                Order Date
              </Text>
              <Text
                fontSize='14px'
              >
                {moment(order.createdAt).format('MM/DD/YYYY, h:mm:ss a')}
              </Text>
            </Box>
            <Box mb={2}>
              <Text
                fontWeight={600}
                mb={2}
              >
                Order ID
              </Text>
              <Text
                fontSize='14px'
              >
                {order._id}
              </Text>
            </Box>
            <Box mb={2}>
              <Text
                fontWeight={600}
                mb={2}
              >
                Payment
              </Text>
              {
                order.isPaid ? (
                  <Tag variant='subtle' colorScheme='green'>
                    <TagLeftIcon boxSize='12px' as={BsCreditCard2Back} />
                    <TagLabel>Success</TagLabel>
                  </Tag>

                ) : (
                  <Tag variant='subtle' colorScheme='red'>
                    <TagLeftIcon boxSize='12px' as={BsCreditCard2Back} />
                    <TagLabel>Pending</TagLabel>
                  </Tag>
                )
              }
            </Box>
            <Box mb={2}>
              <Text
                fontWeight={600}
                mb={2}
              >
                Address
              </Text>
              <Text
                fontSize='14px'
              >
                {`${order.shippingAddress.address}, ${order.shippingAddress.country}, ${order.shippingAddress.zip}`}
              </Text>
            </Box>
          </Flex>
          <Divider />
          <Box>
            {order.orderItems.map((item) => (
              <>
                <Flex justifyContent='space-between' p='20px 0'>
                  <Flex w='100%' flex={1}>
                    <Box
                      bgImage={`url(${item.image})`}
                      width='100%'
                      height='100px'
                      // backgroundColor='#eee'
                      backgroundSize='contain'
                      backgroundPosition='50%'
                      backgroundRepeat='no-repeat'
                      maxWidth='115px'
                    />
                    <Flex direction='column'>
                      <Text
                        ml={2}
                        fontWeight={600}
                      >
                        {item.title}
                      </Text>
                      <Text
                        ml={2}
                      >
                        {`quantity: ${item.quantity}`}
                      </Text>
                      <Text
                        ml={2}
                      >
                        {`price: $${item.price.toFixed(2)}`}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
              </>
            ))}
          </Box>
          <Box p='8px'>
            <Flex justifyContent='space-between'>
              <Text>Subtotal</Text>
              <Text>{`$${order.subTotal.toFixed(2)}`}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>Express Shipping</Text>
              <Text>{`$0.00`}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>Taxes</Text>
              <Text
                fontWeight={600}
              >
                {`$${process.env.NEXT_PUBLIC_TAX_RATE || 0.00}`}
              </Text>
            </Flex>
            <Divider />
          </Box>
          <Flex p='8px' justifyContent='space-between'>
            <Text
              fontWeight={600}
            >
              Total:
            </Text>
            <Text
              fontWeight={600}
            >
              {`$${order.total.toFixed(2)}`}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const session: any = await getSession({ req })
  const { id = '' } = query

  if (!session) {
    return {
      redirect: {
        destination: `/auth/signin?p=/order/${id}`,
        permanent: false,
      }
    }
  }

  const order = await getOrderById(id.toString())

  if (!order) {
    return {
      redirect: {
        destination: `/order/history`,
        permanent: false,
      }
    }
  }

  if (order.user !== session.user.id) {
    return {
      redirect: {
        destination: `/order/history`,
        permanent: false,
      }
    }
  }

  return {
    props: {
      order
    }
  }
}

export default OrderPage