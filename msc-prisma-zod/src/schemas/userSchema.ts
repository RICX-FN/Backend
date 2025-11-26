import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
});

export type UserInput = z.infer<typeof userSchema>;
