import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link";

import { IProduct } from "../../interfaces/Product";

export const ProductItem = ({ images, title, price, slug, rating }: IProduct) => {

  const filterTitle = (title: string) => {
    if (title.length <= 20) return title;
    return title.slice(0, 20) + '...'
  }

  return (
    <Link href={`/product/${slug}`}>
      <Box
        height='100%'
        position='relative'
        borderRadius='6px'
      >
        <Box
          height='calc(80% - 25px)'
          overflow='hidden'
        >
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              borderRadius: '5px'
            }}
            alt={title}
            src={images[1].url}
            width={1000}
            height={1000}
          />
        </Box>
        <Box
          height='calc(80% - 25px)'
          overflow='hidden'
          transition='0.4s ease-out'
          position='absolute'
          top='0'
          _hover={{ opacity: 0 }}
        >
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              borderRadius: '5px'
            }}
            alt={title}
            width={1000}
            height={1000}
            src={images[0].url}
          />
        </Box>
        <Flex
          p='12px 8px'
          justifyContent='space-between'
        >
          <Text
            fontSize='14px'
          >
            {title}
          </Text>
          <Text>
            {`$ ${price.toFixed(2)}`}
          </Text>
        </Flex>
      </Box>
    </Link >
  )
}
