import { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { groq } from 'next-sanity'

import { ICartProduct } from '../../interfaces'
import { getCartTotal, setDiscoutCode } from '../../redux/cart/cartSlices'
import { sanityClient } from '../../sanity'

export const CheckoutOrder = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm()
  const { items, discount } = useSelector((state: any) => state.cart)
  const shipping = useSelector((state: any) => state.shippings)
  const taxRate = (Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) + 1)

  const getCouponsCode = async (data: any) => {
    setLoading(true)
    try {
      const query = groq`
      *[_type == 'coupons'][] {
        couponNumber,
        discount
      }   
    `
      const coupons = await sanityClient.fetch(query)
      const result = coupons.find(({ couponNumber }: { couponNumber: string }) => couponNumber == data.couponCode)

      if (!result) {
        setError('couponCode', { message: 'coupon code is invalid' })
        return
      }


      dispatch(setDiscoutCode(result))

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

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
              {product?.title}
            </Text>
            <Text fontSize='14px'>Quantity: {product.quantity}</Text>
            <Text fontSize='14px'>Top Size: <strong>{product.topSize}</strong></Text>
            <Text fontSize='14px'>Bottom Size: <strong>{product.bottomSize}</strong></Text>
          </Box>
          <Box pl='14px'>
            <Text>${product.price?.toFixed(2)}</Text>
          </Box>
        </Flex>
      ))}
      <Divider />
      <Flex margin='20px 0'>
        <FormControl isInvalid={!!errors.couponCode}>
          <Input
            type='text'
            focusBorderColor='none'
            {...register('couponCode', { required: 'coupon code is required' })}
          />
          <FormErrorMessage>{errors?.couponCode?.message as string}</FormErrorMessage>
        </FormControl>
        <Button
          ml='12px'
          isLoading={loading}
          onClick={handleSubmit(getCouponsCode)}
        >
          Apply
        </Button>
      </Flex>
      <Divider />
      <Flex direction='column' rowGap='10px' p='20px 0'>
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
        {
          discount
            ? <Flex justifyContent='space-between'>
              <Text
                fontSize='14px'
              >
                {`Discount (${discount.discount}%)`}
              </Text>
              <Text
                fontSize='14px'
                fontWeight='600'
              >
                {`$ -${((Number(discount.discount) / 100) * getCartTotal(items))}`}
              </Text>
            </Flex>
            : <></>
        }

        <Flex justifyContent='space-between'>
          <Text>Shipping</Text>
          <Text
            fontSize='14px'
            fontWeight='600'
          >
            {getCartTotal(items) >= 200 ? 'Free' : `$${shipping?.price}`}
          </Text>
        </Flex>
      </Flex>
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
            ${(getCartTotal(items, discount?.discount) * taxRate) + (getCartTotal(items) >= 200 ? 0 : shipping.price)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
