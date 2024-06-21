import { DropdownButton } from "../../atoms/dropdown-button/dropdown-button.ts";

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

  public addCell(value: string | HTMLElement, classes: string[] | undefined = undefined) {
    const dataCell = document.createElement('td');
    dataCell.classList.add('table-data-cell');

    if (typeof value === "string") {
      dataCell.textContent = value;
    } else {
      dataCell.appendChild(value);
    }

    classes?.forEach(cssClass => dataCell.classList.add(cssClass));

    this._cells.push(dataCell);
    return this;
  }

  public addActionCell() {
    const actionCell = document.createElement('td');
    actionCell.classList.add('table-data-cell', 'flex', 'justify-center');

    const dropdownButton = new DropdownButton();
    actionCell.appendChild(dropdownButton.getElement());

    this._cells.push(actionCell);
    return this;
  }
}