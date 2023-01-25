import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { AiOutlineHeart } from "react-icons/ai";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Head from 'next/head';
import NextLink from 'next/link';
import { setCookie, parseCookies } from 'nookies';
import PortableText from 'react-portable-text';

import { ItemCounter } from '../../components/Products/ItemCounter';
import { SizeSelected } from '../../components/Products/SizeSelected';
import { addToCart } from '../../redux/cart/cartSlices';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces/Product';
import { ICartProduct } from '../../interfaces';
import { openCartMenu } from '../../redux/ui/uiSlice';
import { SlideProducts } from '../../components/SlideProducts';
import { InstaSlider } from '../../components/InstaSlider';
import { sanityClient } from '../../sanity';

interface Props {
  product: IProduct;
  best_sellers: IProduct[];
  pageInfo: any;
}

const ProductPage: NextPage<Props> = ({ product, best_sellers, pageInfo }) => {
  const [previewImage, setPreviewImage] = useState<any>(0)
  const [bottomSizeSelected, setBottomSizeSelected] = useState<any>('M')
  const [topSizeSelected, setTopSizeSelected] = useState<any>('M')
  const [count, setCounter] = useState(1)
  const { items } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const [temProduct, setTempProduct] = useState<ICartProduct>({
    _id: product._id,
    quantity: count,
    topSize: topSizeSelected,
    bottomSize: bottomSizeSelected,
    description: product.description,
    image: product.images[0].url,
    inStock: product.inStock,
    price: product.price,
    slug: product.slug,
    tags: product.tags,
    title: product.title,
    type: product.type,
    gender: product.gender,
    customization: ''
  })

  const selectedTopSize = (topSize: string) => {
    setTopSizeSelected(topSize)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      topSize
    }))
  }

  const selectedBottomSize = (bottomSize: string) => {
    setBottomSizeSelected(bottomSize)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      bottomSize
    }))
  }

  const setQuantity = (quantity: number) => {
    setCounter(quantity)
    setTempProduct((state: ICartProduct) => ({
      ...state,
      quantity
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
    if (!temProduct.topSize) return

    const productInCart = items.some((p: ICartProduct) => p._id === product._id)

    if (!productInCart) {
      dispatch(openCartMenu(true))
      return dispatch(addToCart([...items, temProduct]))
    }

    const pproductInCartButDifferentSize = items.some((p: ICartProduct) => p._id === product._id && p.topSize === temProduct.topSize)

    if (!pproductInCartButDifferentSize) {
      dispatch(openCartMenu(true))
      return dispatch(addToCart([...items, temProduct]))
    }

    const updateProduct = items.map((p: ICartProduct) => {
      if (p._id !== temProduct._id) return p
      if (p.topSize !== temProduct.topSize) return p

      return {
        ...p,
        quantity: (temProduct.quantity + p.quantity)
      }
    })

    dispatch(addToCart(updateProduct))
    dispatch(openCartMenu(true))
  }

  return (
    <Box>
      <Head>
        <title>
          {`${product.title} - Aneuswimwear`}
        </title>
        <meta name="og:title" content={product.title} />
        <meta name="description" content={product.description} />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={product.images[0].url} />
      </Head>
      <Container maxW='1440px'>
        <Box>
          <Breadcrumb p={{ base: '12px 0', md: '12px 16px' }}>
            <BreadcrumbItem>
              <NextLink href='/'>Home</NextLink>
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
              {product.images.map(({ url }: { url: string }, i) => (
                <Box p='0px 8px 8px 8px' key={i}>
                  <Image style={{ border: i == previewImage ? '1px solid #3182ce' : '' }} src={url} alt='image' objectFit='cover' height={1500} width={1200} />
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
                initialSlide={0}
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                onSlideChange={({ realIndex }) => setPreviewImage(realIndex)}
              >
                {product.images.map(({ url }: { url: string }, i) => (
                  <SwiperSlide key={i}>
                    <Image src={url} alt="preview" objectFit='cover' width={1200} height={1500} />
                  </SwiperSlide>
                ))}
              </Swiper>

            </GridItem>
            <GridItem p={{ base: '8px 0', md: '0 16px', lg: '0px 24px' }} colSpan={{ base: 12, md: 6, lg: 5 }} >
              <Flex direction='column'>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Text
                    as='h1'
                    fontSize={{ base: '16px', md: '24px' }}
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



                <Box my={2}>
                  <Flex justify='space-between'>
                    <Text>
                      Top Size:
                    </Text>
                    <NextLink href='/about/size-guide'>
                      Size Guide
                    </NextLink>
                  </Flex>
                  <SizeSelected
                    sizes={product.sizes}
                    selectedSize={topSizeSelected}
                    onSelectedSize={(size) => selectedTopSize(size)}
                  />
                </Box>

                <Box my={2}>
                  <Text>
                    Bottom Size:
                  </Text>
                  <SizeSelected
                    sizes={product.sizes}
                    selectedSize={bottomSizeSelected}
                    onSelectedSize={(size) => selectedBottomSize(size)}
                  />
                </Box>

                <Box>
                  <Text
                    mb={2}
                    fontWeight={600}
                  >
                    CUSTOMIZE YOUR ANEU
                  </Text>
                  <PortableText
                    content={pageInfo.body}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    serializers={{
                      normal: (props: any) => (
                        <p style={{ marginBottom: '16px' }} {...props} />
                      )
                    }}
                  />
                  <Textarea
                    placeholder='Hola! Quisiera este bikini en color Cherry'
                    onChange={({ target }) => setTempProduct({
                      ...temProduct,
                      customization: target.value
                    })}
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
                    mb={2}
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
          <Divider />
          <InstaSlider />
          <Divider />
        </Box>
        <SlideProducts title='Our Favorites 🤍' products={best_sellers} />
        {/* <Divider />
        <RatingComponent product={product} /> */}
      </Container>
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

  const query = groq`
    *[_type == 'customization'][0]{
      body
    }
  `

  const pageInfo = await sanityClient.fetch(query)
  const product = await dbProducts.getProductBySlug(slug)
  const best_sellers = await dbProducts.getAllProductByGender('best_sellers')

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
      product,
      pageInfo,
      best_sellers
    },
    revalidate: 60
  }
}

export default ProductPage;