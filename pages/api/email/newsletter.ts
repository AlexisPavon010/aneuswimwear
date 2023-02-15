import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import { groq } from "next-sanity";
import { getSession } from "next-auth/react";

import templateHtml from '../../../emails/newsletter.html'
import { sanityClient } from "../../../sanity";

export default function handlerNewsletter(req: NextApiRequest, res: NextApiResponse) {
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
  const { email } = req.body
  const session: any = await getSession({ req })

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

    const query = groq`
    *[_type == 'coupons'][0]{
      couponNumber,
      discount
    }
    `

    const data = await sanityClient.fetch(query)

    const template = handlebars.compile(templateHtml);
    const replacements = {
      code: data?.couponNumber,
      discount: data?.discount
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
      to: email,
      subject: 'Hello!',
      html: htmlToSend
    };

    const response = await transport.sendMail(mailOptions);

    return res.status(200).json(response)

  } catch (error) {
    console.log(`<------${error}------>`)
    return res.status(400).json(error)
  }
}