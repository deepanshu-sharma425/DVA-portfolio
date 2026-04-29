import React from 'react';
import { HiDocumentText, HiHand } from "react-icons/hi";

export default function ReadmeCard() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <HiDocumentText style={{ marginRight: '8px' }} />
        README.md
      </h2>
      <div className="readme-card">
        <h3 style={{ display: 'flex', alignItems: 'center' }}>
          Hi there <HiHand style={{ marginLeft: '8px', marginRight: '8px', color: '#ffcc33' }} /> I'm Deepanshu
        </h3>
        <p><strong>Data Visualization Analyst & Full-Stack Developer</strong></p>
        <ul>
          <li>Passionate about transforming complex datasets into clear, actionable visual stories.</li>
          <li>Expertise in <strong>Tableau</strong>, <strong>Power BI</strong>, and <strong>D3.js</strong> for interactive storytelling.</li>
          <li>Advanced <strong>SQL</strong> and <strong>Python</strong> skills for data engineering and insight generation.</li>
          <li>Focusing on <strong>Data-Driven Decision Making</strong> and <strong>Accessibility-First Visualization</strong>.</li>
          <li>Open to roles in: <strong>Data Analyst</strong> · <strong>BI Developer</strong> · <strong>Data Scientist</strong> · <strong>Visualization Specialist</strong></li>
        </ul>
        <blockquote>
          "Data without visualization is just noise."
        </blockquote>
      </div>
    </div>
  );
}
