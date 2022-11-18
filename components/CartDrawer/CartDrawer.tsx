import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { useEffect } from "react";

import { ICartProduct } from '../../interfaces';
import { openCartMenu } from '../../redux/ui/uiSlice';
import {
  decrementQuantity,
  getCartTotal,
  getTotalItems,
  incrementQuantity,
  RemoveFroToCart
} from '../../redux/cart/cartSlices';

export const CartDrawer = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { items } = useSelector((state: any) => state.cart)
  const { cartIsOpen } = useSelector((state: any) => state.ui)


  const handleAddToCart = (product: ICartProduct) => {
    if (product.quantity == product.inStock) return
    dispatch(incrementQuantity({
      ...product,
      quantity: (product.quantity + 1)
    }))
  }

  const handleRemoveToCart = (product: ICartProduct) => {
    if (product.quantity == 1) return
    dispatch(decrementQuantity({
      ...product,
      quantity: (product.quantity - 1)
    }))
  }

  const handleRemoveCartProduct = (product: ICartProduct) => {
    dispatch(RemoveFroToCart(product))
  }

  const handleCheckout = () => {
    dispatch(openCartMenu(false))
    router.push('/checkout/information')
  }

  useEffect(() => {
    if (items.length < 0) return
    setCookie(null, 'cart', JSON.stringify(items), {
      maxAge: 2592000,
      path: '/',
    })
  }, [items])

  return (
    <Drawer
      size='lg'
      isOpen={cartIsOpen}
      placement='right'
      onClose={() => dispatch(openCartMenu(false))}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottom='1px solid gray'>
          <Flex>
            <DrawerCloseButton top='12px' />
            <AiOutlineShoppingCart />
            <Text
              fontWeight={400}
              fontSize='16px'
              width='100%'
              textAlign='center'
            >
              {`Your Bag ${getTotalItems(items)}`}
            </Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody>

          {items.map((product: ICartProduct, i: number) => (
            <Box key={i}>
              <Box p='15px 0' >
                <Flex>
                  <Box
                    bgImage={`url(${product.image})`}
                    width='100%'
                    height='172px'
                    backgroundColor='#eee'
                    backgroundSize='cover'
                    backgroundPosition='50%'
                    backgroundRepeat='no-repeat'
                    maxWidth='115px'
                  />
                  <Box p='8px 16px'>
                    <Text>{product.title}</Text>
                    <Text
                      fontSize='13px'
                    >
                      {`Size: ${product.size} `}
                    </Text>
                    <Flex py={2} alignItems='center'>
                      <IconButton
                        onClick={() => handleRemoveToCart(product)}
                        size='sm'
                        aria-label='Plus'
                        icon={<AiOutlineMinus />}
                      />
                      <Text
                        w='40px'
                        textAlign='center'
                      >
                        {product.quantity}
                      </Text>
                      <IconButton
                        onClick={() => handleAddToCart(product)}
                        size='sm'
                        aria-label='Minus'
                        icon={<AiOutlinePlus />}
                      />
                    </Flex>
                    <Text>{`$${product.price.toFixed(2)}`}</Text>
                  </Box>
                  <Flex paddingTop='8px' justifyContent='end' flex={1} w='100%'>
                    <BsTrash onClick={() => handleRemoveCartProduct(product)} cursor='pointer' fill='red' size='16px' />
                  </Flex>
                </Flex>
              </Box>
              <Divider />
            </Box>
          ))}
        </DrawerBody>

        <DrawerFooter borderTop='1px solid gray' flexDir='column'>
          <Flex mb='15px' w='100%' justifyContent='space-between'>
            <Text>
              Subtotal
            </Text>
            <Text>
              ${getCartTotal(items)}
            </Text>
          </Flex>
          <Button
            disabled={items.length === 0}
            onClick={handleCheckout}
            _hover={{}}
            borderRadius={0}
            w='100%'
            backgroundColor='black'
            color='white'
          >
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent >
    </Drawer >
  )
}
