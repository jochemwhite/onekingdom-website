import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { SidebarProvider } from "@/providers/sidebar-provider";
import React from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { getUser } from "@/actions/supabase";
import { Users } from "@/types/database";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  let user = await getUser();

  if (!user) return null;

  const result = {} as Record<string, Users>;

  user.forEach((entry) => {
    if (entry.users) {
      const userId = entry.users.id;
      if (!result[userId]) {
        result[userId] = {
          ...entry.users,

          roles: [],
        };
      }
      if (entry.roles) {
        result[userId].roles.push(entry.roles);
      }
    }
  });

  const usersArray: Users[] = Object.values(result);

  return (
    <SidebarProvider>
      <AdminPanelLayout>
        <ContentLayout title="" user={usersArray[0]}>
          {children}
        </ContentLayout>
      </AdminPanelLayout>
    </SidebarProvider>
  );
}
