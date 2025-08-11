import { getCollection } from "astro:content";

export async function getAllProjects() {
  const projects = await getCollection("projects");
  
  return projects.map((project) => ({
    name: project.data.title,
    href: `/penpot/${project.data.slug}`,
    id: project.id,
    ...project.data,
  }));
}

export async function getProjectsNavigation() {
  const projects = await getAllProjects();
  
  return projects.map((project, index) => ({
    name: project.title,
    href: project.href,
    active: index === 0, // Make first project active by default
  }));
}
