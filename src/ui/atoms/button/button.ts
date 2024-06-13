import "./button.css";

export class Button {
  private readonly _id: string | undefined;
  private readonly _element: HTMLButtonElement;

  constructor(id: string | undefined = undefined, classes: string[] | undefined = undefined) {
    this._element = document.createElement("button");
    this._element.classList.add("button");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    classes?.forEach(cssClass => this._element.classList.add(cssClass));
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
    options?: boolean | AddEventListenerOptions | undefined,
  ) {
    this._element.addEventListener(type, listener, options);
    return this;
  }
}
