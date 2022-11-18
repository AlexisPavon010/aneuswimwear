import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";
import Order from "../../../models/Order";

export default async function ordersApi(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })

  if (session.user.role !== 'admin') {
    return res.status(401).send('Unauthorized')
  }

  switch (req.method) {
    case 'GET':
      return getOrders(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getOrders = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()

  const orders = await Order.find()
    .sort({ createdAt: 'desc' })
    .populate('user', 'name email')
    .lean()

  return res.status(200).json(orders)
}