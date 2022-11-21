import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Banner } from "../../../models";

export default async function bannerHandler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return updateBanner(req, res)
    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

async function updateBanner(req: NextApiRequest, res: NextApiResponse<any>) {
  const { _id = '' } = req.body;
  try {
    await db.connect()
    const banner = await Banner.findByIdAndUpdate(_id, req.body, { new: true })
    return res.status(200).json(banner)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: 'Bad request'
    })
  }
}

