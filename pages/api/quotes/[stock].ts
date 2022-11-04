// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const finnhub = require('finnhub');
const apiToken = 'bv4mnbf48v6qpate9n30'; // I would never display a token like this!
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = apiToken;
const finnhubClient = new finnhub.DefaultApi()

export const config = {
  api: {
    externalResolver: true,
  },
}

type Data = {
  method?: string | undefined,
  stock?: string| string[] | undefined,
  error?: any,
  data?: any,
  response?: any
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query: { stock } } = req;
  try {
    finnhubClient.quote(stock, (error: any, data: any, response: any) => {
      if (error) return res.status(202).json({ error });
      return res.status(200).json({ data, response });
    });
  } catch (e) {
    return res.status(201).json({ error: e });
  }
};

export default handler;
