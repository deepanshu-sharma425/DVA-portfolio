import React from 'react';
import { RepoIcon, StarIcon, ForkIcon } from './Icons';
import { VscGraphLine } from "react-icons/vsc";
import { GoRocket } from "react-icons/go";

const pins = [
  {
    name: 'CleanThisData',
    url: 'https://github.com/DikshantJangra/CleanThisData',
    desc: 'Advanced Excel Data Cleaning & Analytics project — featuring complex data transformation, automated cleaning workflows, and interactive dashboards to reveal hidden trends and insights.',
    lang: 'Excel', langColor: '#217346',
    stars: 2, forks: 2,
    demo: { label: 'Excel', url: 'https://github.com/DikshantJangra/CleanThisData' },
  },
  {
    name: 'PitLane',
    url: 'https://github.com/Harsh-sh7/Section_E_Group_3_PitLane',
    desc: 'In the high-stakes world of Formula 1, races are often won or lost in the pit lane rather than on the track. This project analyzes 70+ years of F1 data to identify the "Golden Window" for pit strategy and track position retention.',
    lang: 'Python', langColor: '#3572A5',
    stars: 0,
    demo: { label: 'Tableau', url: 'https://genaicapstone2.streamlit.app' },
  },
  {
    name: 'StudentHealthAssessment360',
    url: 'https://github.com/DikshantJangra/StudentHealthAssessment360',
    desc: 'End-to-end data cleaning and EDA pipeline using Pandas and NumPy, developed as a robust data foundation for an Agentic AI system specializing in student health analytics.',
    lang: 'Jupyter Notebook', langColor: '#DA5B0B',
    stars: 1,
    demo: { label: 'Repository', url: 'https://github.com/DikshantJangra/StudentHealthAssessment360' },
  },
  {
    name: 'Amazon-Sales-Intelligence',
    url: 'https://public.tableau.com/app/profile/dikshant.jangra',
    desc: 'Comprehensive Tableau dashboarding project analyzing Amazon Electronics sales data — featuring dynamic KPI tracking, univariate/bivariate analysis, and executive-level storytelling to drive market strategy.',
    lang: 'Tableau', langColor: '#E97627',
    stars: 3,
    demo: { label: 'View Dashboard', url: 'https://public.tableau.com/views/AmazonElectronicsMarketIntelligenceDashboard/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' },
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
              {p.demo && (
                <a className="live-badge" href={p.demo.url} target="_blank" rel="noopener noreferrer">
                  <GoRocket style={{ marginRight: '4px' }} /> {p.demo.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
