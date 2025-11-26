import { Request, Response } from "express";
import { userService } from "../services/userService";

export const userController = {
  create: async (req: Request, res: Response) => {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  },

  list: async (req: Request, res: Response) => {
    const users = await userService.list();
    res.json(users);
  },

  get: async (req: Request, res: Response) => {
    const user = await userService.get(Number(req.params.id));
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  },

  update: async (req: Request, res: Response) => {
    const user = await userService.update(Number(req.params.id), req.body);
    res.json(user);
  },

  delete: async (req: Request, res: Response) => {
    await userService.delete(Number(req.params.id));
    res.status(204).send();
  },
};
