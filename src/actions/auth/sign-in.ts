'use server';

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async () => {

  // 1. Create a Supabase client
  const supabase = createClient();
  const origin = headers().get('origin');
  // 2. Sign in with Twitch
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'twitch',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
  } else {
    return redirect(data.url);
  }
  // 3. Redirect to landing page
};