import { isUser, User } from "./models/user/user.ts";

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

if (!isUser(user) && authorize(user)) {
  // location.href = "/src/pages/home/home.html";
}

function authorize(user: User): boolean {
  // TODO: Check if user exists in database
  console.log(user);
  return true;
}

// const app = document.getElementById("app") as HTMLFormElement;
