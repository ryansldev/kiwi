import { auth } from "@/infra/auth";
import Elysia from "elysia";

export const AuthService = new Elysia({ name: "AuthService" })
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await auth.api.getSession({
          headers,
        });
        if (!session) return status(401);
        return {
          user: session.user,
          session: session.session,
        };
      },
    },
  })