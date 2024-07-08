"use client";
import { deleteRole } from "@/actions/supabase";
import PermissionCard from "@/components/cards/permission-card";
import RoleCard from "@/components/cards/role-card";
import Modal from "@/components/globals/modal";
// import { CommandForm } from "@/components/forms/command-form";
// import Modal from "@/components/global/modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RoleTable, TeamMemberTable, Users, roles } from "@/types/database";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface Props {
  user: Users;

}

export default function UserActions({ user }: Props) {
  const [modal, setModal] = React.useState<boolean>(false);

  const HandleDelete = async () => {
    // toast.promise(deleteRole(Role.role_id), {
    //   loading: "Deleting role...",
    //   success: "Role deleted successfully",
    //   error: "Error deleting role",
    // });
  };

  return (
    <>
      <Modal open={modal} onClose={() => setModal(false)}>
        <RoleCard user={user} />
      </Modal>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 text-right">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setModal(true)}>Edit Member</DropdownMenuItem>
          <DropdownMenuItem onClick={HandleDelete}>Delete Role</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(user.id.toString());
              toast.info("User ID copied to clipboard");
            }}
          >
            Copy user ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
