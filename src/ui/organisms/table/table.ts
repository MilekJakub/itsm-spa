import "./table.css";
import { Project } from "../../../domain/projects/project.ts";
import { createProjectsTableRow } from "../../molecules/table/table-row.ts";

export const projectsTableId = "projects-table";

export const createProjectsTable = (projects: Project[]) => {
  const table = document.createElement('table');
  table.id = projectsTableId;
  table.classList.add('table');

  const headerRow = document.createElement('tr');
  headerRow.classList.add('table-header-row');

  const headers = ['Project Name', 'Description', 'Actions'];
  headers.forEach((text) => {
    const th = document.createElement('th');
    th.classList.add('table-header');
    if (text === 'Actions') {
      th.classList.add('table-actions-header');
    }
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  projects.forEach((project) => {
    const row = createProjectsTableRow(project.name, project.description);
    table.appendChild(row);
  })

  return table;
}