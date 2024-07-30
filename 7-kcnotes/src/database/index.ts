import path from "node:path";
import url from "node:url";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

const schema = `
  CREATE TABLE IF NOT EXISTS migrations (
    id INTEGER PRIMARY KEY,
    applied BOOLEAN NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(username)
  );

  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;

const dbName = process.env.DATABASE_URL!;
const dbDir = path.join(process.cwd(), "database", dbName);
// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null;

export async function initDB(): Promise<
  Database<sqlite3.Database, sqlite3.Statement>
> {
  if (!db) {
    db = await open({
      filename: dbDir,
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

export async function applyMigrations() {
  try {
    const db = await initDB();
    // const migrationsApplied = await db.get(
    //   "SELECT applied FROM migrations WHERE id = 1"
    // );
    // if (migrationsApplied && migrationsApplied.applied) {
    //   console.log("Migrations have already been applied.");
    //   return;
    // }
    await db.exec(schema);
    await db.run(
      "INSERT OR REPLACE INTO migrations (id, applied) VALUES (1,1)"
    );
    console.log("Migrations applied.");
    return;
  } catch (error) {
    console.error("Error applying migrations:", error);
    process.exit(1);
  }
}
export { db };
