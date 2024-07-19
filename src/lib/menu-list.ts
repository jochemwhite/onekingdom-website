import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid, BusFront } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.endsWith("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "CMS",
      menus: [
        {
          href: "/dashboard/team",
          label: "Team",
          active: pathname.includes("/team"),
          icon: Users,
          submenus: [],
        },
        {
          href: "dashboard",
          label: "Roadmaps",
          active: pathname.endsWith("/dashboard/roadmaps"),
          icon: BusFront,
          submenus: [
            {
              href: "/dashboard/roadmaps",
              label: "Posts",
              active: pathname.endsWith("/roadmaps"),
            }, 
            {
              href: "/dashboard/roadmaps/edit",
              label: "New",
              active: pathname.includes("/roadmaps/edit"),
            },
          ],
        },
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/categories",
              label: "Categories",
              active: pathname.includes("/categories"),
            },
            {
              href: "/tags",
              label: "Tags",
              active: pathname.includes("/tags"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Management",
      menus: [
        {
          href: "#",
          label: "Manage users",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [
            {
              href: "/dashboard/users",
              label: "Users",
              active: pathname.includes("/users"),
            },
            {
              href: "/dashboard/roles",
              label: "Roles",
              active: pathname.includes("/roles"),
            },
          ],
        },
      ],
    },
  ];
}
