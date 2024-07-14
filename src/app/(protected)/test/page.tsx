"use client";
import { createSupabaseClient } from "@/lib/supabase/client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function page() {
  const { data: X } = useSession();

  useEffect(() => {
    if (!X) return;

    const supabase = createSupabaseClient(X.supabaseAccessToken as string);

    async function fetchData() {
      const { data, error } = await supabase.from("users").select("*").single();
      if (error) {
        console.error(error);
        return;
      }
    }
    fetchData();
  }, [X]);

  return <div>page</div>;
}
