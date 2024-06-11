import { User } from "./domain/users/user.ts";
import {routes} from "./infrastructure/constants/routes.ts";

localStorage.setItem("user", `{"id": 1, "firstName": "George", "lastName": "Hotz", "role": "Developer" }`);

const userString = localStorage.getItem("user");
const user = JSON.parse(userString ?? "{}") as User;

if (authorize(user)) {
  window.location.href = routes.home.index;
}

function authorize(user: User): boolean {
  console.log(user);
  return true;
}
