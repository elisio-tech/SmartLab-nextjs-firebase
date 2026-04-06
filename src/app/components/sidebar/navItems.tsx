import { MailOpen } from "lucide-react";

export const navItems = [
  {
    icon: <MailOpen />,
    label: "Messages",
    submenu: [
      { label: "draft", count: 10 },
      { label: "Scheduled", count: 4 },
      { label: "Published", count: 20 },
    ],
  },
];
