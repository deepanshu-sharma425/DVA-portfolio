import React from 'react';
import { LocationIcon, LinkIcon, GHIcon, LCIcon, LinkedInIcon, StarIcon, ForkIcon, RepoIcon } from './Icons';

const skills = ['Python','SQL (BigQuery)','Tableau','Power BI','Looker Studio','Pandas','NumPy','Excel','Statistical Analysis','EDA','React','Node.js'];

const links = [
  { icon: <LinkIcon />, label: 'https://dikshantjangra.me', href: 'https://dikshantjangra.me' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dikshantjangra/' },
  { icon: <GHIcon />, label: 'DikshantJangra', href: 'https://github.com/DikshantJangra' },
  { icon: <LCIcon />, label: 'LeetCode', href: 'https://leetcode.com/u/DikshantJangra' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-container">
        <img
          className="avatar"
          src="https://github.com/DikshantJangra.png"
          alt="Dikshant Jangra"
        />
      </div>
      <div className="name">Dikshant Jangra</div>
      <div className="username">@DikshantJangra</div>
      <p className="bio">
        Data Visualization Analyst & Full-Stack Developer | Python, Tableau, SQL | Transforming complex data into actionable insights.
      </p>

      <ul className="sidebar-links">
        <li><LocationIcon /> New Delhi, Bharat</li>
        {links.map((l, i) => (
          <li key={i}>
            {l.icon}
            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="stats-row">
        <StarIcon /> <strong>3</strong> stars &nbsp;·&nbsp;
        <RepoIcon /> <strong>19</strong> repos &nbsp;·&nbsp;
        <ForkIcon /> <strong>2</strong> forks
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skill-tags">
          {skills.map(sk => <span className="skill-tag" key={sk}>{sk}</span>)}
        </div>
      </div>
    </aside>
  );
}
