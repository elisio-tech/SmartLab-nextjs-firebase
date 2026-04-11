export type NavSubItem = {
  name: string;
  path: string;
  pro?: boolean;
};

export type NavItem = {
  name: string;
  icon?: React.ReactNode;
  path?: string;
  subItems?: NavSubItem[];
};
