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

      const { data, error } = await supabaseAdmin
      .from('user_role')
      .select('role(*)') // Select all columns from the 'role' table
      .eq('user_id', user.id); // Filter by user ID

      if (error) {
        console.error(error);
        return session;
      }

      const roles = data.map((userRole) => userRole!.role!.name!) 

      if(!roles){
        session.user.roles = ['authenticated'];
      }

      session.user.roles = roles;

      return session;
    },

  },
});

