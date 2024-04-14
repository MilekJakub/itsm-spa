import {Project} from "../../models/project/project.ts";

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("create-button");

  if (!createButton) {
    throw Error("Cannot find the required 'create-button' element.");
  }

  createButton.addEventListener("click", () => {
    location.href = "create/create-project.html"
  });

  fetchProjects().then();
});

async function fetchProjects() {
  try {
    const response = await fetch('http://localhost:3000/projects');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const projects: Project[] = await response.json();
    updateProjectsTable(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
}

function updateProjectsTable(projects: Project[]) {
  const table = document.querySelector('.projects-table');
  projects.forEach(project => {
    const row = document.createElement('tr');
    row.className = 'projects-table-row';
    row.innerHTML = `
            <td class="projects-table-data">${project.name}</td>
            <td class="projects-table-data">${project.description}</td>
            <td class="projects-table-data projects-table-actions">
                <div class="projects-table-dropdown">
                    <button class="projects-table-dot-menu">&#8942;</button>
                    <div class="projects-table-dropdown-content">
                        <a class="projects-table-dropdown-item" href="#">Edit</a>
                        <a class="projects-table-dropdown-item" href="#">Delete</a>
                    </div>
                </div>
            </td>
        `;
    table?.appendChild(row);
  });
}
