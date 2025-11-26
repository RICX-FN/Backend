import { prisma } from "../config/prisma";

class UserService {
  async createUser(name: string, email: string) {
    const exists = await prisma.user.findUnique({ where: { email } });

    if (exists) throw new Error("User already exists");

    return prisma.user.create({
      data: { name, email }
    });
  }

  async getUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, name: string, email: string) {
    return prisma.user.update({
      where: { id },
      data: { name, email }
    });
  }

  async deleteUser(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}

export default new UserService();
