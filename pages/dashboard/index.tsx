import {
  Box,
  Link as ChakraLink,
  Flex,
  Text,
  SimpleGrid
} from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  AiOutlineClockCircle,
  AiOutlineCloseSquare,
  AiOutlineShoppingCart,
  AiOutlineUsergroupDelete
} from "react-icons/ai"
import {
  BsArrowLeft,
  BsCreditCard2Back
} from "react-icons/bs"
import {
  MdOutlineAttachMoney,
  MdOutlineCategory,
  MdOutlineCreditCardOff
} from "react-icons/md"
import useSWR from "swr"

import { SummaryTile } from "../../components/Admin"
import { FullLoadingScreen } from "../../components/FullLoadingScreen"

const DashboardPage = () => {
  const { data = {} as any, error } = useSWR<any>('/api/admin/dashboard', {
    refreshInterval: 30000
  })
  const [counterInterval, setCounterInterval] = useState(30)
  const router = useRouter()
  const {
    numberOfOrders,
    paidOrders,
    numberOfClients,
    numberOfProducts,
    productsWithNoInventory,
    lowInventory,
    notPaidOrders
  } = data!;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterInterval(refresh => refresh > 0 ? refresh - 1 : 30)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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

  if (!error && Object.keys(data).length === 0) {
    return <FullLoadingScreen />
  }

  return (
    <Box bgColor='#f8f9fa'>
      <Head>
        <title>Aneuswimwear | Dashboard</title>
      </Head>
      <Flex p='20px 20px' align='center'>
        <ChakraLink onClick={() => router.back()}>
          <BsArrowLeft size='32px' />
        </ChakraLink>
        <Text
          ml={2}
          fontWeight={600}
        >
          Dashboard
        </Text>
      </Flex>
      <Box p='10px 20px 40px 20px'>
        <SimpleGrid columns={{ base: 1, lg: 4 }} gap={{ base: '5', lg: '6' }}>
          <SummaryTile
            title={numberOfOrders}
            subTitle='Ordenes Totales'
            icon={<BsCreditCard2Back size='20px' color="purple" />}
            path='/dashboard/orders'
            color="#f6d4f6"
          />
          <SummaryTile
            title={paidOrders}
            subTitle='Ordenes Pagadas'
            icon={<MdOutlineAttachMoney size='20px' color="green" />}
            path='/dashboard/orders'
            color="#d1e7dd"
          />
          <SummaryTile
            title={notPaidOrders}
            subTitle='Ordenes Pendientes'
            icon={<MdOutlineCreditCardOff size='20px' color="red" />}
            path='/dashboard/orders'
            color="#febaba"
          />
          <SummaryTile
            title={numberOfClients}
            subTitle='Clientes'
            icon={<AiOutlineUsergroupDelete size='20px' />}
            path='/dashboard/users'
            color="#b7f3bb"
          />
          <SummaryTile
            title={numberOfProducts}
            subTitle='Productos'
            icon={<MdOutlineCategory size='20px' color="orange" />}
            path='/dashboard/products'
            color="#fff3cd"
          />
          <SummaryTile
            title={productsWithNoInventory}
            subTitle='Sin Existencias'
            color="#febaba"
            icon={<AiOutlineCloseSquare size='20px' color="red" />}
          />
          <SummaryTile
            title={lowInventory}
            subTitle='Bajo inventario'
            icon={<AiOutlineShoppingCart size='20px' color="orange" />}
            color="#fff3cd"
          />
          <SummaryTile
            title={counterInterval}
            subTitle='Actualizacion'
            icon={<AiOutlineClockCircle size='20px' color="blue" />}
            color="#cfe2ff"
          />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default DashboardPage