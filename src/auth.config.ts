import type { NextAuthConfig } from "next-auth";
import { env } from "./lib/env";
import TwitchProvider from "next-auth/providers/twitch";
import { TWITCH_SCOPES } from "./lib/const";
import { SupabaseAdapter } from "@auth/supabase-adapter";



export default {
  providers: [
    TwitchProvider({
      clientId: env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
      clientSecret: env.TWITCH_CLIENT_SECRET,
      authorization: {
        params: {
          scope: TWITCH_SCOPES.join(" "),
        },
      },
    }),
  ],

  adapter: SupabaseAdapter({
    url: env.NEXT_PUBLIC_SUPABASE_URL,
    secret: env.SUPABASE_SERVICE_ROLE_KEY,
  }),
} satisfies NextAuthConfig;
