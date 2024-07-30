import { app } from "./app";
import { applyMigrations, closeDB, initDB } from "./database";
import { loadEnv } from "./utils/load-env";

const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") {
  loadEnv();
}

await applyMigrations();

const { PORT } = process.env;
initDB()
  .then(() => {
    console.log("Connected to DB.");
    const server = app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });

    process.on("SIGINT", async () => {
      console.log("\nShutting down server...");
      server.close(async () => {
        await closeDB();
        console.log("Server has been gracefully terminated.");
        process.exit(0);
      });
    });

    process.on("uncaughtException", async (error) => {
      console.error("Uncaught Exception:", error);
      await closeDB();
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  });
