"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import TruncatedText from "@/components/ui/truncated-text";
import { Users } from "@/types/database";
import RoleActions from "./users-actions";

export const RolesColums: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue("name")}</div>,
    enableHiding: true,
  },

  {
    accessorKey: "roles",
    header: () => <div className="">Roles</div>,
    cell: ({ row }) => {
      return <TruncatedText message={row.original.roles.map((role) => role.name).join(", ")} />;
    },
  },

  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="">Actions</div>,
    cell: ({ row }) => {

      return <RoleActions user={row.original} />;
    },
  },
];
