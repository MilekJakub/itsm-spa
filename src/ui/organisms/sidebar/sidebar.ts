import "./sidebar.css";
import 'boxicons/css/boxicons.min.css';

import { SidebarTop } from "../../molecules/sidebar/sidebar-top.ts";
import { SidebarUser } from "../../molecules/sidebar/sidebar-user.ts";
import { MenuItem, SidebarMenu } from "../../molecules/sidebar/sidebar-menu.ts";
import { routes } from "../../../infrastructure/constants/routes.ts";

export const menuItems: MenuItem[] = [
  {
    href: routes.home.index,
    iconClasses: 'bx bxs-home icon',
    navText: 'Home',
    tooltip: 'Home'
  },
  {
    href: '#',
    iconClasses: 'bx bx-task icon',
    navText: 'Stories',
    tooltip: 'Stories'
  },
  {
    href: routes.project.index,
    iconClasses: 'bx bxs-layout icon',
    navText: 'Projects',
    tooltip: 'Projects'
  },
  {
    href: '#',
    iconClasses: 'bx bxs-cog icon',
    navText: 'Settings',
    tooltip: 'Settings'
  },
  {
    href: '#',
    iconClasses: 'bx bx-log-out icon',
    navText: 'Logout',
    tooltip: 'Logout'
  }
];

export const createSidebar = () => {
  const container = document.createElement("nav");
  container.id = "sidebar";
  container.classList.add("sidebar");

  const sidebarTopButtonOnClick = () => {
    container.classList.toggle('active');
  }

  const sidebarTop = new SidebarTop(sidebarTopButtonOnClick);
  const sidebarUser = new SidebarUser("Jakub", "Admin");
  const sidebarMenu = new SidebarMenu(menuItems);

  container.appendChild(sidebarTop.element);
  container.appendChild(sidebarUser.element);
  container.appendChild(sidebarMenu.element);

  return container;
}