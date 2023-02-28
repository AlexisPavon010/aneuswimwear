import { NextApiRequest, NextApiResponse } from "next"
import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import jwt from "jsonwebtoken";

import { db } from "../../../database";
import { User } from "../../../models";
import templateHtml from '../../../emails/recovery-password.html'

export default function handlerRecoveryPassword(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return sendEmail(req, res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse<any>) {
  const { email } = req.body

  const CLIENT_ID = process.env.NEXT_PUBLIC_NODEMAILER_CLIENT_ID
  const CLIENT_SECRET = process.env.NODEMAILER_CLIENT_SECRET
  const REDIRECT_URI = process.env.NODEMAILER_REDIRECT_URL
  const REFRESH_TOKEN = process.env.NODEMAILER_REFRESH_TOKEN

  try {

    await db.connect()

    const user = await User.findOne({ email }).lean()

    if (!user) {
      return res.status(404).json({
        message: 'Username does not exist'
      })
    }

    const token = jwt.sign({ id: user._id }, process.env.AUTH_JWT_SECRET!, { expiresIn: '30d' })

    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN
    })

    const template = handlebars.compile(templateHtml);
    const replacements = {
      username: user.name,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password/?token=${token}`
    };
    const htmlToSend = template(replacements);
    const accessToken: any = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'themaster034@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: {
        name: 'Aneu Swimwear',
        address: 'aneuswimwearteam@gmail.com'
      },
      to: email,
      subject: 'Password reset request',
      text: 'Password reset request',
      html: htmlToSend,
    };

    const response = await transport.sendMail(mailOptions);

    return res.status(200).json(response)

  } catch (error) {
    console.log(`<------${error}------>`)
    return res.status(400).json(error)
  }
}