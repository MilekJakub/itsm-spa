interface HeaderProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  classes?: string[];
}

export class Header {
  private readonly _element: HTMLHeadingElement;

  constructor({ type, text, classes }: HeaderProps) {
    this._element = document.createElement(type);
    this._element.textContent = text;
    this._element.classList.add("heading");

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  getElement() {
    return this._element;
  }
}