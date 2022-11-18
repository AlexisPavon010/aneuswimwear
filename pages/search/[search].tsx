import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { FilterMenu } from '../../components/FilterMenu'
import { ProductItem } from '../../components/Products'
import { getProductByTerm } from '../../database/dbProducts'
import { IProduct } from '../../interfaces/Product'

interface SearchPageProps {
  products: IProduct[]
}

const SearchPage = ({ products }: SearchPageProps) => {
  const router = useRouter()
  const { search = '' } = router.query as { search: string };
  const [tag, params] = search.substring(search.lastIndexOf('/') + 1).split('?')

  return (
    <Box>
      <Box p='20px 30px'>
        <Box>
          <Text
            m='25px 0'
            textAlign='center'
            fontSize='30px'
          >
            {`Search results '${tag}'`}
          </Text>
          <Flex justifyContent='space-between'>
            <FilterMenu />
            <Box>
            </Box>
          </Flex>
        </Box>
        <Box p='36px 0'>
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: '5', md: '6' }}>
            {products.map((product, i) => (
              <ProductItem key={i} {...product} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const products = await getProductByTerm(query as any)

  return {
    props: {
      products
    }
  }
}

export default SearchPage