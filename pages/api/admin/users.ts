import { isValidObjectId } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";
import { User } from "../../../models";

export default async function userApi(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })

  if (session.user.role !== 'admin') {
    return res.status(401).send('Unauthorized')
  }

  switch (req.method) {
    case 'GET':
      return getUsers(req, res)
    case 'PUT':
      return updateUser(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  await db.connect()
  const users = await User.find().select('-password').lean()

  res.status(200).json(users)
}

const updateUser = async (req: NextApiRequest, res: NextApiResponse<any>) => {

  const { id = '', role = '' } = req.body;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: 'User no with id not found' })
  }

  const validRoles = ['client', 'admin']
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'The role is not allowed in: ' + validRoles.join(', ') })
  }

  await db.connect()

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({ message: `user with id: ${id} was not found` })
  }

  user.role = role;
  await user.save()

  return res.status(200).json({ message: 'User updated successfully' })
}

