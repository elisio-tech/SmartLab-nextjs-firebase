import React from "react";
import Image from "next/image";
import {
  Home,
  Heart,
  AtSign,
  MessageCircle,
  Plus,
  Settings,
  ExternalLink,
  LayoutDashboard,
  Package,
  Users,
  Mail,
  Image as ImageIcon,
  Network,
  Database,
  Hash,
  ChevronsUpDown,
  LucideIcon,
} from "lucide-react";
import "./sidebar.css";
import { logOut } from "@/app/service/auth-service";

interface SubmenuItem {
  label: string;
  count: string;
}

interface NavItemData {
  icon: LucideIcon; // Agora aceita um componente do Lucide
  label: string;
  actionIcon?: LucideIcon;
  submenu?: SubmenuItem[];
}

interface IconButtonProps {
  Icon: LucideIcon;
}

// --- DADOS ---

const leftTopItems: LucideIcon[] = [Home, Heart, AtSign, MessageCircle, Plus];
const leftBottomItems: LucideIcon[] = [Settings, ExternalLink];

const navItems: NavItemData[] = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Package, label: "Products" },
  { icon: Users, label: "Customers" },
  {
    icon: Mail,
    label: "Messages",
    actionIcon: Plus,
    submenu: [
      { label: "Drafts", count: "bg-red-500" },
      { label: "Scheduled", count: "bg-orange-500" },
      { label: "Published", count: "bg-blue-500" },
    ],
  },
  { icon: ImageIcon, label: "Images" },
  { icon: Network, label: "Network" },
  { icon: Database, label: "Inventory" },
  { icon: Hash, label: "Hashtags" },
];

// --- COMPONENTES ---

const IconButton: React.FC<IconButtonProps> = ({ Icon }) => (
  <button>
    <Icon size={20} strokeWidth={2} />
  </button>
);

const LeftSidebar: React.FC = () => (
  <div className="left">
    <Image src={"/logo/lg.svg"} alt="Logo" width={32} height={32} />
    {leftTopItems.map((Icon, index) => (
      <IconButton key={index} Icon={Icon} />
    ))}
    <div>
      {leftBottomItems.map((Icon, index) => (
        <IconButton key={index} Icon={Icon} />
      ))}
    </div>
  </div>
);

const SidebarHeader: React.FC = () => (
  <div className="header">
    <div>
      <h2>Untitled UI</h2>
      <h3>store.untitledui.com</h3>
    </div>
    <ChevronsUpDown size={16} className="text-gray-400" />
  </div>
);

const Submenu: React.FC<SubmenuProps> = ({ items }) => (
  <ul className="flex flex-col gap-4 mt-2 ml-6 mb-4">
    {items.map((item) => (
      <li
        key={item.label}
        className="flex items-center gap-4 text-sm cursor-pointer"
      >
        <div className={`${item.count} w-2 h-2 rounded-full`} />
        {item.label}
      </li>
    ))}
  </ul>
);

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const Icon = item.icon;
  const ActionIcon = item.actionIcon;

  return (
    <>
      <button>
        <Icon size={20} />
        <span>{item.label}</span>
        {ActionIcon && <ActionIcon size={16} className="ml-auto" />}
      </button>
      {item.submenu && <Submenu items={item.submenu} />}
    </>
  );
};

const Navigation: React.FC = () => (
  <nav>
    {navItems.map((item) => (
      <NavItem key={item.label} item={item} />
    ))}
  </nav>
);

const RightSidebar: React.FC = () => (
  <div className="right">
    <div className="right-inner">
      <SidebarHeader />
      <Navigation />
    </div>
  </div>
);

export const Sidebar15: React.FC = () => {
  return (
    <section className="page sidebar-15-page">
      <aside className="sidebar-15">
        <LeftSidebar />
        <RightSidebar />
      </aside>
    </section>
  );
};

// Interfaces auxiliares que faltavam no snippet
interface SubmenuProps {
  items: SubmenuItem[];
}
interface NavItemProps {
  item: NavItemData;
}
