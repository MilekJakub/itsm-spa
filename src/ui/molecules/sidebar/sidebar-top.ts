import { Button } from "../../atoms/buttons/button.ts";

interface SidebarTopProps {
  expandButtonOnClick: () => void;
}

export class SidebarTop {
  private readonly _element: HTMLElement;
  // private readonly sidebarLogo: HTMLElement;
  private readonly _sidebarHeader: HTMLElement;
  private readonly _sidebarButton: HTMLElement;

  constructor({ expandButtonOnClick }: SidebarTopProps) {
    this._element = document.createElement('div');
    this._element.classList.add('sidebar-top');

    // this.sidebarLogo = document.createElement('div');
    // this.sidebarLogo.className = 'sidebar-logo';

    const logoIcon = document.createElement('i');
    logoIcon.classList.add('icon', 'bx', 'bx-pyramid');

    this._sidebarHeader = document.createElement('span');
    this._sidebarHeader.classList.add('sidebar-header');
    this._sidebarHeader.textContent = 'ITSM';

    // this.sidebarLogo.appendChild(logoIcon);
    // this.sidebarLogo.appendChild(this.sidebarHeader);

    this._sidebarButton = new Button()
      .addEventListener("click", expandButtonOnClick)
      .getElement();

    const buttonIcon = document.createElement('i');
    buttonIcon.classList.add('icon', 'bx', 'bx-menu');
    this._sidebarButton.appendChild(buttonIcon);

    // this.element.appendChild(this.sidebarLogo);
    this._element.appendChild(this._sidebarButton);
  }

  public getElement() {
    return this._element;
  }
}