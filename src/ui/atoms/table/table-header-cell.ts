interface TableHeaderCellProps {
  value: string | number | HTMLElement | null;
  classes?: string[];
}

export class TableHeaderCell {
  private readonly _element: HTMLElement;

  constructor({ value, classes }: TableHeaderCellProps) {
    this._element = document.createElement('th');
    this._element.classList.add('table-header-cell');

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
