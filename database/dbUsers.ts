import bcrypt from 'bcrypt'

import { db } from "."
import { User } from "../models"

export const checkUserEmailPassword = async (email: string, password: string) => {
  await db.connect();
  const user = await User.findOne({ email });

  if (!user) {
    return null
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return null
  }

  const { name, role, _id } = user;

  return {
    email: email.toLocaleLowerCase(),
    name,
    role,
    id: _id
  };
}


export const oAuthToDbUser = async (oAuthEmail: string, oAuthName: string) => {
  await db.connect();
  const user = await User.findOne({ email: oAuthEmail });

  if (user) {
    const { name, email, role, _id } = user;
    return { name, email, role, id: _id };
  }

  const newUser = new User({ email: oAuthEmail, name: oAuthName, password: '@', role: 'client' });
  await newUser.save();

  const { name, email, role, _id } = newUser;
  return { name, email, role, id: _id };
}
