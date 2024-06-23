import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { renderElement } from "../../../../infrastructure/ui/renderer.ts";

document.title = "Home";

const sidebar = new Sidebar({id: "sidebar"});
renderElement(sidebar.getId(), sidebar.getElement());
