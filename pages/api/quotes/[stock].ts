// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const finnhub = require('finnhub');
const apiToken = process.env.QUOTES_API;
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = apiToken;
const finnhubClient = new finnhub.DefaultApi();

export const config = {
  api: {
    externalResolver: true,
  },
};

type Data = {
  method?: string | undefined,
  stock?: string| string[] | undefined,
  error?: any,
  data?: any,
  response?: any
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query: { stock } } = req;
  finnhubClient.quote(stock, (error: any, data: any, response: any) => {
    if (error) return res.status(202).json({ error });
    return res.status(200).json({ data, response });
  });
};

export default handler;
