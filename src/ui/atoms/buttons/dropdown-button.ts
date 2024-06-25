import { DropdownMenuItem } from "./dropdown-menu-item";

interface DropdownButtonProps {
  id?: string;
  text: string;
  containerClasses?: string[];
  buttonClasses?: string[];
  menuClasses?: string[];
}

export class DropdownButton {
  private readonly _id?: string;
  private readonly _element: HTMLElement;
  private readonly _button: HTMLButtonElement;
  private readonly _menu: HTMLElement;

  constructor({ id, text, containerClasses, buttonClasses, menuClasses }: DropdownButtonProps) {
    this._element = document.createElement('div');
    this._element.classList.add("dropdown-container");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (containerClasses) {
      this._element.classList.add(...containerClasses);
    }

    this._button = document.createElement('button');
    this._button.classList.add('dropdown-button');
    this._button.textContent = text;
    this._button.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      this.toggleMenu();
    });

    if (buttonClasses) {
      this._button.classList.add(...buttonClasses);
    }

    this._menu = document.createElement('ul');
    this._menu.classList.add('hidden');

    if (menuClasses) {
      this._menu.classList.add(...menuClasses);
    }

    document.body.addEventListener('click', this.handleDocumentClick);
    document.body.addEventListener('keydown', this.handleDocumentKeydown);

    this._element.appendChild(this._button);
    this._element.appendChild(this._menu);
  }

  public addMenuItem(menuItem: DropdownMenuItem) {
    this._menu.appendChild(menuItem.getElement());
    return this;
  }

  public getElement() {
    return this._element;
  }

  private toggleMenu() {
    this._menu.classList.toggle('hidden');
  }

  private handleDocumentClick = () => {
    if (!this._menu.classList.contains("hidden")) {
      this._menu.classList.add("hidden");
    }
  }

  private handleDocumentKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !this._menu.classList.contains("hidden")) {
      this._menu.classList.add("hidden");
    }
  }
}
