import { IncomingMessage } from "http";
import { db } from "../database";
export async function createUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    if (!db) throw new Error("Database not initialised");
    const createdUser = await db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, password]
    );
    const userId = createdUser.lastID;
    return db.get<{ id: number; username: string }>(
      `SELECT id, username FROM users WHERE id = ?`,
      [userId]
    );
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
}

export async function getUser(username: string) {
  if (!db) throw new Error("Database not initialised");
  return db.get(`SELECT * FROM users WHERE username = ?`, [username]);
}

export function getUserId(req: IncomingMessage) {
  return (req as any).user.id;
}
