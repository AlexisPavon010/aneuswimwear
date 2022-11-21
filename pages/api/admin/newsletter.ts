import { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../database";
import { Newsletter } from "../../../models";

export default async function newsletterHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return updateNewsletter(req, res)
    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

async function updateNewsletter(req: NextApiRequest, res: NextApiResponse<any>) {
  const { _id = '' } = req.body;

  try {
    await db.connect()
    const newsletter = await Newsletter.findByIdAndUpdate(_id, req.body, { new: true })
    return res.status(200).json(newsletter)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'Bad request'
    })
  }
}