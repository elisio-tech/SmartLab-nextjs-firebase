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

interface SubmenuItem {
  label: string;
  count: number;
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
      { label: "Drafts", count: 1 },
      { label: "Scheduled", count: 4 },
      { label: "Published", count: 8 },
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
  <ul className="submenu">
    {items.map((item) => (
      <li key={item.label}>
        {item.label}
        <span className="badge">{item.count}</span>
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
