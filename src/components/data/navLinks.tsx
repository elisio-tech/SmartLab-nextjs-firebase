import React from "react";
import { Home, Megaphone, CalendarCheck2Icon, FolderIcon } from "lucide-react";

type NavItem = {
  name: string;
  icon?: React.ReactNode;
  path: string;
  submenu?: { name: string; path: string; icon?: React.ReactNode }[];
};

export const navLinks: NavItem[] = [
  {
    name: "Overview",
    path: "/",
    icon: <Home />,
  },
  {
    name: "AI Assistant",
    path: "/",
    icon: <Megaphone />,
  },
  {
    name: "Users",
    path: "/",
    icon: <CalendarCheck2Icon />,
  },
  {
    name: "Projects",
    path: "/",
    icon: <FolderIcon />,
    submenu: [
      { name: "All", path: "/all" },
      { name: "Deleted", path: "/deleted" },
    ],
  },
];

export const navLinkAdmin = [
  {
    name: "Manager",
    path: "/",
  },
  {
    name: "Rules",
    path: "/",
  },
  {
    name: "Settings",
    path: "/",
  },
];
