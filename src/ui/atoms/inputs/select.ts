import { SelectOption } from "./select-option";

interface SelectProps {
  id?: string;
  classes?: string[];
  options?: SelectOption[];
  disabled?: boolean;
}

export class Select {
  private readonly _id: string | undefined;
  private readonly _element: HTMLSelectElement;
  private _options: SelectOption[] = [];

  constructor({ id, classes, options, disabled }: SelectProps = {}) {
    this._element = document.createElement("select");
    this._element.classList.add("select");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }

    if (options) {
      this.setOptions(options);
    }

    if (disabled !== undefined) {
      this._element.disabled = disabled;
    }
  }

  public getId() {
    return this._id;
  }

  public getElement(): HTMLSelectElement {
    this._options.forEach(option => this._element.appendChild(option.getElement()));
    return this._element;
  }

  public setOptions(options: SelectOption[]): void {
    this._options = options;
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
    options?: boolean | AddEventListenerOptions) {
    this._element.addEventListener(type, listener, options);
    return this;
  }
}
