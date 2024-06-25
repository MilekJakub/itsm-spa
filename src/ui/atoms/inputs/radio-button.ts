interface RadioButtonProps {
  id?: string;
  classes?: string[];
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}

export class RadioButton {
  private readonly _id: string | undefined;
  private readonly _element: HTMLInputElement;

  constructor({ id, classes, name, value, checked, disabled }: RadioButtonProps = {}) {
    this._element = document.createElement("input");
    this._element.type = "radio";
    this._element.classList.add("radio-button");

    if (id) {
      this._id = id;
      this._element.id = this._id;
    }

    if (classes) {
      this._element.classList.add(...classes);
    }

    if (name) {
      this._element.name = name;
    }

    if (value) {
      this._element.value = value;
    }

    if (checked) {
      this._element.checked = checked;
    }

    if (disabled) {
      this._element.disabled = disabled;
    }
  }

  public getId(): string | undefined {
    return this._id;
  }

  public getElement() {
    return this._element;
  }

  public setName(name: string) {
    this._element.name = name;
    return this;
  }

  public setValue(value: string) {
    this._element.value = value;
    return this;
  }

  public setChecked(checked: boolean) {
    this._element.checked = checked;
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

  public remove(): void {
    if (this._element.parentElement) {
      this._element.parentElement.removeChild(this._element);
    }
  }
}
