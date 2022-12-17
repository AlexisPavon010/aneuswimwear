import { isValidObjectId } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";
import { Product } from "../../../models";

export default async function productsApi(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })

  if (session.user.role !== 'admin') {
    return res.status(401).send('Unauthorized')
  }

  switch (req.method) {
    case 'GET':
      return getProducts(req, res)
    case 'POST':
      return createProduct(req, res)
    case 'PUT':
      return updateProduct(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }

}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()

  const products = await Product.find().sort({ title: 'asc' }).lean()

  return res.status(200).json(products)
}

const createProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { images = [] } = req.body;

  if (images.length < 2) {
    return res.status(400).json({
      message: 'at least 2 images are required'
    })
  }

  try {
    await db.connect()
    const product = new Product(req.body)
    await product.save()

    return res.status(201).json(product)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'internal server error plase talk with admin'
    })
  }
}

const updateProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id = '', images = [] } = req.body;

  if (!isValidObjectId(_id)) {
    return res.status(400).json({
      message: 'product id is not valid'
    })
  }

  if (images.length < 2) {
    return res.status(400).json({
      message: 'at least 2 images are required'
    })
  }

  try {
    await db.connect()
    const product = await Product.findByIdAndUpdate(_id, req.body, { new: true })

    if (!product) {
      return res.status(404).json({
        message: 'product was not found'
      })
    }

    return res.status(200).json(product)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'internal server error plase talk with admin'
    })
  }
}

