"use client";
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
import { TeamMemberTable } from "@/types/database";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import Link from "next/link";

interface Props {
  team_member: TeamMemberTable["Row"];
}

export default function CommandActions({ team_member }: Props) {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <>
      {/* <Modal open={modal} setModal={setModal}>
        <CommandForm command={command} setModal={setModal} />
      </Modal> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 text-right">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/dashboard/team/edit?member_id=${team_member.id}`}>Edit Member</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Delete Member</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(team_member.id.toString());
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
