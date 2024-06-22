export interface SidebarMenuItemProps {
  href: string;
  text: string;
  tooltip: string;
  iconClasses: string[];
}

export class SidebarMenuItem {
  private readonly _element: HTMLElement;

  constructor({ href, text, tooltip, iconClasses }: SidebarMenuItemProps) {
    this._element = document.createElement('li');

    const linkContainer = document.createElement('a');
    linkContainer.href = href;

    const icon = document.createElement('i');
    if (iconClasses) {
      icon.classList.add(...iconClasses);
    }

    const item = document.createElement('span');
    item.className = 'nav-item';
    item.textContent = text;

    linkContainer.appendChild(icon);
    linkContainer.appendChild(item);
    this._element.appendChild(linkContainer);

    const spanTooltip = document.createElement('span');
    spanTooltip.className = 'sidebar-tooltip';
    spanTooltip.textContent = tooltip;
    this._element.appendChild(spanTooltip);
  }

  public getElement() {
    return this._element;
  }
}