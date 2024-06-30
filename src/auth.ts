import jwt from "jsonwebtoken";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { env } from "./lib/env";
import { supabaseAdmin } from "./lib/supabase/admin";

const { SUPABASE_JWT_SECRET } = env;

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  // debug: true,
  callbacks: {
    async session({ session, user }) {
      const signingSecret = SUPABASE_JWT_SECRET;

      const payload = {
        aud: "authenticated",
        exp: Math.floor(new Date(session.expires).getTime() / 1000),
        sub: user.id,
        email: user.email,
        role: "authenticated",
      };
      session.supabaseAccessToken = jwt.sign(payload, signingSecret);
      // const { data } = await supabaseAdmin.from("users").select("*").eq("id", user.id).single();

      // session.user.role = data?.role || "user";

      return session;
    },

  },
});

