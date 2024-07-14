"use client";
import { deleteRole } from "@/actions/supabase";
import PermissionCard from "@/components/cards/permission-card";
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
import { RoleTable, TeamMemberTable, roles } from "@/types/database";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import Link from "next/link";

interface Props {
  Role: roles;
}

export default function CommandActions({ Role }: Props) {
  const [modal, setModal] = React.useState<boolean>(false);

  const HandleDelete = async () => {
    toast.promise(deleteRole(Role.role_id), {
      loading: "Deleting role...",
      success: "Role deleted successfully",
      error: "Error deleting role",
    });
  };

  return (
    <>
      <Modal open={modal} onClose={() => setModal(false)}>
        <PermissionCard role_id={Role.role_id} />
      </Modal>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 text-right">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/dashboard/roles/edit?role_id=${Role.role_id}`}>Edit Role</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={HandleDelete}>Delete Role</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(Role.role_id.toString());
              toast.info("Command ID copied to clipboard");
            }}
          >
            Copy Role ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
