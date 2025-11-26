import { Request, Response } from "express";
import { listUsersService, createUserService } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await listUsersService();

  res.json({
    success: true,
    data: users,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { nome, email } = req.body;

  const newUser = await createUserService(nome, email);

  res.status(201).json({
    success: true,
    data: newUser,
  });
};
