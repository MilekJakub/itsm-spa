interface TableDataCellProps {
  value: string | number | HTMLElement | null;
  classes?: string[];
}

export class TableDataCell {
  private readonly _element: HTMLElement;

  constructor({ value, classes }: TableDataCellProps) {
    this._element = document.createElement('td');
    this._element.classList.add('table-data-cell');

    if (typeof value === 'string' || typeof value === 'number') {
      this._element.textContent = String(value);
    } else if (value instanceof HTMLElement) {
      this._element.appendChild(value);
    }

    if (classes) {
      this._element.classList.add(...classes);
    }
  }

  public getElement(): HTMLElement {
    return this._element;
  }
}
