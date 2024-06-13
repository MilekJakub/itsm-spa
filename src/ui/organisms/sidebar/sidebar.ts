import "./sidebar.css";
import 'boxicons/css/boxicons.min.css';

import { SidebarTop } from "../../molecules/sidebar/sidebar-top.ts";
import { SidebarUser } from "../../molecules/sidebar/sidebar-user.ts";
import { SidebarMenu } from "../../molecules/sidebar/sidebar-menu.ts";
import { menuItems } from "../../constants/sidebar-menu-items.ts";

export class Sidebar {
  private readonly _id: string;
  private readonly _element: HTMLElement;

  constructor(id: string) {
    this._id = id;

    this._element = document.createElement("nav");
    this._element.id = this._id;
    this._element.classList.add("sidebar");

    const sidebarTop = new SidebarTop(this.topButtonOnClick);
    const sidebarUser = new SidebarUser("Jakub", "Admin");
    const sidebarMenu = new SidebarMenu(menuItems);

    this._element.appendChild(sidebarTop.element);
    this._element.appendChild(sidebarUser.element);
    this._element.appendChild(sidebarMenu.element);
  }

  private topButtonOnClick = () => {
    this._element.classList.toggle('active');
  }

  getId() {
    return this._id;
  }

  getElement() {
    return this._element;
  }
}
