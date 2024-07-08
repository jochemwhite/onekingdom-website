import { Navbar } from "@/components/admin-panel/navbar";
import { Users } from "@/types/database";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  user: Users
}

export function ContentLayout({ title, children, user }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} user={user} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
