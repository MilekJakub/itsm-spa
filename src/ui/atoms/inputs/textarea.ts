interface TextareaProps {
  id?: string;
  classes?: string[];
  placeholder?: string;
  value?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  readonly?: boolean;
}

export class Textarea {
  private readonly _id?: string;
  private readonly _element: HTMLTextAreaElement;

  constructor({ id, classes, placeholder, value, rows, cols, disabled, readonly }: TextareaProps = {}) {
    this._element = document.createElement("textarea");
    this._element.classList.add("textarea");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }

    if (placeholder) {
      this._element.placeholder = placeholder;
    }

    if (value) {
      this._element.value = value;
    }

    if (rows) {
      this._element.rows = rows;
    }

    if (cols) {
      this._element.cols = cols;
    }

    if (disabled) {
      this._element.disabled = disabled;
    }

    if (readonly) {
      this._element.readOnly = readonly;
    }
  }

  public getId() {
    return this._id;
  }

  public getElement() {
    return this._element;
  }

  public setValue(value: string) {
    this._element.value = value;
    return this;
  }

  public setPlaceholder(placeholder: string) {
    this._element.placeholder = placeholder;
    return this;
  }

  public setRows(rows: number) {
    this._element.rows = rows;
    return this;
  }

  public setCols(cols: number) {
    this._element.cols = cols;
    return this;
  }

  public setDisabled(disabled: boolean) {
    this._element.disabled = disabled;
    return this;
  }

  public setReadonly(readonly: boolean) {
    this._element.readOnly = readonly;
    return this;
  }

  public addClass(className: string) {
    this._element.classList.add(className);
    return this;
  }

  public removeClass(className: string) {
    this._element.classList.remove(className);
    return this;
  }

  public toggleClass(className: string) {
    this._element.classList.toggle(className);
    return this;
  }

  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    this._element.addEventListener(type, listener, options);
    return this;
  }

  public remove() {
    if (this._element.parentElement) {
      this._element.parentElement.removeChild(this._element);
    }
  }
}
