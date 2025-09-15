import { email } from "zod";
import app from "../src/server";
import { describe, it, expect } from "bun:test";

describe("POST create user", () => {
  it("it should be return to create the users", async () => {
    const req = new Request("http://localhost:3000/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "john",
        email: "john@gmail.com",
      }),
    });
    const res = await app.fetch(req);
    const data = await res.json();
    expect(res.status).toBe(201);
    expect(data.message).toBe("User created successfully");
    expect(data.user).toBeDefined();
  });
  it("should fail when name or email misssing", async () => {
    const req = new Request("http://localhost:3000/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        email: "",
      }),
    });
    const res = await app.fetch(req);
    const data = await res.json();
    expect(res.status).toBeGreaterThanOrEqual(400);
    expect(data.error).toBeDefined();
  });
});
