import { db } from "."
import { Banner } from "../models"

export const getBanner = async () => {
  db.connect()

  const banner = await Banner.find().lean()

  return JSON.parse(JSON.stringify(banner[0]))
}
