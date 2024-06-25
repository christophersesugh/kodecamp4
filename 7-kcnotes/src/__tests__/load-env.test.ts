import fs from "node:fs";
import { it, expect, describe, vi } from "vitest";
import { loadEnv } from "../utils/load-env";

describe("loadEnv", () => {
  it("should call readFileSync function once", () => {
    vi.spyOn(fs, "readFileSync");
    loadEnv();
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });

  it("should load env. variables from the .env file", () => {
    const envMock = `
    KEY1=value1
    KEY2=value2
    `;
    vi.spyOn(fs, "readFileSync").mockReturnValue(envMock);
    loadEnv();
    expect(process.env.KEY1).toBe("value1");
    expect(process.env.KEY2).toBe("value2");
  });
});
