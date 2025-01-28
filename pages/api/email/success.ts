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

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: any = await getSession({ req });
  const {
    _id, total, subTotal, numberOfItems, shippingAddress, shipping,
    orderItems, createdAt, discount
  } = req.body;

  const { country, firstName, lastName, address, address2, zip, city, phone } = shippingAddress || {};
  const { price } = shipping || {};

  const CLIENT_ID = process.env.NEXT_PUBLIC_NODEMAILER_CLIENT_ID;
  const CLIENT_SECRET = process.env.NODEMAILER_CLIENT_SECRET;
  const REDIRECT_URI = process.env.NODEMAILER_REDIRECT_URL;
  const REFRESH_TOKEN = process.env.NODEMAILER_REFRESH_TOKEN;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI || !REFRESH_TOKEN) {
    return res.status(500).json({ message: "Email configuration is incomplete." });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const template = handlebars.compile(templateHtml);
    const replacements = {
      _id, country, firstName, lastName, address, address2, zip, city, phone,
      date: moment(createdAt).format('MM/DD/YYYY, h:mm:ss a'),
      total: formatCurrency(total),
      subTotal: formatCurrency(subTotal),
      numberOfItems,
      orderItems,
      shipping: formatCurrency(price),
      isFree: total >= 200,
      discount: discount ? formatCurrency(discount) : '0.00',
    };
    const htmlToSend = template(replacements);
    const { token }: any = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'aneuswimwearteam@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: token,
      },
    });

    const mailOptions = {
      to: [session.user.email, 'aneuswimwearteam@gmail.com'],
      subject: 'THANK YOU ANEU GIRL 🤍',
      html: htmlToSend,
    };

    const response = await transport.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully', response });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
};