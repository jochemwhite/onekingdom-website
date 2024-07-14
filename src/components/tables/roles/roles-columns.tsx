"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import TruncatedText from "@/components/ui/truncated-text";
import { roles } from "@/types/database";
import RoleActions from "./roles-actions";

export const RolesColums: ColumnDef<roles>[] = [
  {
    accessorKey: "role_name",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue("role_name")}</div>,
    enableHiding: true,
  },

  {
    accessorKey: "permissions",
    header: () => <div className="">permissions</div>,
    cell: ({ row }) => {
      return (
        <div className="max-w-[1000px]">
          <TruncatedText message={row.original.permissions.map((permissions) => permissions.permission_name).join(", ")} />
        </div>
      );
    },
    size: 500,
  },

  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="">Actions</div>,
    cell: ({ row }) => {
      const command = row.original;

      return <RoleActions Role={row.original} />;
    },
  },
];
