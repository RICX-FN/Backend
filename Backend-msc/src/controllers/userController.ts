import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await userService.createUser(name, email);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async list(req: Request, res: Response) {
    const users = await userService.getUsers();
    return res.json(users);
  }

  async find(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, email } = req.body;
      const user = await userService.updateUser(id, name, email);
      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await userService.deleteUser(id);
      return res.json({ message: "User deleted" });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new UserController();
