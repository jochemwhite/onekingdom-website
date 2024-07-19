"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import TruncatedText from "@/components/ui/truncated-text";
import { Database } from "@/types/supabase";
import RoadmapActions from "./roadmap-action";

export const RoadMapColumns: ColumnDef<Database["public"]["Tables"]["roadmap_blog"]["Row"]>[] = [
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
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue("title")}</div>,
    enableHiding: true,
  },

  {
    accessorKey: "short_description",
    header: () => <div className="">Description</div>,
    cell: ({ row }) => {
      return (
        <div className="w-[500px]">
          <TruncatedText message={row.getValue("short_description")} />
        </div>
      );
    },
    size: 1000,
  },
  {
    accessorKey: "published",
    header: () => <div className="">Published</div>,
    cell: ({ row }) => {
      return <div className="pl-4">{row.getValue("published") ? "True" : "False"}</div>;
    },
  },

  {
    accessorKey: "author",
    header: () => <div className="">author</div>,
    cell: ({ row }) => {
      return <div className=" font-medium">{row.getValue("author")}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="">date</div>,
    cell: ({ row }) => {
      return <div className=" font-medium capitalize">{new Date(row.getValue("date")).toLocaleDateString()}</div>;
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
      return <RoadmapActions roadmap={row.original} />;
    },
  },
];
