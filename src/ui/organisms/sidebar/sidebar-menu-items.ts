import { MenuItem } from "../../molecules/sidebar/sidebar-menu.ts";
import { routes } from "../../../infrastructure/constants/routes.ts";

export const menuItems: MenuItem[] = [
  {
    href: routes.home.index,
    iconClasses: 'icon bx bxs-home',
    navText: 'Home',
    tooltip: 'Home'
  },
  {
    href: '#',
    iconClasses: 'icon bx bx-task',
    navText: 'Stories',
    tooltip: 'Stories'
  },
  {
    href: routes.project.index,
    iconClasses: 'icon bx bxs-layout',
    navText: 'Projects',
    tooltip: 'Projects'
  },
  {
    href: '#',
    iconClasses: 'icon bx bxs-cog',
    navText: 'Settings',
    tooltip: 'Settings'
  },
  {
    href: '#',
    iconClasses: 'icon bx bx-log-out',
    navText: 'Logout',
    tooltip: 'Logout'
  }
];