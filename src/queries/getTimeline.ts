import datoCMSClient from "./datoCMSClient";
import { TimelineItem } from "../types";

const GET_TIMELINE = `
  query {
    allAlltimelines {
      name
      timelinetype
      title
      techstack
      daterange
      summarypoints {
        summary
      }
    }
  }
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  try {
    const data = await datoCMSClient.request<any>(GET_TIMELINE);
    console.log("✅ DatoCMS raw response:", data);

    const raw = Array.isArray(data?.allAlltimelines)
      ? data.allAlltimelines
      : data?.allAlltimelines
      ? [data.allAlltimelines]
      : [];

    const formatted: TimelineItem[] = raw.map((item: any) => {
      let summary = "";

      const sp = item?.summarypoints;
      if (sp) {
        if (Array.isArray(sp)) {
          const first = sp.find((b: any) => b?.summary);
          summary = first?.summary ?? "";
        } else if (sp.summary) {
          summary = sp.summary;
        }
      }

      return {
        name: item?.name ?? "",
        timelineType: item?.timelinetype ?? "",
        title: item?.title ?? "",
        techStack: item?.techstack ?? "",
        dateRange: item?.daterange ?? "",
        summary,
      };
    });

    console.log("✨ Final timeline data:", formatted);
    return formatted;
  } catch (error) {
    console.error("❌ Error fetching from DatoCMS:", error);
    return [];
  }
}
