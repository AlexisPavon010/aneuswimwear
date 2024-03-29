import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import moment from 'moment'

import templateHtml from '../../../emails/success.html'
import { getSession } from 'next-auth/react'


export default function handlerSuccess(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return sendEmail(req, res)

    default:
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req })
  const { _id, total, subTotal, numberOfItems, shippingAddress, shipping, orderItems, createdAt, discount } = req.body
  const { country, firsName, lastName, address, address2, zip, city, phone } = shippingAddress;
  const { price } = shipping;

  const CLIENT_ID = process.env.NEXT_PUBLIC_NODEMAILER_CLIENT_ID
  const CLIENT_SECRET = process.env.NODEMAILER_CLIENT_SECRET
  const REDIRECT_URI = process.env.NODEMAILER_REDIRECT_URL
  const REFRESH_TOKEN = process.env.NODEMAILER_REFRESH_TOKEN

  try {
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
      _id, country, firsName, lastName, address, address2, zip, city, phone,
      date: moment(createdAt).format('MM/DD/YYYY, h:mm:ss a'),
      total: total.toFixed(2),
      subTotal,
      numberOfItems,
      orderItems,
      shipping: Number(price).toFixed(2),
      isFree: total >= 200 ? true : false,
      discount: discount ? Number(discount).toFixed(2) : 0.00
    };
    const htmlToSend = template(replacements);
    const accessToken: any = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'aneuswimwearteam@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      to: [
        session.user.email,
        'aneuswimwearteam@gmail.com'
      ],
      subject: 'THANK YOU ANEU GIRL 🤍',
      html: htmlToSend
    };

    const response = await transport.sendMail(mailOptions);

    return res.status(200).json(response)

  } catch (error) {
    console.log(`<------${error}------>`)
    return res.status(400).json(error)
  }
}