interface MenuItemProps {
  text: string;
  onClickHandler: () => void;
  classes?: string[]
}

export class DropdownMenuItem {
  private readonly _element: HTMLElement;

  constructor({ text, onClickHandler, classes }: MenuItemProps) {
    this._element = document.createElement('li');
    this._element.textContent = text;
    this._element.addEventListener('click', onClickHandler);

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  getElement() {
    return this._element;
  }
}