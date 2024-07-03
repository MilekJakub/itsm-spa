interface ButtonProps {
  id?: string;
  classes?: string[];
  text?: string;
  disabled?: boolean;
}

export class Button {
  private readonly _id?: string;
  private readonly _element: HTMLButtonElement;

  constructor({ id, classes, text, disabled }: ButtonProps = {}) {
    this._element = document.createElement("button");
    this._element.classList.add("button");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }

    if (text) {
      this._element.textContent = text;
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

  public setText(text: string) {
    this._element.textContent = text;
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

  public setDisabled(disabled: boolean) {
    this._element.disabled = disabled;
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
