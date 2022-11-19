import Head from 'next/head'
import { Box } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { SlideProducts } from '../components/SlideProducts'
import { Categories } from '../components/Categories'
import { InstaFeed } from '../components/InstaFeed'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { IProduct } from '../interfaces'
import { GetServerSideProps } from 'next'
import { dbProducts } from '../database'
import { Newsletter } from '../components/Newsletter'

interface HomeProps {
  news: IProduct[];
  best_sellers: IProduct[];
}

export default function Home({ news, best_sellers }: HomeProps) {
  return (
    <>
      <Head>
        <title>Aneuswimwear | Bikini Shop</title>
        <meta
          name="description"
          content="Somos una marca de trajes de baño, simple, alegre y divertida. Nuestro propósito es llevarte prendas a la moda, cómodas y de ediciones limitadas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as='main'>
        <Banner />
        <SlideProducts title='New arrivals' products={news} />
        <Categories />
        <SlideProducts title='Best sellers' products={best_sellers} />
        <InstaFeed />
        <WhatsAppButton />
        <Newsletter />
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const news = await dbProducts.getAllProductByGender('new')
  const best_sellers = await dbProducts.getAllProductByGender('best_sellers')

  return {
    props: {
      news,
      best_sellers
    }
  }
}