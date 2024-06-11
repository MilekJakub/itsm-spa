import { renderElement } from "../../../utils.ts";
import { fetchProjects } from "../../../../infrastructure/services/projectsService.ts";

import { NavbarBuilder } from "../../../organisms/navbar/navbar.ts";
import { projectsTableId, createProjectsTable } from "../../../organisms/table/table.ts";
import { createSidebar } from "../../../organisms/sidebar/sidebar.ts";
import { routes } from "../../../../infrastructure/constants/routes.ts";
import { Button } from "../../../atoms/button/button.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = createSidebar();
  renderElement("sidebar", sidebar);

  const navbarCreateButton = new Button()
    .addHeader("Create")
    .addEventListener("click", () => window.location.href = routes.project.create);

  const navbar = new NavbarBuilder("projects-navbar")
    .addHeader("Your projects")
    .addElement(navbarCreateButton.element)
    .build();

  renderElement("projects-navbar", navbar);

  const projects = await fetchProjects();
  const projectsTable = createProjectsTable(projects);
  renderElement(projectsTableId, projectsTable);
});
