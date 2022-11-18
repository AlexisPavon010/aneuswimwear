import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FilterMenu } from '../../components/FilterMenu'

import { ProductItem } from '../../components/Products'
import { getProductByTags } from '../../database/dbProducts'
import { IProduct } from '../../interfaces/Product'

interface TopsProps {
  products: IProduct[];
}

const Tops = ({ products }: TopsProps) => {
  const router = useRouter()
  const { collection } = router.query
  const pathName = (collection as string).split('?')[0]

  return (
    <Box>
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
            {products.map((product, i) => (
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

  const products = await getProductByTags(query as any)

  return {
    props: {
      products
    }
  }
}

export default Tops