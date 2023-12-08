// prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma };

export type result_table = {
  id: number;
  elephant: number;
  lion: number;
  cheetah: number;
  swan: number;
  hawk: number;
  horse: number;
  labrador: number;
  turtle: number;
  butterfly: number;
  dolphin: number;
  panda: number;
  fox: number;
};
