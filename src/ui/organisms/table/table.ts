import "./table.css";
import { TableDataRow } from "../../molecules/table/table-data-row.ts";
import { TableHeaderRow } from "../../molecules/table/table-header-row.ts";

export class Table {
  private readonly _id: string;
  private readonly _element: HTMLTableElement;
  private _hasHeaderRow: boolean;
  private _headerRow: TableHeaderRow | undefined;
  private _dataRows: TableDataRow[] = [];

  constructor(id: string) {
    this._id = id;

    this._element = document.createElement("table") as HTMLTableElement;
    this._element.id = this._id;
    this._element.classList.add("table");

    this._hasHeaderRow = false;
  }

  getElement() {
    if (this._hasHeaderRow && this._headerRow) {
      this._element.appendChild(this._headerRow.getElement());
    }

    this._dataRows.forEach(row => this._element.appendChild(row.getElement()));

    return this._element;
  }

  getId() {
    return this._id;
  }

  public addHeaderRow(headerRow: TableHeaderRow) {
    if (this._hasHeaderRow) {
      throw new Error("[ERROR]: The table already has the header row.");
    }

    this._headerRow = headerRow;
    this._hasHeaderRow = true;
    return this;
  }

  public addDataRow(dataRow: TableDataRow) {
    const tooManyColumns = this._hasHeaderRow && this._headerRow && dataRow.getColumns() > this._headerRow.getColumns();

    if (tooManyColumns) {
      throw new Error("[ERROR]: Cannot add the data row because it has more columns than the table.");
    }

    this._dataRows.push(dataRow);
    return this;
  }

  public addDataRows(dataRows: TableDataRow[]) {
    dataRows.forEach(row => this.addDataRow(row));
    return this;
  }
}
