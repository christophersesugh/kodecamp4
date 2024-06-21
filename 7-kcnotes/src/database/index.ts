import path from "node:path";
import url from "node:url";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

const dbName = "sqlite.db";
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function initDB(): Promise<
  Database<sqlite3.Database, sqlite3.Statement>
> {
  if (!db) {
    db = await open({
      filename: path.join(__dirname, dbName),
      driver: sqlite3.Database,
    });
  }
  return db;
}

export async function closeDB(): Promise<void> {
  if (db) {
    await db.close();
    db = null;
    console.log("Disconnected from DB.");
  }
}
