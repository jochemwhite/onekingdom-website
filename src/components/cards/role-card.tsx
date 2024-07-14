'use client';
import React from "react";
import { Combobox } from "../ui/combobox";
import { RoleTable, Users, roles } from "@/types/database";
import { getAllRoles } from "@/actions/supabase";

interface RoleCardProps {
  user: Users;
}

export default function RoleCard({ user }: RoleCardProps) {
  const [roles, setRoles] = React.useState<RoleTable["Row"][]>([]);
  

  React.useEffect(() => {
    getAllRoles().then((roles) => {
      setRoles(roles);
    });
  }, []);

  const handleChange = async (roles: string[]) => {
    // const response = await deleteRole(Role.role_id);
  };

  return (
    <div>
      <Combobox
        onChange={handleChange}
        items={roles.map((role) => {
          return { label: role.name, value: role.name };
        })}
        placeholer="Select Roles"
      />
    </div>
  );
}
