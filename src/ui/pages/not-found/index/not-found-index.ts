import { Header } from "../../../atoms/text/header.ts";
import { renderElement } from "../../../../infrastructure/services/renderer.ts";

const header = new Header({id: "header", type: "h1", text: "404 page not found!", classes: ["font-bold", "text-4xl"]});

const app = document.getElementById("app")!;
app.classList.add("flex", "justify-center");

renderElement(header.getId()!, header.getElement());