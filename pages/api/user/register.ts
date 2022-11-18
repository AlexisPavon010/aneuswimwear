import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt'

import { db } from "../../../database"
import { User } from "../../../models"
import { signToken } from "../../../utils"

export default function userRegister(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return registerUser(req, res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, name } = req.body as { email: string, password: string, name: string };

    await db.connect()
    const user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ message: 'the email is already registered' })
    }

    const newUser = new User({
      name,
      role: 'client',
      email: email.toLowerCase(),
      password: bcrypt.hashSync(password, 10),
    })

    try {
      await newUser.save({ validateBeforeSave: true })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Internal server error check logs [Auth - api]'
      })
    }

    const { _id, role } = newUser;

    return res.status(200).json({
      token: signToken(_id, email, role),
      email,
      name,
      role: 'client',
      _id
    })

  } catch (error: any) {
    console.log(error)
    res.status(400).json({
      hasError: true,
      errors: error.errors
    })
  }
}
