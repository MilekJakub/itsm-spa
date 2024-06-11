import "./button.css";

export class Button {
  public readonly element: HTMLButtonElement;

  constructor(id: string | undefined = undefined, classes: string[] | undefined = undefined) {
    this.element = document.createElement("button");
    this.element.classList.add("button");

    classes?.forEach(cssClass => this.element.classList.add(cssClass));

    if (id) {
      this.element.id = id;
    }
  }

  public addHeader(text: string) {
    this.element.textContent = text;
    return this;
  }

  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined,
  ) {
    this.element.addEventListener(type, listener, options);
    return this;
  }
}
