"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import TruncatedText from "@/components/ui/truncated-text";
import TeamMemberActions from "./team-member-action";
import { TeamMemberTable } from "@/types/database";
import Image from "next/image";

export const TeamMemberColumns: ColumnDef<TeamMemberTable["Row"]>[] = [
  {
    id: "Select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "img_url",
    header: () => <div className="">Img</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium capitalize rounded-full relative w-12 h-12  overflow-hidden">
          <Image src={row.getValue("img_url")} alt={row.original.name} fill style={
            {
              objectFit: "cover",
              objectPosition: "center",
            }
          } />
        </div>
      );
    },
  },

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
    accessorKey: "description",
    header: () => <div className="">Description</div>,
    cell: ({ row }) => {
      return <TruncatedText message={row.getValue("description")} />;
    },
  },

  {
    accessorKey: "updated_at",
    header: () => <div className="">Updated at</div>,
    cell: ({ row }) => {
      return <div className=" font-medium capitalize">{new Date(row.getValue("updated_at")).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="">Created At</div>,
    cell: ({ row }) => {
      return <div className=" font-medium capitalize">{new Date(row.getValue("created_at")).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => <div className="">Command ID</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          <p>{row.getValue("id")}</p>
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="">Actions</div>,
    cell: ({ row }) => {
      const command = row.original;

      return <TeamMemberActions team_member={row.original} />;
    },
  },
];
