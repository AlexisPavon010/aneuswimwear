import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { db } from '../../../database'
import { IOrder } from '../../../interfaces'
import { Product } from '../../../models'
import Order from '../../../models/Order'

type Data = {
  message: string
}

export default function handlerOrder(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  switch (req.method) {
    case 'POST':
      return createApiOrder(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }

}
async function createApiOrder(req: NextApiRequest, res: NextApiResponse<any>) {
  const { orderItems, total } = req.body as IOrder;

  const session: any = await getSession({ req })
  await db.connect()

  if (!session) {
    return res.status(400).json({
      message: 'authentication is required'
    })
  }

  const productsIds = orderItems.map(product => product._id)
  const dbProducts = await Product.find({ _id: { $in: productsIds } }).lean()

  try {
    const subTotal = orderItems.reduce((prev, current) => {
      const currentPrice = dbProducts.find((p) => new mongoose.Types.ObjectId(p._id).toString() === current._id)?.price;
      if (!currentPrice) {
        throw new Error("the product does not exist in the cart");
      }

      return (current.price * current.quantity) + prev
    }, 0)

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
    const backendTotal = subTotal * (taxRate + 1)

    if (total !== backendTotal) {
      throw new Error("the costs of the products are not the same");
    }

    const userId = session.user.id
    const newOrder = new Order({ ...req.body, isPaid: false, user: userId })
    await newOrder.save()

    return res.status(201).json(newOrder)
  } catch (error: any) {
    console.log(error)
    return res.status(400).json({
      message: error.message || 'the costs of the products are not the same'
    })
  }
}