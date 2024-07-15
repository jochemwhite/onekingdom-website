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

      const { data, error } = await supabaseAdmin
        .from("user_roles")
        .select("roles(*)") // Select all columns from the 'role' table
        .eq("user_id", user.id); // Filter by user ID

      if (error) {
        console.error("Error fetching user roles:", error);
        console.error(error);
        return session;
      }
      

      const payload = {
        aud: "authenticated",
        exp: Math.floor(new Date(session.expires).getTime() / 1000),
        sub: user.id,
        email: user.email,
        roles: data.map((userstoroles) => userstoroles.roles!.name)
      };



      session.supabaseAccessToken = jwt.sign(payload, signingSecret);


      // if (data && data.length > 0) {
      //   session.user.roles = data.map((userstoroles) => userstoroles.roles!.name);
      // }

      return session;
    },
  },
});
