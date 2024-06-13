import "./navbar.css";

export class Navbar {
  private readonly _id: string;
  private readonly _element: HTMLElement;
  private readonly _headerContainer: HTMLElement;
  private readonly _toolsContainer: HTMLElement;
  private _hasHeader: boolean;

  constructor(id: string) {
    this._id = id;

    this._element = document.createElement("nav");
    this._element.id = this._id;
    this._element.className = "navbar";

    this._headerContainer = document.createElement("div");
    this._headerContainer.className = "navbar-header-container";

    this._toolsContainer = document.createElement("div");
    this._toolsContainer.className = "navbar-controls-container";

    this._hasHeader = false;
  }

  public addHeader(text: string) {
    if (this._hasHeader) {
      return this;
    }

    const header = document.createElement("h2");
    header.className = "navbar-header";
    header.textContent = text;

    this._headerContainer.prepend(header);
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
    this._element.appendChild(this._headerContainer)
    this._element.appendChild(this._toolsContainer);
    return this._element;
  }
}
