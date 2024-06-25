import { Project } from "../../domain/project.ts";
import { backendUrl } from "../constants/api.ts";

export class ProjectsService {
  public async fetchProjects() {
    const response = await fetch(`${backendUrl}/projects`);

    if (!response.ok) {
      throw new Error(
        `[ERROR]: Failed to fetch the projects. Response code: ${response.status}`,
      );
    }

    const projects: Project[] = await response.json();
    return projects;
  }
}
