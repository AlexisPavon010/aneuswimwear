import jwt from 'jsonwebtoken'

export const signToken = (_id: string, email: string, role: string) => {
  if (!process.env.AUTH_JWT_SECRET) {
    throw new Error("Invalid variable JWT");
  }

  return jwt.sign(
    { _id, email, role },
    process.env.AUTH_JWT_SECRET,
    { expiresIn: '30d' }
  )

}