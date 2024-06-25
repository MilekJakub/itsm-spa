import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { Navbar } from "../../../organisms/navbar/navbar.ts";
import { Header } from "../../../atoms/text/header.ts";
import { renderElement } from "../../../../infrastructure/services/renderer.ts";

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = new Sidebar({ id: "sidebar" });

  const navbarHeader = new Header({type: "h2", text: "Create project", classes: ["text-bold"]});

  const navbar = new Navbar({ id: "navbar" })
    .addHeader(navbarHeader.getElement());

  renderElement(sidebar.getId(), sidebar.getElement());
  renderElement(navbar.getId(), navbar.getElement());
});