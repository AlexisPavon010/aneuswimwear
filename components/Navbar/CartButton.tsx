import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Text } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface CartButton {
  onClick: () => void
}

export const CartButton = ({ onClick }: CartButton) => {
  const { items } = useSelector((state: any) => state.cart)

  return (
    <Flex align='center' onClick={onClick} >
      <AiOutlineShoppingCart size='20px' />
      <Text
        ml={1}
      >
        {items.length}
      </Text>
    </Flex>
  )
}
