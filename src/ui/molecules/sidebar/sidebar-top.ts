import { Button } from "../../atoms/button/button.ts";

export class SidebarTop {
  public readonly element: HTMLElement;
  private readonly sidebarLogo: HTMLElement;
  private readonly sidebarHeader: HTMLElement;
  private readonly sidebarButton: HTMLElement;

  constructor(onClick: EventListenerOrEventListenerObject) {
    this.element = document.createElement('div');
    this.element.className = 'sidebar-top';

    this.sidebarLogo = document.createElement('div');
    this.sidebarLogo.className = 'sidebar-logo';

    const logoIcon = document.createElement('i');
    logoIcon.className = 'bx bx-pyramid icon sidebar-logo-icon';

    this.sidebarHeader = document.createElement('span');
    this.sidebarHeader.className = 'sidebar-header';
    this.sidebarHeader.textContent = 'ITSM';

    this.sidebarLogo.appendChild(logoIcon);
    this.sidebarLogo.appendChild(this.sidebarHeader);

    this.sidebarButton = new Button("sidebar-menu-button")
      .addEventListener("click", onClick)
      .element;

    const buttonIcon = document.createElement('i');
    buttonIcon.className = 'bx bx-menu icon';
    this.sidebarButton.appendChild(buttonIcon);

    this.element.appendChild(this.sidebarLogo);
    this.element.appendChild(this.sidebarButton);
  }
}