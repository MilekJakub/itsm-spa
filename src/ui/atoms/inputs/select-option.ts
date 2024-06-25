interface SelectOptionProps {
  value: string;
  text: string;
  selected?: boolean;
}

export class SelectOption {
  private readonly _element: HTMLOptionElement;

  constructor({ value, text, selected = false }: SelectOptionProps) {
    this._element = document.createElement("option");
    this._element.value = value;
    this._element.textContent = text;
    this._element.selected = selected;
  }

  public getElement(): HTMLOptionElement {
    return this._element;
  }

  public setValue(value: string) {
    this._element.value = value;
  }

  public setText(text: string) {
    this._element.textContent = text;
  }

  public setSelected(selected: boolean) {
    this._element.selected = selected;
  }
}
