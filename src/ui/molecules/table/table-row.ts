export const createProjectsTableRow = (projectName: string, description: string): HTMLTableRowElement => {
  const row = document.createElement("tr");
  row.className = "table-table-row";

  const projectNameElement = document.createElement("td");
  projectNameElement.className = "table-table-data";
  projectNameElement.textContent = projectName;

  const projectDescriptionElement = document.createElement("td");
  projectDescriptionElement.className = "table-table-data";
  projectDescriptionElement.textContent = description;

  const projectActionsElement = document.createElement("td");
  projectActionsElement.className = "table-table-data";

  row.appendChild(projectNameElement);
  row.appendChild(projectDescriptionElement);
  row.appendChild(projectActionsElement);

  return row;
}