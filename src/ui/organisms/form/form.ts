interface FormProps {
  id?: string
}

export class Form {
  private readonly _id?: string;
  private readonly _element: HTMLElement;


  constructor({ id }: FormProps) {
    this._id = id;
  }
}