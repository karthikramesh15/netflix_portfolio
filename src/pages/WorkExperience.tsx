import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";
import { getTimeline } from "../queries/getTimeline";
import { TimelineItem } from "../types";

const WorkExperience: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTimeline()
      .then((items) => {
        console.log("✅ Timeline data fetched:", items);
        setTimelineData(items);
      })
      .catch((err) => {
        console.error("❌ Error fetching timeline:", err);
        setError("Failed to load timeline data.");
      });
  }, []);

  // 🔸 Error state
  if (error) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "5rem" }}>
        {error}
      </div>
    );
  }

  // 🔸 Loading state
  if (!timelineData || timelineData.length === 0) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "5rem" }}>
        Loading timeline...
      </div>
    );
  }

  // 🔸 Main Timeline
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education</h2>
      </div>

      <VerticalTimeline>
        {timelineData.map((item, index) => {
          const isWork = item.timelineType?.toLowerCase() === "work";

          return (
            <VerticalTimelineElement
              key={`${item.name}-${index}`}
              className={`vertical-timeline-element--${
                isWork ? "work" : "education"
              }`}
              contentStyle={
                isWork
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "rgb(240, 240, 240)", color: "#000" }
              }
              contentArrowStyle={{
                borderRight: isWork
                  ? "7px solid rgb(33, 150, 243)"
                  : "7px solid rgb(240, 240, 240)",
              }}
              date={item.dateRange || ""}
              iconStyle={
                isWork
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "rgb(255, 160, 200)", color: "#fff" }
              }
              icon={isWork ? <WorkIcon /> : <SchoolIcon />}
            >
              <div style={{ color: isWork ? "white" : "black" }}>
                <h3 className="vertical-timeline-element-title">
                  {item.title || "Untitled"}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.name || "Unknown"}
                </h4>

                {item.techStack && (
                  <p className="vertical-timeline-element-tech">
                     {item.techStack}
                  </p>
                )}

                {item.summary && (
                  <p className="timeline-summary">{item.summary}</p>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}

        {/* Ending Star */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
