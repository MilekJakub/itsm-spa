export class TableDataRow {
  private readonly _element: HTMLElement;
  private readonly _cells: HTMLElement[] = [];

  constructor() {
    this._element = document.createElement('tr');
    this._element.classList.add('table-data-row');
  }

  getElement() {
    this._cells.forEach(cell => this._element.appendChild(cell));
    return this._element;
  }

  getColumns() {
    return this._cells.length;
  }

  public addCells(...values: string[]) {
    values.forEach(value => this.addCell(value));
    return this;
  }

  public addCell(value: string, classes: string[] | undefined = undefined) {
    const dataCell = document.createElement('td');
    dataCell.classList.add('table-data-cell');

    dataCell.textContent = value;
    classes?.forEach(cssClass => dataCell.classList.add(cssClass));

    this._cells.push(dataCell);
    return this;
  }
}

export const createProjectsTableRow = (projectName: string, description: string): HTMLTableRowElement => {
  const row = document.createElement("tr");
  row.className = "table-data-row";

  const projectNameElement = document.createElement("td");
  projectNameElement.className = "table-data";
  projectNameElement.textContent = projectName;

  const projectDescriptionElement = document.createElement("td");
  projectDescriptionElement.className = "table-data";
  projectDescriptionElement.textContent = description;

  const projectActionsElement = document.createElement("td");
  projectActionsElement.className = "table-data";

  row.appendChild(projectNameElement);
  row.appendChild(projectDescriptionElement);
  row.appendChild(projectActionsElement);

  return row;
}