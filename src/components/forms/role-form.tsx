"use client";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { RoleSchema } from "@/schema/role-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Combobox } from "../ui/combobox";
import { roles } from "@/types/database";
import { error } from "console";
import { toast } from "sonner";
import { createRole } from "@/actions/supabase";

interface RoleFormProps {
  permissions: {
    permission_id: string;
    permission_name: string;
  }[];
}

export default function RoleForm({ permissions }: RoleFormProps) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof RoleSchema>>({
    resolver: zodResolver(RoleSchema),
    defaultValues: {
      id: "",
      name: "",
      permissions: [],
    },
  });

  async function onSubmit(values: z.infer<typeof RoleSchema>) {
    if (values.permissions.length === 0) return;

    const obj: roles = {
      role_name: values.name,
      role_id: crypto.randomUUID(),
      permissions: values.permissions,
    };

    toast.promise(createRole(obj), {
      loading: "Creating role...",
      success: "Role created successfully",
      error: "Error creating role",
    });
  }

  const handlePermissionSelect = (value: (string | undefined)[]) => {
    // find the id based of the label
    let new_permissions = value.map((val: string | undefined) => permissions.find((permission) => permission.permission_name === val!) || undefined);

    // remove undefined values

    form.setValue("permissions", new_permissions as any);
  };

  return (
    <div className="flex justify-between">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => {
            console.log(error);
          })}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role Name</FormLabel>
                <FormControl>
                  <Input placeholder="Admin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="permissions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Permissions</FormLabel>
                <FormControl>
                  <Combobox
                    placeholer="Search permissions"
                    onChange={handlePermissionSelect}
                    items={permissions.map((permission) => ({ value: permission.permission_name, label: permission.permission_name }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="outline">
            Create Role
          </Button>
        </form>
      </Form>
    </div>
  );
}
