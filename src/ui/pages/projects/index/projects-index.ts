import { ProjectsService } from "../../../../infrastructure/services/projectsService.ts";
import { Button } from "../../../atoms/buttons/button.ts";
import { Sidebar } from "../../../organisms/sidebar/sidebar.ts";
import { Navbar } from "../../../organisms/navbar/navbar.ts";
import { Table } from "../../../organisms/table/table.ts";
import { TableRow } from "../../../molecules/table/table-row.ts";
import { DropdownButton } from "../../../atoms/buttons/dropdown-button.ts";
import { DropdownMenuItem } from "../../../atoms/buttons/dropdown-menu-item.ts";
import { TableDataCell } from "../../../atoms/table/table-data-cell.ts";
import { TableHeaderCell } from "../../../atoms/table/table-header-cell.ts";
import { Header } from "../../../atoms/text/header.ts";
import { Project } from "../../../../domain/project.ts";
import { renderElement } from "../../../../infrastructure/services/renderer.ts";
import { routes } from "../../../../infrastructure/services/router.ts";

const createNavbar = () => {
  const navButton = new Button({
    classes: [
      "rounded-lg",
      "border",
      "border-transparent",
      "px-4",
      "py-2",
      "bg-white",
      "text-black",
      "cursor-pointer",
    ],
  })
    .setText("Create")
    .addEventListener(
      "click",
      () => (window.location.href = routes.projects.create.path),
    )
    .getElement();

  const navHeading = new Header({
    type: "h2",
    text: "Your projects",
    classes: ["font-bold"],
  }).getElement();

  return new Navbar({
    id: "navbar",
    classes: ["flex", "justify-between", "w-full", "p-4"],
  })
    .addHeader(navHeading)
    .addTool(navButton);
};

const createTable = (projects: Project[]) => {
  const headers = new TableRow({classes: ["text-left", "border-b", "border-white"]})
    .addHeaders(
      new TableHeaderCell({value: "Id", classes: ["p-4"]}),
      new TableHeaderCell({value: "Name", classes: ["p-4"]}),
      new TableHeaderCell({value: "Description", classes: ["p-4"]}),
      new TableHeaderCell({value: "Actions", classes: ["flex", "justify-center", "p-4"]}));

  const data = projects.map(project =>
    new TableRow({ classes: ["hover:bg-zinc-800"]})
      .addCells(
        new TableDataCell({value: project.id, classes: ["p-4"]}),
        new TableDataCell({value: project.name, classes: ["p-4"]}),
        new TableDataCell({value: project.description, classes: ["p-4"]}),
        new TableDataCell({value: createActionsButton(), classes: ["p-4"]})));

  return new Table({id: "table", classes: ["w-full", "border-collapse"]})
    .addHeaderRow(headers)
    .addDataRows(data);
}

const createActionsButton = () => {
  const dropdownButton = new DropdownButton({
    text: ":",
    containerClasses: ["flex", "w-100", "h-100", "justify-center"],
    buttonClasses: ["px-2"],
    menuClasses: ["absolute", "bg-white", "text-black", "p-2"]
  });

  const menuItemClasses = ["hover:cursor-pointer", "hover:bg-gray-200", "px-4"];

  const viewMenuItem = new DropdownMenuItem({
    text: "View",
    onClickHandler: () => console.log("View"),
    classes: menuItemClasses
  });

  const editMenuItem = new DropdownMenuItem({
    text: "Edit",
    onClickHandler: () => console.log("Edit"),
    classes: menuItemClasses
  });

  const deleteMenuItem = new DropdownMenuItem({
    text: "Delete",
    onClickHandler: () => console.log("Delete"),
    classes: menuItemClasses
  });

  dropdownButton
    .addMenuItem(viewMenuItem)
    .addMenuItem(editMenuItem)
    .addMenuItem(deleteMenuItem);

  return dropdownButton.getElement();
}

document.title = "Projects";

const sidebar = new Sidebar({ id: "sidebar" });
const navbar = createNavbar();

const projectsService = new ProjectsService();
const projects = await projectsService.fetchProjects();
const table = createTable(projects);

renderElement(sidebar.getId(), sidebar.getElement());
renderElement(navbar.getId(), navbar.getElement());
renderElement(table.getId(), table.getElement());


