import z from "zod";

const createUserSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase(),
});

export { createUserSchema };
