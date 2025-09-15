import { Hono } from "hono";
import { userRouter } from "./routes/user.routes";
import DB from "./db/dbConnection";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api", userRouter);

DB();

export default app;
