import React from 'react';
import { LocationIcon, LinkIcon, GHIcon, LCIcon, LinkedInIcon, TableauIcon, StarIcon, ForkIcon, RepoIcon } from './Icons';

const skills = ['Python', 'SQL (BigQuery)', 'Tableau', 'Power BI', 'Looker Studio', 'Pandas', 'NumPy', 'Excel', 'Statistical Analysis', 'EDA', 'React', 'Node.js'];

const links = [

  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/deepanshu-sharma-57a225281?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: <GHIcon />, label: 'deepanshu-sharma425', href: 'https://github.com/deepanshu-sharma425' },
  { icon: <TableauIcon />, label: 'Tableau Public', href: 'https://public.tableau.com/app/profile/deepanshu.sharma4570/vizzes' },
  { icon: <LCIcon />, label: 'LeetCode', href: 'https://leetcode.com/u/deepanshusharma26/' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="avatar-container">
        <img
          className="avatar"
          src="https://github.com/deepanshu-sharma425.png"
          alt="Deepanshu"
        />
      </div>
      <div className="name">Deepanshu</div>
      <div className="username">@deepanshu-sharma425</div>
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
