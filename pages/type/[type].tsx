import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { FilterMenu } from '../../components/FilterMenu'
import { ProductItem } from '../../components/Products'
import { IProduct } from '../../interfaces/Product'
import { getProductByType } from '../../database/dbProducts'

interface TopsProps {
  products: IProduct[];
}

const ProductsByType = ({ products }: TopsProps) => {
  const router = useRouter()
  const { type } = router.query
  const pathName = (type as string).split('?')[0]

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | {pathName}</title>
      </Head>
      <Box p='20px 30px'>
        <Box>
          <Text
            m='25px 0'
            textAlign='center'
            fontSize='70px'
          >
            {pathName}
          </Text>
          <Flex justifyContent='space-between'>
            <Flex h='80px' flex={1} justifyContent='center' alignItems='center'>
              <Text
                textAlign='center'
              >
                Tops
              </Text>
            </Flex>
            <Flex h='80px' flex={1} justifyContent='center' alignItems='center'>
              <Text
                textAlign='center'
              >
                Bottoms
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent='space-between'>
            <FilterMenu />
            <Box>
            </Box>
          </Flex>
        </Box>
        <Box p='36px 0'>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap='20px'>
            {products?.map((product, i) => (
              <ProductItem
                key={i}
                {...product}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box >
  )
}



export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {

  const products = await getProductByType(query as any)

  return {
    props: {
      products
    }
  }
}

export default ProductsByType;