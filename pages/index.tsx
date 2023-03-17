import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { SlideProducts } from '../components/SlideProducts'
import { Categories } from '../components/Categories'
import { InstaFeed } from '../components/InstaFeed'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { IBanner, INewsletter, IProduct } from '../interfaces'
import { GetServerSideProps } from 'next'
import { dbProducts } from '../database'
import { getBanner } from '../database/dbBanner'
import { getNewsletter } from '../database/dbNewsletter'

interface HomeProps {
  news: IProduct[];
  banner: IBanner;
  newsletter: INewsletter;
  best_sellers: IProduct[];
}

export default function Home({ news, best_sellers, banner, newsletter }: HomeProps) {

  const Newsletter = dynamic(() =>
    import('../components/Newsletter').then((mod) => mod.Newsletter)
  )

  return (
    <>
      <Head>
        <title>Aneuswimwear | Bikini Shop</title>
        <meta
          name="description"
          content="Somos una marca de trajes de baño, simple, alegre y divertida. Nuestro propósito es llevarte prendas a la moda, cómodas y de ediciones limitadas."
        />
      </Head>

      <Box as='main'>
        <Banner banner={banner} />
        <Container maxW='1600px'>
          <SlideProducts title='NEW ARRIVALS' products={news} />
          <Categories />
          <SlideProducts title='BEST SELLERS' products={best_sellers} />
          {/* <InstaFeed />
          <WhatsAppButton /> */}
          {/* <Newsletter newsletter={newsletter} /> */}
        </Container>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

  const banner = await getBanner()
  const newsletter = await getNewsletter()
  const news = await dbProducts.getAllProductByGender('news')
  const best_sellers = await dbProducts.getAllProductByGender('best-seller')

  return {
    props: {
      news,
      banner,
      newsletter,
      best_sellers
    }
  }
}