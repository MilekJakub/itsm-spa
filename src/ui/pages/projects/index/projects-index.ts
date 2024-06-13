import { renderElement } from "../../../utils.ts";
import { fetchProjects } from "../../../../infrastructure/services/projectsService.ts";
import { routes } from "../../../../infrastructure/constants/routes.ts";
import { Button } from "../../../atoms/button/button.ts";
import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { Navbar } from "../../../organisms/navbar/navbar.ts";
import { Table } from "../../../organisms/table/table.ts";
import { TableDataRow } from "../../../molecules/table/table-data-row.ts";
import {TableHeaderRow} from "../../../molecules/table/table-header-row.ts";

document.addEventListener("DOMContentLoaded", async () => {
  const sidebar = new Sidebar("sidebar");

  const createButton = new Button()
    .setText("Create")
    .addEventListener("click", () => window.location.href = routes.project.create);

  const navbar = new Navbar("projects-navbar")
    .addHeader("Your projects")
    .addTool(createButton.getElement());

  const projects = await fetchProjects();

  const headers = new TableHeaderRow()
    .addHeaders("Id", "Name", "Description")
    .addHeader("Actions", ["center"]);

  const rows = projects.map(project =>
    new TableDataRow()
      .addCells(project.id, project.name, project.description)
      .addCell(":", ["center"])
  );

  const projectsTable = new Table("projects-table")
    .addHeaderRow(headers)
    .addDataRows(rows);

  renderElement(sidebar.getId(), sidebar.getElement());
  renderElement(navbar.getId(), navbar.getElement());
  renderElement(projectsTable.getId(), projectsTable.getElement());
});
