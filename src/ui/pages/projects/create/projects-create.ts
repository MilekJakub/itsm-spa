import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { renderElement } from "../../../utils.ts";
import { Navbar } from "../../../organisms/navbar/navbar.ts";

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = new Sidebar({id: "sidebar"});

  const navbar = new Navbar("projects-navbar")
    .addHeader("Create project");

  renderElement(sidebar.getId(), sidebar.getElement());
  renderElement(navbar.getId(), navbar.getElement());
});