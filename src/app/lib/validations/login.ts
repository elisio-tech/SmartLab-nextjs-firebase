import { z } from "zod";


export const loginShema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Por favor, insira um e-mail válido."),
  password: z.string().min(1, "Senha é obrigatória"),
});
