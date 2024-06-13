import { renderElement } from "../../../utils.ts";
import { fetchProjects } from "../../../../infrastructure/services/projectsService.ts";
import { routes } from "../../../../infrastructure/constants/routes.ts";
import { Button } from "../../../atoms/button/button.ts";
import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { Navbar } from "../../../organisms/navbar/navbar.ts";
import {Table} from "../../../organisms/table/table.ts";
import {TableDataRow} from "../../../molecules/table/table-data-row.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = new Sidebar("sidebar");
  renderElement(sidebar.getId(), sidebar.getElement());

  const createButton = new Button()
    .setText("Create")
    .addEventListener("click", () => window.location.href = routes.project.create);

  const navbar = new Navbar("projects-navbar")
    .addHeader("Your projects")
    .addTool(createButton.getElement());

  renderElement(navbar.getId(), navbar.getElement());

  const projects = await fetchProjects();

  const dataRows = projects.map(project => new TableDataRow().addValues(project.id, project.name, project.description));

  const projectsTable = new Table("projects-table")
    .addHeaderRow()
    .addHeaders("Id", "Name", "Description")
    .addDataRows(dataRows);

  renderElement(projectsTable.getId(), projectsTable.getElement());
});
