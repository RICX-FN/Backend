import { userModel } from "../models/userModel";
import { UserInput } from "../schemas/userSchema";

export const userService = {
  create: (data: UserInput) => userModel.create(data),
  list: () => userModel.findAll(),
  get: (id: number) => userModel.findById(id),
  update: (id: number, data: UserInput) => userModel.update(id, data),
  delete: (id: number) => userModel.delete(id),
};
