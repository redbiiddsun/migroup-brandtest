import { resultTH } from '@/utils/result/result-th';
import summaryData from '@/utils/summarydata';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { result_table } from '../../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const something = req.body as result;
    if (req.method === 'POST') {
      const data = summaryData(something, "en");
      try {
        const result = await saveOnDatabase(data);
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
      }
    }
}

async function saveOnDatabase(data: summaryData) {
    const animal = data.animal as keyof typeof resultTH;
    let res: result_table;

    try {
      const prisma = new PrismaClient();
      switch (animal) {
        case 'Elephant':
          res = await prisma.result.create({
            data: {
              elephant: 1,
            },
          });
          return res;
        case 'Lion':
          res = await prisma.result.create({
            data: {
              lion: 1,
            },
          });
          return res;
        case 'Cheetah':
          res = await prisma.result.create({
            data: {
              cheetah: 1,
            },
          });
          return res;
        case 'Swan':
          res = await prisma.result.create({
            data: {
              swan: 1,
            },
          });
          return res;
        case 'Hawk':
          res = await prisma.result.create({
            data: {
              hawk: 1,
            },
          });
          return res;
        case 'Horse':
          res = await prisma.result.create({
            data: {
              horse: 1,
            },
          });
          return res;
        case 'Labrador':
          res = await prisma.result.create({
            data: {
              labrador: 1,
            },
          });
          return res;
        case 'Turtle':
          res = await prisma.result.create({
            data: {
              turtle: 1,
            },
          });
          return res;
        case 'Butterfly':
          res = await prisma.result.create({
            data: {
              butterfly: 1,
            },
          });
          return res;
        case 'Dolphin':
          res = await prisma.result.create({
            data: {
              dolphin: 1,
            },
          });
          return res;
        case 'Panda':
          res = await prisma.result.create({
            data: {
              panda: 1,
            },
          });
          return res;
        case 'Fox':
          res = await prisma.result.create({
            data: {
              fox: 1,
            },
          });
          return res;
        default:
          console.log('This animal is not in the list, please check again.');
          return;
      }
    } catch (error) {
      console.error(error);
    }
}