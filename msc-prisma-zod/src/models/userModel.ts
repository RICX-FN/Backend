import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

export const userModel = {
  create: (data: any) => prisma.user.create({ data }),
  findAll: () => prisma.user.findMany(),
  findById: (id: number) => prisma.user.findUnique({ where: { id } }),
  update: (id: number, data: any) =>
    prisma.user.update({ where: { id }, data }),
  delete: (id: number) => prisma.user.delete({ where: { id } }),
};
