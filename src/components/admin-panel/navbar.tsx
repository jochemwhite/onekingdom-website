import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { ModeToggle } from "../globals/mode-toggle";
import { getUser } from "@/actions/supabase";
import { auth } from "@/auth";
import { Users } from "@/types/database";

interface NavbarProps {
  title: string;
  user: Users
}

export async function Navbar({ title, user }: NavbarProps) {



  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserNav user={user} roles={user.roles.map((role) => role.name)} />
        </div>
      </div>
    </header>
  );
}
