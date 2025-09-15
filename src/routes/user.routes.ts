import { Hono } from "hono";
import userService from "../services/user.service";
import { createUserSchema } from "../validators/user.validation";
import { ZodError } from "zod";

export const userRouter = new Hono();

userRouter.post("/create-user", async (c) => {
  try {
    const body = await c.req.json();
    const parsed = createUserSchema.parse(body);
    const user = await userService.createUser(parsed);
    return c.json({ message: "User created successfully", user }, 201);
  } catch (error) {
    return c.json({ error: error }, 500);
  }
});

userRouter.get("/get-user/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const parsed = createUserSchema.parse({ test: "test" });
    const user = await userService.getOneUser(id);
    return c.json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error);
      return c.json(error.issues, 400);
    }
    return c.json({ message: "Error fetching user" }, 500);
  }
});

userRouter.get("/get-users", async (c) => {
  try {
    const users = await userService.getAllUsers();
    return c.json(users);
  } catch (error) {
    return c.json({ message: "Error fetching users", error }, 500);
  }
});

userRouter.put("/update-user/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const user = await userService.updateUSer(id, body);
    return c.json({ message: "User updated successfully" }, 200);
  } catch (error) {
    return c.json({ message: "Error updating user", error }, 500);
  }
});

userRouter.delete("/delete-user/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const user = await userService.deleteUser(id);
    return c.json({ message: "User deleted successfully" }, 200);
  } catch (error) {
    return c.json({ message: "Error deleting user", error }, 500);
  }
});
