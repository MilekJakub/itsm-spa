import { User } from "../../../domain/user.ts";

interface SidebarUserProps {
  username: string;
  role: string;
}

export class SidebarUser {
  private readonly _element: HTMLElement;
  private readonly _userIcon: HTMLElement;
  private readonly _username: HTMLElement;
  private readonly _userRole: HTMLElement;

  // @ts-ignore
  constructor({ username, role }: SidebarUserProps) {
    this._element = document.createElement('div');
    this._element.classList.add('sidebar-user');

    this._userIcon = document.createElement('i');
    this._userIcon.classList.add('icon', 'bx', 'bx-user-circle');

    // temporary for testing purposes
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString ?? "{}") as User;

    this._username = document.createElement('p');
    this._username.id = 'username';
    this._username.classList.add('font-bold');
    this._username.textContent = user.firstName;

    this._userRole = document.createElement('p');
    this._userRole.id = 'user-role';
    this._userRole.textContent = user.role;

    this._element.appendChild(this._userIcon);
    this._element.appendChild(this._username);
    this._element.appendChild(this._userRole);
  }

  public getElement() {
    return this._element;
  }
}