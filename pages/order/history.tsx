import { GetServerSideProps, NextPage } from "next";
import { Box, Text, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ThemeProvider } from "@mui/material";
import { Chip } from '@mui/material';
import { getSession } from "next-auth/react";
import NextLink from 'next/link'
import Head from "next/head";
import { BsArrowLeft, BsCreditCard2Back } from "react-icons/bs";
import { MdListAlt } from "react-icons/md";
import { useRouter } from "next/router";

import { getOrdersByUser } from "../../database/dbOrders";
import { IOrder } from "../../interfaces";
import { lightTheme } from "../../theme";

interface Props {
  orders: IOrder[]
}


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50, align: 'center' },
  { field: 'name', headerName: 'FullName', width: 150 },
  { field: 'address', headerName: 'Address', width: 300 },
  { field: 'phone', headerName: 'Phone', width: 100 },
  {
    width: 120,
    field: 'payment',
    headerName: 'Payment',
    renderCell: ({ row }: any) => {
      console.log(row)
      return row.isPaid
        ? (
          <Chip icon={<BsCreditCard2Back />} label="Success" color='success' variant="outlined" />
        )
        : (
          <Chip icon={<BsCreditCard2Back />} label="Pending" color='warning' variant="outlined" />
        )
    }
  },
  { field: 'total', headerName: 'Total', width: 100, renderCell: ({ row }) => (`$${row.total.toFixed(2)}`) },
  {
    width: 100,
    field: 'action',
    headerName: 'View order',
    renderCell: ({ row }) => (
      <NextLink href={`/order/${row._id}`} passHref>
        <Flex align='center'>
          <MdListAlt />
          <Text ml={2}>
            view
          </Text>
        </Flex>
      </NextLink>
    )
  },
];

const HistoryPage: NextPage<Props> = ({ orders }) => {
  const router = useRouter()
  console.log(orders)

  const rows = orders.map((order: IOrder, i: number) => ({
    id: i + 1,
    _id: order._id,
    name: `${order.shippingAddress.firsName} ${order.shippingAddress.lastName}`,
    address: `${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.country}, ${order.shippingAddress.zip}`,
    phone: order.shippingAddress.phone,
    payment: order.isPaid,
    total: order.total,
  }))

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Order History</title>
      </Head>
      <Flex p='12px 32px 0 32px'>
        <ChakraLink display='flex' alignItems='center' onClick={() => router.back()}>
          <BsArrowLeft size='32px' />
        </ChakraLink>
        <Text
          ml={2}
          fontSize='24px'
          fontWeight={600}
        >
          {`My Orders (${orders.length})`}
        </Text>
      </Flex>
      <Box p='8'>
        <ThemeProvider theme={lightTheme}>
          <DataGrid
            headerHeight={40}
            rowHeight={56}
            disableSelectionOnClick
            autoHeight
            disableColumnMenu
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[1]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </ThemeProvider>
      </Box>
    </Box>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session: any = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin?p=/order/history',
        permanent: false,
      }
    }
  }

  const orders = await getOrdersByUser(session.user._id)

  return {
    props: {
      orders
    }
  }
}

export default HistoryPage;