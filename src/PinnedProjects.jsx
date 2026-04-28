import React from 'react';
import { RepoIcon, StarIcon, ForkIcon } from './Icons';
import { VscGraphLine } from "react-icons/vsc";
import { GoRocket } from "react-icons/go";

const pins = [
  {
    name: 'E-commerce-Customer-Churn-Analysis',
    url: 'https://github.com/DikshantJangra/CleanThisData',
    desc: 'End-to-end Tableau data analysis project uncovering churn patterns across 50,000 customer records — builds KPIs, performs statistical analysis, and delivers interactive dashboards with actionable retention insights.',
    lang: 'Tableau', langColor: '#E97627',
    stars: 2, forks: 2,
    demos: [
      { label: 'GitHub', url: 'https://github.com/DikshantJangra/CleanThisData' },
      { label: 'Demo', url: 'https://docs.google.com/spreadsheets/d/1jypvW5yaTOvDCb12l3g3hzA_vk0ajBjvZMlo82fRdmw/edit?gid=1432256275#gid=1432256275' },
    ],
  },
  {
    name: 'PitLane',
    url: 'https://github.com/Harsh-sh7/Section_E_Group_3_PitLane',
    desc: 'In the high-stakes world of Formula 1, races are often won or lost in the pit lane rather than on the track. This project analyzes 70+ years of F1 data to identify the "Golden Window" for pit strategy and track position retention.',
    lang: 'Python', langColor: '#3572A5',
    stars: 0,
    demos: [
      { label: 'Tableau', url: 'https://public.tableau.com/app/profile/dikshantjangra/viz/F1PitLaneDashboard3_Harshit_17774048067430/DriverSkillIntelligenceDecouplingPerformancefromMachinery19502017?publish=yes' },
    ],
  },
  {
    name: 'StudentHealthAssessment360',
    url: 'https://github.com/DikshantJangra/StudentHealthAssessment360',
    desc: 'End-to-end data cleaning and EDA pipeline using Pandas and NumPy, developed as a robust data foundation for an Agentic AI system specializing in student health analytics.',
    lang: 'Jupyter Notebook', langColor: '#DA5B0B',
    stars: 1,
    demos: [{ label: 'Repository', url: 'https://github.com/DikshantJangra/StudentHealthAssessment360' }],
  },
  {
    name: 'Uber-Analysis-Dashboard',
    url: 'https://public.tableau.com/app/profile/dikshantjangra/viz/UberAnalysisDashboard_17774044073330/Univariateanalysis?publish=yes',
    desc: 'An interactive Tableau dashboard analyzing Uber ride data — monitors trip demand, revenue trends, and peak usage hours; visualizes ride distribution across locations to enable quick, data-driven decision-making.',
    lang: 'Tableau', langColor: '#E97627',
    stars: 3,
    demos: [{ label: 'View Dashboard', url: 'https://public.tableau.com/app/profile/dikshantjangra/viz/UberAnalysisDashboard_17774044073330/Univariateanalysis?publish=yes' }],
  },
];

export default function PinnedProjects() {
  return (
    <div className="section">
      <h2 className="section-title" style={{ display: 'flex', alignItems: 'center' }}>
        <VscGraphLine style={{ marginRight: '8px' }} />
        Data Visualization & Analytics Work
      </h2>
      <div className="pinned-grid">
        {pins.map((p) => (
          <div className="pin-card" key={p.name}>
            <div className="pin-card-header">
              <RepoIcon />
              <a className="pin-card-name" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </div>
            <p className="pin-card-desc">{p.desc}</p>
            <div className="pin-card-footer">
              <span>
                <span className="lang-dot" style={{ backgroundColor: p.langColor }} />
                {p.lang}
              </span>
              {p.stars > 0 && (
                <span><StarIcon /> {p.stars}</span>
              )}
              {p.forks > 0 && (
                <span><ForkIcon /> {p.forks}</span>
              )}
              {p.demos?.map((d) => (
                <a key={d.label} className="live-badge" href={d.url} target="_blank" rel="noopener noreferrer">
                  <GoRocket style={{ marginRight: '4px' }} /> {d.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
