interface LabelProps {
  id?: string;
  classes?: string[];
  text?: string;
  relatedComponentId?: string;
}

export class Label {
  private readonly _element: HTMLLabelElement;

  constructor({ id, classes = [], text = '', relatedComponentId }: LabelProps = {}) {
    this._element = document.createElement("label");
    this._element.classList.add("label");

    if (id) {
      this._element.id = id;
    }

    if (classes.length > 0) {
      this._element.classList.add(...classes);
    }

    if (text) {
      this._element.textContent = text;
    }

    if (relatedComponentId) {
      this._element.htmlFor = relatedComponentId;
    }
  }

  public getId() {
    return this._element.id;
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

  public setFor(forId: string) {
    this._element.htmlFor = forId;
    return this;
  }

  public addEventListener(
    type: keyof HTMLElementEventMap,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    this._element.addEventListener(type, listener, options);
    return this;
  }
}
