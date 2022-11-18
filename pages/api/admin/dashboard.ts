import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

import { db } from "../../../database"
import { Product, User } from "../../../models"
import Order from "../../../models/Order"

export default async function dashboardApi(req: NextApiRequest, res: NextApiResponse) {
  await db.connect()

  const session: any = await getSession({ req })

  if (session.user.role !== 'admin') {
    return res.status(401).send('Unauthorized')
  }

  const [
    numberOfOrders,
    paidOrders,
    numberOfClients,
    numberOfProducts,
    productsWithNoInventory,
    lowInventory,
  ] = await Promise.all([
    Order.count(),
    Order.find({ isPaid: true }).count(),
    User.find({ role: 'client' }).count(),
    Product.count(),
    Product.find({ inStock: 0 }).count(),
    Product.find({ inStock: { $lte: 10 } }).count(),
  ])

  return res.status(200).json({
    numberOfOrders,
    paidOrders,
    numberOfClients,
    numberOfProducts,
    productsWithNoInventory,
    lowInventory,
    notPaidOrders: numberOfOrders - paidOrders
  })
}