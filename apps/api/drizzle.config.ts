import { env } from "bun";
import { defineConfig } from "drizzle-kit";

if (!env.DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/infra/database/schemas",
  out: "./src/infra/database/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  }
});
