import React, { useEffect, useState } from "react";
import "./Skills.css";
import { getSkills } from "../queries/getSkills";
import { Skill } from "../types";

// ✅ Import all icons used across skills
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiKubernetes,
  SiGooglecloud,
  SiSpringboot,
  SiPhp,
  SiNetlify,
  SiHeroku,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiJenkins,
  SiPowerbi,
  SiApachekafka,
  SiPostman,
} from "react-icons/si";

// ✅ Map icon field names from DatoCMS to React Icons
const iconMap: { [key: string]: JSX.Element } = {
  // 💻 Backend
  SiSpringboot: <SiSpringboot />,
  FaNodeJs: <FaNodeJs />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaPython: <FaPython />,
  SiFlask: <SiFlask />,

  // ☁️ Cloud & DevOps
  FaAws: <FaAws />,
  SiGooglecloud: <SiGooglecloud />,
  SiJenkins: <SiJenkins />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  SiNetlify: <SiNetlify />,
  SiHeroku: <SiHeroku />,
  SiApachekafka: <SiApachekafka />,

  // 🗄️ Databases
  SiOracle: <SiOracle />,
  SiMysql: <SiMysql />,
  SiPostgresql: <SiPostgresql />,

  // 🎨 Frontend
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,

  // 🧰 Tools & Frameworks
  SiPostman: <SiPostman />,
  FaGitAlt: <FaGitAlt />,
  SiPowerbi: <SiPowerbi />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  // ✅ Fetch skills data from DatoCMS
  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  // ✅ Group skills by category, removing any trailing/extra spaces
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    const category = skill.category.trim(); // fix inconsistent spacing
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  // ✅ Define a fixed order for category rendering
  const orderedCategories = [
    "Backend",
    "Cloud & DevOps",
    "Database",
    "Frontend",
    "Programming Languages",
    "Tools & Frameworks",
  ];

  return (
    <div className="skills-container">
      {orderedCategories
        .filter((cat) => skillsByCategory[cat]) // show only existing ones
        .map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skillsByCategory[category].map((skill: any, idx: number) => (
                <div key={idx} className="skill-card">
                  <div className="icon">
                    {iconMap[skill.icon] || <FaReact />} {/* fallback */}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skills;
