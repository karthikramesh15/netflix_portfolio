import React, { useEffect, useState } from 'react';
import './Certifications.css';

import {
  SiUdemy,
  SiCoursera,
  SiGoogle,
  SiMicrosoft,
  SiAmazon,
} from "react-icons/si";

import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";



import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  google: <SiGoogle />,
  microsoft: <SiMicrosoft />,
  aws: <SiAmazon />,

  // fallback:
  default: <FaUniversity />
};


const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCertifications();
        setCertifications(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            key={`${cert.title}-${index}`}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconname?.toLowerCase()] || <FaUniversity />}
              </div>

              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issueddate && (
                <span className="issued-date">Issued {cert.issueddate}</span>
              )}
            </div>

            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
