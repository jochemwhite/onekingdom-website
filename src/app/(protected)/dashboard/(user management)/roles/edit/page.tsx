import { getPermissions } from "@/actions/supabase";
import RoleForm from "@/components/forms/role-form";
import React from "react";

export default async function page() {
  const permissions = await getPermissions();

  const arr = permissions.map((item) => {
    return {
      permission_id: item.id,
      permission_name: item.name,
    };
  });

  

  return (
 
      <RoleForm permissions={arr} />
    
  );
}
