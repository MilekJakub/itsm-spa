import "./sidebar.css";
import 'boxicons/css/boxicons.min.css';

import { SidebarTop } from "../../molecules/sidebar/sidebar-top.ts";
import { SidebarUser } from "../../molecules/sidebar/sidebar-user.ts";
import { SidebarMenu } from "../../molecules/sidebar/sidebar-menu.ts";
import { menuItemsProps } from "./sidebar-menu-items.ts";
import {SidebarMenuItem} from "../../atoms/sidebar/sidebar-menu-item.ts";

interface SidebarProps {
  id: string;
}

export class Sidebar {
  private readonly _id: string;
  private readonly _element: HTMLElement;

  constructor({ id }: SidebarProps) {
    this._id = id;

    this._element = document.createElement("nav");
    this._element.id = this._id;
    this._element.classList.add("sidebar");

    const sidebarTop = new SidebarTop({ expandButtonOnClick: this.expandButtonOnClick });
    const sidebarUser = new SidebarUser({ username: "Jakub", role: "Admin" });
    const sidebarMenu = new SidebarMenu()
      .addItems(menuItemsProps.map(props => new SidebarMenuItem(props)));

    this._element.appendChild(sidebarTop.getElement());
    this._element.appendChild(sidebarUser.getElement());
    this._element.appendChild(sidebarMenu.getElement());
  }

  private expandButtonOnClick = () => {
    this._element.classList.toggle('active');
  }

  getId() {
    return this._id;
  }

  getElement() {
    return this._element;
  }
}
