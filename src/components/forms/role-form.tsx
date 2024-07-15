"use client";

import { createRole, getRoleById, updateRole } from "@/actions/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RoleSchema } from "@/schema/role-schema";
import { roles } from "@/types/database";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Combobox } from "../ui/combobox";

interface RoleFormProps {
  permissions: {
    permission_id: string;
    permission_name: string;
  }[];
}

export default function RoleForm({ permissions }: RoleFormProps) {
  const searchParams = useSearchParams();
  const role_id = searchParams.get("role_id");
  const [loading, setLoading] = useState(true);
  const [permissionCategories, setPermissionCategories] = useState<string[]>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof RoleSchema>>({
    resolver: zodResolver(RoleSchema),
    defaultValues: {
      id: "",
      name: "",
      permissions: [],
    },
  });

  useEffect(() => {
    const categories = permissions.map((permission) => permission.permission_name.split(".")[0]);
    const uniqueCategories = Array.from(new Set(categories));
    setPermissionCategories(uniqueCategories);
    if (role_id) {
      const getRole = async () => {
        try {
          const role = await getRoleById(role_id);
          form.setValue("name", role.role_name);
          form.setValue("permissions", role.permissions);

          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      getRole();
    } else {
      setLoading(false);
    }
    // setLoading(false);
  }, [role_id]);



  async function onSubmit(values: z.infer<typeof RoleSchema>) {
    if (values.permissions.length === 0) return;

    const obj: roles = {
      role_name: values.name,
      role_id: role_id ? role_id : crypto.randomUUID(),
      permissions: values.permissions,
    };

    // console.log(obj);

    if (role_id) {
      toast.promise(updateRole(obj), {
        loading: "Updating role...",
        success: "Role updated!",
        error: "Error updating role",
      });
    }else{
      toast.promise(createRole(obj), {
        loading: "Creating role...",
        success(data) {
          router.push(`/dashboard/user-management/roles/edit?role_id=${obj.role_id}`);
          return "Role created!";
        },
        error(data) {
          console.log(data);
          return "Error creating role";
        },
      });
    
    }

  }

  const handlePermissionSelect = (value: (string | undefined)[]) => {
    // find the id based of the label
    let new_permissions = value.map((val: string | undefined) => permissions.find((permission) => permission.permission_name === val!) || undefined);

    // remove undefined values

    form.setValue("permissions", new_permissions as any);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex justify-between flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => {
            console.error(error);
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
              <FormItem className="flex flex-col">
                <FormLabel>Permissions</FormLabel>
                <FormControl>
                  <Combobox
                    placeholer="Search permissions"
                    onChange={handlePermissionSelect}
                    items={permissions.map((permission) => ({ value: permission.permission_name, label: permission.permission_name }))}
                    initialSelectedValues={field.value.map((permission) => permission.permission_name)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="outline">
            {role_id ? "Update Role" : "Create Role"}
          </Button>
        </form>
        <div className="mt-4">
          <h2 className="text-3xl text-center">Selected Permissions</h2>
          <hr />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {permissionCategories.map((category) => {
              const selectedPermissions = form.watch().permissions.filter((permission) => permission.permission_name.includes(category));
              if (selectedPermissions.length > 0) {
                return (
                  <Card key={category} className="min-w-">
                    <CardHeader>
                      <CardTitle>{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        {selectedPermissions.map((permission) => (
                          <li key={permission.permission_id}>{permission.permission_name}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </div>
      </Form>
    </div>
  );
}
