import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link";

import { IProduct } from "../../interfaces/Product";

export const ProductItem = ({ images, title, price, slug, rating }: IProduct) => {

  console.log({ images, title, price, slug, rating })

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
        boxShadow='0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%)'
      >
        <Box
          height='calc(80% - 25px)'
          overflow='hidden'
        >
          <Image objectFit='cover' alt={title} src={images[1].url} width={320} height={480} />
        </Box>
        <Box
          height='calc(80% - 25px)'
          overflow='hidden'
          transition='0.4s ease-out'
          position='absolute'
          top='0'
          _hover={{ opacity: 0 }}
        >
          <Image objectFit='cover' alt={title} src={images[0].url} width={320} height={480} />
        </Box>
        <Box
          p='12px 8px'
        >
          <Text
            fontSize='14px'
          >
            {title}
          </Text>
          <Text>
            {`$ ${price.toFixed(2)}`}
          </Text>
        </Box>
      </Box>
    </Link >
  )
}
