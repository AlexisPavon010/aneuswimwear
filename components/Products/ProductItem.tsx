import { Box, Text } from "@chakra-ui/react"
import ReactStars from "react-rating-stars-component";
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
        boxShadow='0 1px 1px 0 rgb(0 0 0 / 10%), 0 -1px 2px 0 rgb(0 0 0 / 10%)'
      >
        <Box>
          <Image objectFit='cover' alt={title} src={images[1]} width={1000} height={1500} />
        </Box>
        <Box
          transition='0.4s ease-out'
          position='absolute'
          top='0'
          _hover={{ opacity: 0 }}
        >
          <Image objectFit='cover' alt={title} src={images[0]} width={1000} height={1500} />
        </Box>
        <Box
          p='12px 8px'
        >
          <Text
            fontSize='14px'
          >
            {title}
          </Text>
          <ReactStars
            value={rating}
            edit={false}
            size={16}
            activeColor="#ffd700"
          />
          <Text>
            {`$ ${price.toFixed(2)}`}
          </Text>
        </Box>
      </Box>
    </Link >
  )
}
