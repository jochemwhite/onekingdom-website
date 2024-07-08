import { getRoles, getUser } from "@/actions/supabase";
import { RoleTable } from "@/components/tables/roles/roles-table";
import { UserTable } from "@/components/tables/users/users-table";
import { Button } from "@/components/ui/button";
import { Users, roles } from "@/types/database";
import Link from "next/link";
import React from "react";

export default async function page() {
  let user = await getUser();

  if (!user) return null;
  const result = {} as Record<string, Users>;

  user.forEach((entry) => {
    if (entry.users) {
      const userId = entry.users.id;
      if (!result[userId]) {
        result[userId] = {
          ...entry.users,
          roles: [],
        };
      }
      if (entry.roles) {
        result[userId].roles.push(entry.roles);
      }
    }
  });

  const usersArray: Users[] = Object.values(result);

  console.log(usersArray);

  return (
    <div>
      <div className="flex items-center justify-between space-y-2 border rounded p-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        </div>
      </div>
      <UserTable users={usersArray} />
    </div>
  );
}
