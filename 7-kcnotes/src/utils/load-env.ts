import fs from "node:fs";
import path from "node:path";
import process from "node:process";

export function loadEnv() {
  const envPath = path.join(process.cwd(), ".env");
  const envFileContent = fs.readFileSync(envPath, { encoding: "utf8" });

  envFileContent.split("/n").forEach((line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}
