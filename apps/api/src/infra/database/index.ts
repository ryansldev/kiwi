import { env } from "bun";
import { drizzle } from "drizzle-orm/node-postgres";

if (!env.DATABASE_URL) {
	console.error("DATABASE_URL is not set");
	process.exit(1);
}

export const db = drizzle(env.DATABASE_URL);
