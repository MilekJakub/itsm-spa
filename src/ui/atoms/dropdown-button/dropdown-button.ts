export class DropdownButton {
  private readonly _element: HTMLElement;
  private readonly _menu: HTMLElement;

  constructor() {
    this._element = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = ':';
    button.addEventListener('click', () => this.toggleMenu());

    this._menu = document.createElement('ul');
    this._menu.classList.add('hidden', 'absolute', 'bg-white', 'text-black', 'p-2');

    ['View', 'Edit', 'Delete'].forEach(action => {
      const menuItem = document.createElement('li');
      menuItem.classList.add('px-5', 'hover:cursor-pointer', 'hover:bg-gray-200');
      menuItem.textContent = action;
      menuItem.addEventListener('click', () => this.handleAction(action));
      this._menu.appendChild(menuItem);
    });

    this._element.appendChild(button);
    this._element.appendChild(this._menu);
  }

  private toggleMenu() {
    this._menu.classList.toggle('hidden');
  }

  private handleAction(action: string) {
    console.log(`Action: ${action}`);
  }

  getElement() {
    return this._element;
  }
}