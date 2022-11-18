import { isValidObjectId } from "mongoose"

import { IOrder } from "../interfaces"
import Order from "../models/Order"
import { db } from "."

export const getOrderById = async (id: string) => {

  if (!isValidObjectId(id)) {
    return null
  }

  await db.connect()

  const order = await Order.findById(id).lean()

  if (!order) {
    return null
  }

  return JSON.parse(JSON.stringify(order))
}


export const getOrdersByUser = async (id: string) => {

  if (!isValidObjectId(id)) {
    return []
  }

  await db.connect()

  const orders = await Order.find({ user: id }).sort({ createdAt: 'desc' }).lean()

  return JSON.parse(JSON.stringify(orders))
}