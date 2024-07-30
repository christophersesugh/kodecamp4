import { applyMigrations } from "./database";

export async function migrate() {
  await applyMigrations();
}

migrate().then(() => {
  console.log("Migrations applied successfully.");
});
