"use client";
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
import { RoleTable, TeamMemberTable } from "@/types/database";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface Props {
  Role: RoleTable["Row"];
}

export default function CommandActions({ Role }: Props) {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <>
      <Modal open={modal} onClose={() => setModal(false)}>
        <PermissionCard role_id={Role.id} />
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
          <DropdownMenuItem>Delete Member</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(Role.id.toString());
              toast.info("Command ID copied to clipboard");
            }}
          >
            Copy Member ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
