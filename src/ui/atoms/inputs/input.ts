interface InputProps {
  id?: string;
  classes?: string[];
  type?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

export class Input {
  private readonly _id?: string;
  private readonly _element: HTMLInputElement;

  constructor({ id, classes, type = 'text', value, placeholder, disabled }: InputProps = {}) {
    this._element = document.createElement("input");
    this._element.classList.add("input");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }

    this._element.type = type;

    if (value) {
      this._element.value = value;
    }

    if (placeholder) {
      this._element.placeholder = placeholder;
    }

    if (disabled !== undefined) {
      this._element.disabled = disabled;
    }
  }

  public getId() {
    return this._id;
  }

  public getElement() {
    return this._element;
  }

  public setType(type: string) {
    this._element.type = type;
    return this;
  }

  public setValue(value: string) {
    this._element.value = value;
    return this;
  }

  public setPlaceholder(placeholder: string) {
    this._element.placeholder = placeholder;
    return this;
  }

  public setDisabled(disabled: boolean) {
    this._element.disabled = disabled;
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
}
