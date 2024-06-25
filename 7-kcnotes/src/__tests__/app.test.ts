import request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../app";

describe("GET /", () => {
  it("should return status code of 200 when GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("should return 'Hello Kodecamp' when GET /", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, Kodecamp");
  });
});
