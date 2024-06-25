interface HeaderProps {
  id?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  classes?: string[];
}

export class Header {
  private readonly _id?: string;
  private readonly _element: HTMLHeadingElement;

  constructor({ id, type, text, classes }: HeaderProps) {
    this._element = document.createElement(type);
    this._element.textContent = text;
    this._element.classList.add("heading");

    if (id) {
      this._id = id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  public getId() {
    return this._id;
  }

  public getElement() {
    return this._element;
  }
}