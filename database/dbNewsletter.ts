import { db } from "."
import { Newsletter } from "../models"

export const getNewsletter = async () => {
  db.connect()
  
  const newsletter = await Newsletter.find()

  return JSON.parse(JSON.stringify(newsletter[0]))
}
