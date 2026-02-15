import './ExperiencePage.css';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  languages: string[];
  techStacks: string[];
}

interface Leadership {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "FNZ",
    role: "Analyst Developer",
    period: "Sept 2024 - Nov 2025",
    description:
      "Contributed to the development of FNZ's global wealth management platform used by leading financial institutions. Built customer onboarding modules and portfolio dashboards, engineered backend transaction logic, and integrated APIs with external banking and compliance systems. Worked in Agile teams to deliver secure, scalable financial software.",
    languages: ["VB", "C", "JavaScript", "SQL"],
    techStacks: ["ASPX", "React", "REST APIs", "SQL Server", "Agile/Scrum"]
  },
  {
    id: 2,
    company: "Solve Data IO",
    role: "Business Analyst",
    period: "Jul 2022 - May 2023",
    description:
      "Designed and deployed interactive Amazon QuickSight dashboards to analyse marketing performance and user engagement. Wrote complex PostgreSQL queries to extract actionable insights and consulted with clients to translate business requirements into data-driven reporting solutions.",
    languages: ["SQL", "Python"],
    techStacks: ["PostgreSQL", "Amazon QuickSight", "Data Visualization", "Analytics"]
  },
  {
    id: 3,
    company: "New Jersey City University",
    role: "Athletics Operations Assistant",
    period: "Aug 2023 - Jun 2024",
    description:
      "Developed internal data tools to streamline athletic department logistics for 150+ student-athletes. Built SQL-based workflows and Excel automation tools to manage eligibility, scheduling, and performance tracking, improving operational efficiency and compliance.",
    languages: ["SQL", "Python"],
    techStacks: ["MySQL", "Excel Macros", "Data Analysis", "Workflow Optimization"]
  },
  {
  id: 4,
  company: "Lululemon",
  role: "Educator (Sales Associate)",
  period: "2021 - 2022",
  description:
    "Delivered high-quality customer experiences in a fast-paced retail environment, exceeding sales and engagement targets. Developed strong communication and consultative selling skills while educating customers on technical product features and brand values. Collaborated with team members to maintain visual standards and drive store performance.",
  languages: [],
  techStacks: ["Customer Engagement", "Sales KPIs", "Team Collaboration"]
}
];

const leadershipExperiences: Leadership[] = [
  {
    id: 1,
    role: "Vice President - Culture Club (Social)",
    organization: "FNZ, Auckland",
    period: "Jan 2025 - Nov 2025",
    description:
      "Led social and cultural initiatives to strengthen team cohesion across departments. Organised company-wide events, collaborated with leadership to align initiatives with company values, and fostered an inclusive and engaging workplace culture.",
    skills: ["Leadership", "Event Strategy", "Team Culture", "Cross-Team Collaboration"]
  },
  {
    id: 2,
    role: "Vice President",
    organization: "Student-Athlete Advisory Committee (NJCU)",
    period: "Aug 2022 - May 2023",
    description:
      "Acted as a liaison between student-athletes and university administration, advocating for policy improvements and student concerns. Represented the athletic community in outreach initiatives and mentorship programs.",
    skills: ["Advocacy", "Public Speaking", "Policy Engagement", "Community Outreach"]
  },
  {
    id: 3,
    role: "NCAA Division III Women's Tennis Team",
    organization: "New Jersey City University",
    period: "2021 - 2023",
    description:
      "Competed at the collegiate level while completing a B.S. in Computer Science (GPA 3.99). Recognised as First Team All-NJAC in singles and doubles and awarded NJCU Woman of the Year for academic and athletic excellence.",
    skills: ["High Performance", "Discipline", "Time Management", "Teamwork"]
  }
];


export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <h1 className="experience-title">Experience</h1>
      
      <section className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker">
              <div className="experience-dot"></div>
              <div className="experience-line"></div>
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
                <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-tokens">
                {exp.languages.length > 0 && (
                  <div className="token-group">
                    <span className="token-label">Languages</span>
                    <div className="tokens">
                      {exp.languages.map((lang) => (
                        <span key={lang} className="token">{lang}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {exp.techStacks.length > 0 && (
                  <div className="token-group">
                    <span className="token-label">{exp.languages.length > 0 ? 'Tech Stack' : 'Skills'}</span>
                    <div className="tokens">
                      {exp.techStacks.map((tech) => (
                        <span key={tech} className="token">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">Leadership & Activities</h2>
        
        <div className="leadership-list">
          {leadershipExperiences.map((lead) => (
            <div key={lead.id} className="leadership-item">
              <div className="leadership-marker">
                <div className="leadership-diamond"></div>
                <div className="leadership-line"></div>
              </div>
              
              <div className="leadership-card">
                <div className="leadership-header">
                  <h3 className="leadership-role">{lead.role}</h3>
                  <span className="leadership-period">{lead.period}</span>
                </div>
                <h4 className="leadership-org">{lead.organization}</h4>
                <p className="leadership-description">{lead.description}</p>
                
                <div className="leadership-tokens">
                  <div className="token-group">
                    <span className="token-label">Skills</span>
                    <div className="tokens">
                      {lead.skills.map((skill) => (
                        <span key={skill} className="token">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
