import { resultEN } from '@/utils/result/result-en';
import summaryData from '@/utils/summarydata';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const something = req.body as result;
    if (req.method === 'POST') {
      const data = summaryData(something, "en");
      try {
        const result = await saveOnDatabase(data);
        return res.status(200).json(result);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong.' });
      }
    }
}

async function saveOnDatabase(data: summaryData) {
    const animal = data.animal as keyof typeof resultEN;

    try {
      const prisma = new PrismaClient();
      const res = await prisma.survey_results.create({
        data: {
          animal: animal,
        },
      });
      await prisma.$disconnect();
      return res;
    } catch (error) {
      console.error(error);
      return;
    }
}