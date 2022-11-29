import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";
import { Product } from "../../../models";

export default function handlerReview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return postReview(req, res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

async function postReview(req: NextApiRequest, res: NextApiResponse,) {
  const { id = '', rating, comment } = req.body;
  const session: any = await getSession({ req })

  try {
    db.connect()

    const product = await Product.findById(id)

    if (product) {
      const alredyReviewed = product.reviews.find(
        (r: any) => r.user.toString() === session.user.id
      )
      if (alredyReviewed) {
        return res.status(400).json({
          message: 'You have already written a review on this product'
        })
      }
      const review = {
        name: session.user.name,
        rating: Number(rating),
        comment,
        user: session.user.id
      }
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) /
        product.reviews.length

      await product.save()

      return res.status(200).json({
        message: 'success'
      })

    } else {
      return res.status(404).json({
        message: 'Product not Found'
      })
    }

  } catch (error) {
    return res.status(400).json(error)
  }
}
