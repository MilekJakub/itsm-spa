interface NavbarProps {
  id: string;
  classes?: string[];
}

export class Navbar {
  private readonly _id: string;
  private readonly _element: HTMLElement;
  private readonly _toolsContainer: HTMLElement;
  private _header?: HTMLElement;
  private _hasHeader: boolean;

  constructor({ id, classes }: NavbarProps) {
    this._id = id;

    this._element = document.createElement("nav");
    this._element.id = this._id;
    this._element.classList.add("navbar");

    if (classes) {
      this._element.classList.add(...classes);
    }

    this._toolsContainer = document.createElement("div");
    this._toolsContainer.classList.add("navbar-tools");

    this._hasHeader = false;
  }

  public addHeader(header: HTMLHeadingElement) {
    if (this._hasHeader) {
      return this;
    }
    this._header = header;
    this._hasHeader = true;
    return this;
  }

  public addTool(element: HTMLElement) {
    this._toolsContainer.appendChild(element);
    return this;
  }

  public getId() {
    return this._id;
  }

  public getElement() {
    if (this._hasHeader && this._header) {
      this._element.appendChild(this._header)
    }

    this._element.appendChild(this._toolsContainer);
    return this._element;
  }
}
