import "./navbar.css";

class Navbar {
  navbarContainer: HTMLElement;
  headerContainer: HTMLElement;
  controlsContainer: HTMLElement;
  hasHeader: boolean;

  constructor(id: string | undefined = undefined) {
    this.navbarContainer = document.createElement("nav");
    this.navbarContainer.id = id ?? "navbar";
    this.navbarContainer.className = "navbar";

    this.headerContainer = document.createElement("div");
    this.headerContainer.className = "navbar-header-container";

    this.controlsContainer = document.createElement("div");
    this.controlsContainer.className = "navbar-controls-container";

    this.hasHeader = false;
  }

  create() {
    this.navbarContainer.appendChild(this.headerContainer)
    this.navbarContainer.appendChild(this.controlsContainer);


    return this.navbarContainer;
  }
}

export class NavbarBuilder {
  private navbar: Navbar;

  constructor(id: string | undefined = undefined) {
    this.navbar = new Navbar(id);
  }

  public addHeader(text: string) {
    if (this.navbar.hasHeader) {
      return this;
    }

    const header = document.createElement("h2");
    header.className = "navbar-header";
    header.textContent = text;

    this.navbar.headerContainer.prepend(header);
    this.navbar.hasHeader = true;

    return this;
  }

  public addElement(element: HTMLElement) {
    this.navbar.controlsContainer.appendChild(element);
    return this;
  }

  public build() {
    return this.navbar.create();
  }
}
