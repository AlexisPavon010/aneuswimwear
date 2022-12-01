import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { ICartProduct } from '../../interfaces'
import { getCartTotal } from '../../redux/cart/cartSlices'

export const CheckoutOrder = () => {
  const { items } = useSelector((state: any) => state.cart)
  const taxRate = (Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) + 1)

  return (
    <Box p='40px'>
      {items.map((product: ICartProduct, i: number) => (
        <Flex mb='12px' key={i}>
          <Box
            bgImage={`url(${product.image})`}
            borderRadius='8px'
            backgroundColor='#eee'
            backgroundSize='cover'
            backgroundPosition='50%'
            backgroundRepeat='no-repeat'
            maxWidth='64px'
            height='64px'
            width='100%'
          />
          <Box pl='14px' w='100%'>
            <Text
              fontWeight='600'
              fontSize='14px'
            >
              {product.title}
            </Text>
            <Text fontSize='14px'>Quantity: {product.quantity}</Text>
            <Text fontSize='14px'>Size: {product.size}</Text>
          </Box>
          <Box pl='14px'>
            <Text>${product.price.toFixed(2)}</Text>
          </Box>
        </Flex>
      ))}
      <Divider />
      <Flex margin='20px 0'>
        <Input type='text' name='discount' focusBorderColor='none' />
        <Button ml='12px'>
          Apply
        </Button>
      </Flex>
      <Divider />
      {/* <Flex direction='column' rowGap='10px' p='20px 0'>
        <Flex justifyContent='space-between'>
          <Text
            fontSize='14px'
          >
            Subtotal
          </Text>
          <Text
            fontSize='14px'
            fontWeight='600'
          >
            ${getCartTotal(items)}
          </Text>
        </Flex>
        <Flex justifyContent='space-between'>
          <Text
            fontSize='14px'
          >
            Tax
          </Text>
          <Text
            fontSize='14px'
            fontWeight='600'
          >
            {`$${Number(process.env.NEXT_PUBLIC_TAX_RATE || 0).toFixed(2)}`}
          </Text>
        </Flex>
        <Flex justifyContent='space-between'>
          <Text>Shipping</Text>
          <Text
            fontSize='14px'
            fontWeight='600'
          >
            $0.00
          </Text>
        </Flex>
      </Flex> */}
      <Divider />
      <Flex justifyContent='space-between' mt='12px'>
        <Text
          fontSize='14px'
          fontWeight='600'
        >
          Total
        </Text>
        <Flex>
          <Text>
            usd
          </Text>
          <Text
            fontSize='24px'
            fontWeight='600'
          >
            ${(getCartTotal(items) * taxRate)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
