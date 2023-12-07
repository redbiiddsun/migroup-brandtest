import summaryData from '@/utils/summarydata';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let somthing: result = {
      BrandPerception: Number(req.body.BrandPerception),
      BrandValue: Number(req.body.BrandValue),
      MarketEngagement: Number(req.body.MarketEngagement),
      CustomerRelationship: Number(req.body.CustomerRelationship),
      ProductExcellence: Number(req.body.ProductExcellence),
    };

    const data = summaryData(somthing, "en");
    try {
      const prisma = new PrismaClient();
      const result = await prisma.result.create({
        data: {
            animal: data.animal,
        },
      });
      res.status(200).json({ result })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error' })
    }
  }
}