
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body
    const insructions = "Hello World"
    res.send(insructions)
}


