import { renderElement } from "../../../utils.ts";
import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = new Sidebar({id: "sidebar"});
  renderElement(sidebar.getId(), sidebar.getElement());
});
