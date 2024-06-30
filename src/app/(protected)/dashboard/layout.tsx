import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { SidebarProvider } from "@/providers/sidebar-provider";
import React from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminPanelLayout>
        <ContentLayout title="">{children}</ContentLayout>
      </AdminPanelLayout>
    </SidebarProvider>
  );
}
