import {User} from "../../../domain/users/user.ts";

export class SidebarUser {
  public readonly element: HTMLElement;
  private readonly userIcon: HTMLElement;
  private readonly username: HTMLElement;
  private readonly userRole: HTMLElement;

  // @ts-ignore
  constructor(username: string, role: string) {
    this.element = document.createElement('div');
    this.element.className = 'sidebar-user';

    this.userIcon = document.createElement('i');
    this.userIcon.className = 'bx bx-user-circle icon sidebar-user-icon';

    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString ?? "{}") as User;

    this.username = document.createElement('p');
    this.username.id = 'username';
    this.username.className = 'bold';
    this.username.textContent = user.firstName;

    this.userRole = document.createElement('p');
    this.userRole.id = 'user-role';
    this.userRole.textContent = user.role;

    this.element.appendChild(this.userIcon);
    this.element.appendChild(this.username);
    this.element.appendChild(this.userRole);
  }
}