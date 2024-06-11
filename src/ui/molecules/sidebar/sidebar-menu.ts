export type MenuItem = {
  href: string;
  iconClasses: string;
  navText: string;
  tooltip: string;
};

export class SidebarMenu {
  public readonly element: HTMLElement;
  public readonly menuItems: MenuItem[];

  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
    this.element = document.createElement('ul');
    this.element.className = 'sidebar-menu';

    this.menuItems.forEach(item => {
      const li = document.createElement('li');

      const a = document.createElement('a');
      a.href = item.href;

      const icon = document.createElement('i');
      icon.className = item.iconClasses;
      a.appendChild(icon);

      const spanNavItem = document.createElement('span');
      spanNavItem.className = 'nav-item';
      spanNavItem.textContent = item.navText;
      a.appendChild(spanNavItem);

      li.appendChild(a);

      const spanTooltip = document.createElement('span');
      spanTooltip.className = 'sidebar-tooltip';
      spanTooltip.textContent = item.tooltip;
      li.appendChild(spanTooltip);

      this.element.appendChild(li);
    });
  }

  public addItem(item: MenuItem) {
    this.menuItems.push(item);
    return this;
  }
}