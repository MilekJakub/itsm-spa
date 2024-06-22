import { SidebarMenuItem } from "../../atoms/sidebar/sidebar-menu-item.ts";

interface SidebarMenuProps {
  id?: string,
  classes?: string[]
}

export class SidebarMenu {
  private readonly _element: HTMLElement;
  private readonly _menuItems: HTMLElement[] = [];

  constructor({id, classes}: SidebarMenuProps = {}) {
    this._element = document.createElement('ul');
    this._element.className = 'sidebar-menu';

    if (id) {
      this._element.id = id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  public addItems(items: SidebarMenuItem[]) {
    items.forEach(item => this.addItem(item));
    return this;
  }

  public addItem(item: SidebarMenuItem) {
    this._menuItems.push(item.getElement());
    return this;
  }

  public getElement() {
    this._menuItems.forEach(item => this._element.appendChild(item));
    return this._element;
  }
}