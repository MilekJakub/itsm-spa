export class TableHeaderRow {
  private readonly _id: string | undefined;
  private readonly _element: HTMLElement;
  private readonly _headers: HTMLElement[] = [];

  constructor(id: string | undefined = undefined) {
    this._element = document.createElement('tr');
    this._element.classList.add('table-header-row');

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }
  }

  getElement() {
    this._headers.forEach(header => this._element.appendChild(header));
    return this._element;
  }

  getColumns() {
    return this._headers.length;
  }

  public addHeader(value: string, classes: string[] | undefined = undefined) {
    const header = document.createElement('th');
    header.classList.add('table-header-cell');

    header.textContent = value;
    classes?.forEach(cssClass => this._element.classList.add(cssClass));

    this._headers.push(header);
    return this;
  }

  public addHeaders(...values: string[]) {
    values.forEach(value => this.addHeader(value));
    return this;
  }
}