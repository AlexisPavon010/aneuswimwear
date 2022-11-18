import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Stack, Tag, TagLabel, Text, useMediaQuery } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { AiOutlineHeart } from "react-icons/ai";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { setCookie, parseCookies } from 'nookies';

import { ItemCounter } from '../../components/Products/ItemCounter';
import { SizeSelected } from '../../components/Products/SizeSelected';
import { addToCart } from '../../redux/cart/cartSlices';
import { ColorSelected } from '../../components/Products';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces/Product';
import { ICartProduct } from '../../interfaces';
import { openCartMenu } from '../../redux/ui/uiSlice';

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [color, setColor] = useState(0)
  const [topSizeSelected, setTopSizeSelected] = useState<any>('M')
  const [sizeSelected, setSizeSelected] = useState<any>('M')
  const [count, setCounter] = useState(1)
  const { items } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const [temProduct, setTempProduct] = useState<ICartProduct>({
    _id: product._id,
    quantity: count,
    size: sizeSelected,
    color: [0],
    description: product.description,
    image: product.images[0],
    inStock: product.inStock,
    price: product.price,
    slug: product.slug,
    tags: product.tags,
    title: product.title,
    type: product.type,
    gender: product.gender,
  })


  const selectedSize = (size: string) => {
    console.log(sizeSelected)
    setSizeSelected(size)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      size
    }))
  }

  const setQuantity = (quantity: number) => {
    setCounter(quantity)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      quantity
    }))
  }

  const colorSelected = (color: number) => {
    setColor(color)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      color: [color]
    }))
  }

  useEffect(() => {
    const cookies = parseCookies()
    try {
      const cartCookies = cookies.cart ? JSON.parse(cookies.cart) : []
      dispatch(addToCart(cartCookies))
    } catch (error) {
      dispatch(addToCart([]))
    }
  }, [])


  useEffect(() => {
    if (items.length < 0) return
    setCookie(null, 'cart', JSON.stringify(items), { path: '/', })
  }, [items])

  const addProductToCart = () => {
    if (!temProduct.size) return

    const productInCart = items.some((p: ICartProduct) => p._id === product._id)

    if (!productInCart) {
      dispatch(openCartMenu(true))
      return dispatch(addToCart([...items, temProduct]))
    }

    const pproductInCartButDifferentSize = items.some((p: ICartProduct) => p._id === product._id && p.size === temProduct.size)

    if (!pproductInCartButDifferentSize) {
      dispatch(openCartMenu(true))
      return dispatch(addToCart([...items, temProduct]))
    }

    const updateProduct = items.map((p: ICartProduct) => {
      if (p._id !== temProduct._id) return p
      if (p.size !== temProduct.size) return p

      return {
        ...p,
        quantity: (temProduct.quantity + p.quantity)
      }
    })

    dispatch(addToCart(updateProduct))
    dispatch(openCartMenu(true))
  }

  return (
    <Box p='0 24px'>

      <Head>
        <title>
          {`${product.title} - Aneuswimwear`}
        </title>
        <meta name="og:title" content={product.title} />
        <meta name="description" content={product.description} />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={product.images[0]} />
      </Head>

      <Breadcrumb p='12px 16px'>
        <BreadcrumbItem>
          <Link href='/'>Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            {product.title.toLocaleLowerCase()}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Grid
        templateColumns='repeat(12, 1fr)'
      >
        <GridItem display={{ base: 'none', lg: 'block' }} dir="column">
          {product.images.map((url: string, i: number) => (
            <Box p='0px 8px 8px 8px' key={i}>
              <Image src={url} alt='image' objectFit='cover' height={1500} width={1200} />
            </Box>
          ))}
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 6 }}
        >
          <Swiper
            pagination={{
              clickable: true,
            }}
            initialSlide={1}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            onSlideChange={({ realIndex }) => console.log(realIndex)}
          >
            {product.images.map((url: string, i: number) => (
              <SwiperSlide key={i}>
                <Image src={url} alt="preview" objectFit='cover' width={1200} height={1500} />
              </SwiperSlide>
            ))}
          </Swiper>

        </GridItem>
        <GridItem p={{ base: '8px', md: '0 16px', lg: '0px 24px' }} colSpan={{ base: 12, md: 6, lg: 5 }} >
          <Flex direction='column'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text
                as='h1'
                fontSize='24px'
                fontWeight={400}
              >
                {product.title}
              </Text>
              <AiOutlineHeart size='24px' />
            </Flex>
            <Text
              as='h2'
              fontWeight={400}
            >
              {`$${product.price.toFixed(2)}`}
            </Text>
            <Box
              my={4}
            >
              <Text as='h3'>
                Quantity
              </Text>
              <ItemCounter
                count={count}
                maxCount={product.inStock}
                setCounter={setQuantity}
              />
            </Box>

            <Box>
              <Text>
                Color:
              </Text>
              <ColorSelected
                setColorSelected={colorSelected}
                colorSelected={color}
              />
            </Box>

            <Box my={2}>
              <Text>
                Top Size:
              </Text>
              <SizeSelected
                sizes={product.sizes}
                selectedSize={topSizeSelected}
                onSelectedSize={(size) => setTopSizeSelected(size)}
              />
            </Box>

            <Box my={2}>
              <Text>
                Bottom Size:
              </Text>
              <SizeSelected
                sizes={product.sizes}
                selectedSize={sizeSelected}
                onSelectedSize={(size) => selectedSize(size)}
              />
            </Box>

            <Button
              my={2}
              color='white'
              background='#000'
              disabled={product.inStock === 0}
              _hover={{}}
              onClick={addProductToCart}
            >
              Agregar Al Carrito
            </Button>

            <Box py={2}>
              <Text
                fontWeight={600}
              >
                Descripcion:
              </Text>
              <Text>
                {product.description}
              </Text>
            </Box>

          </Flex>
        </GridItem>
      </Grid>

    </Box >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = await dbProducts.getAllProductSlug()

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }

  const product = await dbProducts.getProductBySlug(slug)

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 86400
  }
}

export default ProductPage;