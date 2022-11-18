import nookies from 'nookies'
import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { User } from '../models';
import { db } from '../database';

interface User {
  name: string;
  email: string;
  role: string;
  _id: string;
}

export const verifyUserRoles: any = async (ctx: any) => {

  await db.connect()

  const { token } = nookies.get(ctx)


  if (!token) return null

  const serviceAccount = require('../admin-credentials.json')

  const FirebaseApp = getApps().length ? getApp() : initializeApp({
    credential: cert(serviceAccount)
  })
  const FirebaseAuth = getAuth(FirebaseApp)
  const userFirebase = await FirebaseAuth.verifyIdToken(token)

  if (!userFirebase) return null

  const userDb = await User.findOne({ email: userFirebase.email }).lean()

  const { name, email, role, _id } = userDb;

  return { name, email, role, _id: _id.toString(), token }
}
