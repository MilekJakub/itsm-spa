import { createSidebar } from "../../../organisms/sidebar/sidebar.ts";
import { renderElement } from "../../../utils.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = createSidebar();
  renderElement("sidebar", sidebar);
});