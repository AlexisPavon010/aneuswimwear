import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { BsArrowLeft, BsCreditCard2Back } from "react-icons/bs"
import { ThemeProvider } from '@mui/material';
import Head from "next/head";
import moment from 'moment'
import useSWR from "swr"

import { IOrder } from "../../../interfaces"
import { lightTheme } from "../../../theme";
import { IUser } from "../../../interfaces/User";
import { useRouter } from "next/router";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'FullName', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  {
    align: 'center',
    field: 'total',
    headerName: 'Total',
    width: 100,
    renderCell: ({ row }) => {
      return `$${row.total.toFixed(2)}`
    }
  },
  {
    align: 'center',
    field: 'isPaid',
    width: 150,
    headerName: 'Pagada',
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
  {
    field: 'quantity', headerName: 'N° Products', align: 'center'
  },
  {
    field: 'createdAt',
    width: 200,
    headerName: 'Date',
    renderCell: ({ row }: any) => {
      return moment(row.createdAt).format('MM/DD/YYYY, h:mm:ss a')
    }
  },
  {
    align: 'center',
    field: 'check',
    width: 80,
    headerName: 'See',
    renderCell: ({ row }: any) => {
      return (
        <a href={`/dashboard/orders/${row._id}`} target='_blank' rel="noreferrer">
          ver
        </a>
      )
    }
  },
];


const OrdersPage = () => {
  const { data = [], error } = useSWR('/api/admin/orders')
  const router = useRouter()

  // if (!error && data.length <= 0) {
  //   return <FullLoadingScreen />
  // }

  const rows = data.map((order: IOrder, i: number) => ({
    id: i + 1,
    _id: order._id,
    name: (order.user as IUser).name!,
    email: (order.user as IUser).email!,
    total: order.total,
    isPaid: order.isPaid,
    quantity: order.numberOfItems,
    createdAt: order.createdAt
  }))

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Admin orders</title>
      </Head>
      <Flex p={4} align='center'>
        <ChakraLink onClick={() => router.push('/')}>
          <BsArrowLeft size='32px' />
        </ChakraLink>
        <Text
          ml={2}
          fontSize='24px'
          fontWeight={600}
        >
          {`Orders (${data.length})`}
        </Text>
      </Flex>
      <Box p='8px 8px 20px 8px'>
        <ThemeProvider theme={lightTheme}>
          <DataGrid
            headerHeight={40}
            rowHeight={56}
            disableSelectionOnClick
            autoHeight
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

export default OrdersPage