import React from 'react';
import { VscTools } from "react-icons/vsc";

const skills = [
  { name: 'Data Visualization', color: '#2ea44f' },
  { name: 'Tableau & Power BI', color: '#2ea44f' },
  { name: 'Looker Studio', color: '#2ea44f' },
  { name: 'Python (Pandas, NumPy)', color: '#2ea44f' },
  { name: 'SQL (BigQuery, PostgreSQL)', color: '#2ea44f' },
  { name: 'Statistical Analysis', color: '#2ea44f' },
  { name: 'Excel (Advanced Analytics)', color: '#2ea44f' },
  { name: 'EDA & Pipelines', color: '#2ea44f' },
  { name: 'Data Storytelling', color: '#2ea44f' },
  { name: 'React & Frontend', color: '#2ea44f' },
];

export default function TechStack() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <VscTools style={{ marginRight: '8px' }} />
        Tech Stack
      </h2>
      <div className="tech-stack-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map(s => (
          <span 
            key={s.name} 
            className="tech-badge"
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: `1px solid var(--border)`,
              backgroundColor: 'rgba(46, 164, 79, 0.1)',
              color: 'var(--green)',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
