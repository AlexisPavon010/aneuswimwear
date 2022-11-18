import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Tag, Text } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface CartButton {
  onClick: () => void
}

export const CartButton = ({ onClick }: CartButton) => {
  const { items } = useSelector((state: any) => state.cart)

  return (
    <Box position='relative'>
      <Tag
        variant='solid'
        colorScheme='green'
        onClick={onClick}
        cursor='pointer'
        pt={1}
        pb={1}
      >
        <AiOutlineShoppingCart size='20px' />
        <Text
          ml={1}
        >
          {items.length}
        </Text>
      </Tag>
    </Box >
  )
}
