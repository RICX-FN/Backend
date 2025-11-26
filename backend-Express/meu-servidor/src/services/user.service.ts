import { prisma } from "../database/prisma";

// Listar usuários
export const listUsersService = async () => {
  return await prisma.user.findMany();
};

// Criar usuário
export const createUserService = async (nome: string, email: string) => {
  return await prisma.user.create({
    data: { nome, email }
  });
};
