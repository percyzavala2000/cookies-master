// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: {}
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
const data=req.cookies



  res.status(200).json({ name: data })
}
