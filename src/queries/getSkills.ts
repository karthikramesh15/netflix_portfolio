// queries/getSkills.ts
import datoCMSClient from "./datoCMSClient";
import { Skill } from "../types";

// ✅ GraphQL query — sorted alphabetically by category for neat grouping
const GET_SKILLS = `
  query {
    allSkills(first: 100, orderBy: category_ASC) {
      name
      category
      description
      icon
    }
  }
`;

export async function getSkills(): Promise<Skill[]> {
  try {
    const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);

    if (!data?.allSkills || data.allSkills.length === 0) {
      console.warn("⚠️ No skills returned from DatoCMS!");
      return [];
    }

    console.log("✅ Skills fetched from DatoCMS:", data.allSkills);
    return data.allSkills;
  } catch (error) {
    console.error("❌ Error fetching skills from DatoCMS:", error);
    return [];
  }
}
