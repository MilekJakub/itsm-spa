import { TableDataCell } from "../../atoms/table/table-data-cell.ts";
import { TableHeaderCell } from "../../atoms/table/table-header-cell.ts";

interface TableRowProps {
  id?: string;
  classes?: string[];
}

export class TableRow {
  private readonly _id?: string;
  private readonly _element: HTMLElement;
  private readonly _cells: HTMLElement[] = [];

  constructor({ id, classes }: TableRowProps = {}) {
    this._id = id;
    this._element = document.createElement('tr');
    this._element.classList.add('table-row');

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  getId() {
    return this._id;
  }

  getElement() {
    this._cells.forEach(cell => this._element.appendChild(cell));
    return this._element;
  }

  getColumns() {
    return this._cells.length;
  }

  public addCells(...values: TableDataCell[]) {
    values.forEach(value => this.addCell(value));
    return this;
  }

  public addCell(cell: TableDataCell) {
    this._cells.push(cell.getElement());
    return this;
  }

  public addHeader(header: TableHeaderCell) {
    this._cells.push(header.getElement())
    return this;
  }

  public addHeaders(...values: TableHeaderCell[]) {
    values.forEach(value => this.addHeader(value));
    return this;
  }
}