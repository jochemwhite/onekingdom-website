import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient(accessToken: string) {
  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
}
