import { Box, Button, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CardMedia, Link } from '@mui/material';
import { BsArrowLeft } from "react-icons/bs";
import { ThemeProvider } from '@mui/material';
import { useRouter } from "next/router";
import NextLink from 'next/link';
import Head from "next/head";
import useSWR from "swr";

import { FullLoadingScreen } from "../../../components/FullLoadingScreen";
import { IProduct } from "../../../interfaces/Product";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { lightTheme } from "../../../theme";

const columns: GridColDef[] = [
  {
    field: 'img',
    headerName: 'Image',
    renderCell: ({ row }) => {
      console.log(row)
      return (
        <a href={`/product/${row.slug}`} target='_blank' rel="noreferrer">
          <CardMedia
            component='img'
            image={row.img}
            alt={row.title}
          />
        </a>
      )
    }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 280,
    renderCell: ({ row }) => (
      <NextLink href={`/dashboard/products/${row.slug}`} passHref>
        <Link>
          {row.title}
        </Link>
      </NextLink>
    )
  },
  { field: 'gender', headerName: 'Gender' },
  { field: 'type', headerName: 'Type' },
  { field: 'tags', headerName: 'Tags', width: 250 },
  { field: 'inStock', headerName: 'Inventory' },
  { field: 'price', headerName: 'Price', renderCell: ({ row }) => `$${row.price.toFixed(2)}` },
  { field: 'sizes', headerName: 'Sizes', width: 250 },
];


const ProductsPage = () => {
  const { data = [], error } = useSWR('/api/admin/products')
  const router = useRouter()

  if (error) {
    console.log(error)
    return (
      <Box p='50px 20px' h='50vh'>
        <Text
          fontSize='24px'
          textAlign='center'
        >
          Error al cargar la informacion
        </Text>
      </Box>
    )
  }


  if (!error && data.length <= 0) {
    return <FullLoadingScreen />
  }

  const rows = data.map((product: IProduct, i: number) => ({
    id: i + 1,
    img: product.images[0],
    title: product.title,
    gender: product.gender,
    type: product.type,
    tags: product.tags,
    slug: product.slug,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes.join(', '),
  }))

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Product list</title>
      </Head>
      <Flex p={4} justifyContent='space-between' >
        <Flex>
          <ChakraLink display='flex' alignItems='center' onClick={() => router.back()}>
            <BsArrowLeft size='32px' />
          </ChakraLink>
          <Text
            ml={2}
            fontSize='24px'
            fontWeight={600}
          >
            {`Products (${data.length})`}
          </Text>
        </Flex>
        <Button onClick={() => router.push('/dashboard/products/new')} leftIcon={<AiOutlinePlusCircle />} variant='solid'>
          Add product
        </Button>
      </Flex>
      <Box p={4}>
        <ThemeProvider theme={lightTheme}>
          <DataGrid
            headerHeight={40}
            rowHeight={56}
            disableSelectionOnClick
            autoHeight
            // disableColumnMenu
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[1]}
            // checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
          />
        </ThemeProvider>
      </Box>
    </Box>
  )
}

export default ProductsPage;