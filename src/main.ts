import { User } from "./domain/user.ts";
import { renderPage } from "./infrastructure/services/renderer.ts";
import { resolveRoute, routes } from "./infrastructure/services/router.ts";

function authorize(user: User): boolean {
  return !!user;
}

localStorage.setItem("user", `{"id": 1, "firstName": "George", "lastName": "Hotz", "role": "Developer" }`);
const userString = localStorage.getItem("user");
const user = JSON.parse(userString ?? "{}") as User;

if (!authorize(user)) {
  await renderPage(routes.home.index);
}

await resolveRoute();
