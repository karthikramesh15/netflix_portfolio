// src/queries/getProjects.ts
import datoCMSClient from "./datoCMSClient";
import { Project } from "../types";

const GET_PROJECTS = `
  query {
    allAllprojects {
      title
      description
      techstack
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const response = await datoCMSClient.request<{ allAllprojects?: Project[] }>(GET_PROJECTS);

  console.log("RAW DATA FROM DATOCMS:", response);

  return response.allAllprojects ?? [];
}
