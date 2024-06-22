import { routes } from "../../../infrastructure/constants/routes.ts";
import { SidebarMenuItemProps } from "../../atoms/sidebar/sidebar-menu-item.ts";

export const menuItemsProps: SidebarMenuItemProps[] = [
  {
    href: routes.home.index,
    iconClasses: ["icon", "bx", "bxs-home"],
    text: 'Home',
    tooltip: 'Home'
  },
  {
    href: '#',
    iconClasses: ["icon", "bx", "bx-task"],
    text: 'Stories',
    tooltip: 'Stories'
  },
  {
    href: routes.project.index,
    iconClasses: ["icon", "bx", "bxs-layout"],
    text: 'Projects',
    tooltip: 'Projects'
  },
  {
    href: '#',
    iconClasses: ["icon", "bx", "bxs-cog"],
    text: 'Settings',
    tooltip: 'Settings'
  },
  {
    href: '#',
    iconClasses: ["icon", "bx", "bxs-log-out"],
    text: 'Logout',
    tooltip: 'Logout'
  }
];