import { cors } from "@elysia/cors";
import { Elysia, env } from "elysia";
import { auth } from "./infra/auth";

if (!env.FRONTEND_URL) {
	console.error("FRONTEND_URL is not set");
	process.exit(1);
}

const app = new Elysia()
	.use(
		cors({
			origin: [env.FRONTEND_URL],
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	)
	.mount(auth.handler)
	.get("/", () => "Hello Elysia")
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
