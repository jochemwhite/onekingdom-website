import { getRoles } from "@/actions/supabase";
import { RoleTable } from "@/components/tables/roles/roles-table";
import { Button } from "@/components/ui/button";
import { roles } from "@/types/database";
import Link from "next/link";
import React from "react";

export default async function page() {
  const roles = await getRoles();

  if (!roles) return null;

  const rolesMap = new Map();

  roles.forEach((item) => {
    const { role_id, roles, permission_id, permissions } = item;


    if (!rolesMap.has(role_id)) {
      rolesMap.set(role_id, {
        role_id: role_id,
        role_name: roles!.name,
        permissions: [],
      });
    }
    rolesMap.get(role_id).permissions.push({
      permission_id: permission_id,
      permission_name: permissions!.name,
    });
  });

  const result: roles[] = Array.from(rolesMap.values());


  return (
    <div>
      <div className="flex items-center justify-between space-y-2 border rounded p-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Roles</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/roles/edit">
            <Button variant="outline">Add New Role</Button>
          </Link>
        </div>
      </div>
      <RoleTable Roles={result} />;
    </div>
  );
}
