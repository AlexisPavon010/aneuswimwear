import { GetServerSideProps } from 'next'
import axios from 'axios'

import { Box, Drawer, DrawerOverlay, Spinner, Text } from '@chakra-ui/react'

import { successOrder } from '../../client/order'
import { Order } from '../../models'
import { db } from '../../database'

const OrderCompleted = () => {
  return (
    <Box height='100vh'>
      <Drawer
        isOpen={true}
        onClose={() => { }}>
        <DrawerOverlay
          flexDirection='column'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Spinner mb='25px' size='xl' color='blue.500' thickness='4px' speed='0.65s' />
          <Text>Comprobrando Transaccion</Text>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id, clientTransactionId: clientTxId } = query as { id: string, clientTransactionId: string }

  const token = process.env.NEXT_PUBLIC_PAYPHONE_TOKEN

  try {
    await db.connect()
    const { data } = await axios.post('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', {
      id,
      clientTxId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const dbOrder = await Order.findById(clientTxId)

    if (data.transactionStatus === 'Approved') {
      dbOrder.transactionId = id
      dbOrder.isPaid = true
      await dbOrder.save()
      await successOrder(dbOrder)
    }

    return {
      redirect: {
        destination: `/order/${clientTxId}`,
        permanent: false
      }
    }

  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

export default OrderCompleted;