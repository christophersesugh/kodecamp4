import crypto from "node:crypto";
import { promisify } from "node:util";

const asyncScrypt = promisify(crypto.scrypt);

export class Scrypt {
  static async hash(password: string) {
    const salt = crypto.randomBytes(8).toString("hex");
    const __buffer = (await asyncScrypt(password, salt, 64)) as Buffer;
    return `${__buffer.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, password: string) {
    const [pword, salt] = storedPassword.split(".");
    const __buffer = (await asyncScrypt(password, salt!, 64)) as Buffer;
    return pword === __buffer.toString("hex");
  }
}
