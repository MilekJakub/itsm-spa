interface ButtonProps {
  id?: string;
  classes?: string[];
}

export class Button {
  private readonly _id: string | undefined;
  private readonly _element: HTMLButtonElement;

  constructor({ id, classes }: ButtonProps = {}) {
    this._element = document.createElement("button");
    this._element.classList.add("button");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
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

  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions) {
    this._element.addEventListener(type, listener, options);
    return this;
  }
}
