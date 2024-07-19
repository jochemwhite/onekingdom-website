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
import { Database } from "@/types/supabase";

interface Props {
  roadmap: Database["public"]["Tables"]["roadmap_blog"]["Row"]
}

export default function RoadmapActions({ roadmap }: Props) {

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 text-right">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/dashboard/roadmaps/edit?roadmap_id=${roadmap.id}`}>Edit roadmap</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Delete Member</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(roadmap.id.toString());
              toast.info("Command ID copied to clipboard");
            }}
          >
            Copy roadmap ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
