import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import formidable from 'formidable'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config(process.env.CLOUDINARY_URL || '');

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function uploadApi(req: NextApiRequest, res: NextApiResponse) {
  const session: any = await getSession({ req })

  if (session.user.role !== 'admin') {
    return res.status(401).send('Unauthorized')
  }

  switch (req.method) {
    case 'POST':
      return uploadFiles(req, res)
    case 'DELETE':
      return deletedFiles(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const saveFile = async (file: formidable.File): Promise<string> => {
  const { secure_url } = await cloudinary.uploader.upload(file.filepath, { folder: 'aneu' })
  return secure_url;
}

const parseFiles = (req: NextApiRequest): Promise<string> => {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm()

    form.parse(req, async (err, fiels, files) => {
      if (err) {
        return reject(err)
      }

      const url = await saveFile(files.file as formidable.File)
      resolve(url)
    })

  })
}

const uploadFiles = async (req: NextApiRequest, res: NextApiResponse) => {
  const imageUrl = await parseFiles(req)

  return res.status(200).json({ url: imageUrl })
}

const deletedFiles = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { id } = req.query as { id: string }

  const response = await cloudinary.uploader.destroy(`aneu/${id}`)
  return res.status(200).json({ message: response.result })
}

