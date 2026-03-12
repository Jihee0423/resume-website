interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
}

const research: Experience[] = [
  {
    company: "Stony Brook University",
    position: "Generative AI for Portfolio Optimization – AISI",
    location: "Stony Brook, NY",
    period: "Aug 2025 – Present",
    description: [
      "Contributed to portfolio analysis experiments using Python, focusing on risk-adjusted performance comparison.",
      "Assisted in building data pipelines for financial time-series analysis and simulation-based evaluation.",
      "Explored optimization-based approaches under guidance to analyze portfolio behavior."
    ]
  }
];

const professional: Experience[] = [
  {
    company: "Asia Pacific Disaster Resilience Center (APDRC)",
    position: "Disaster Resilience Research Intern",
    location: "Seoul, Korea",
    period: "Feb 2025 – Jun 2025",
    description: [
      "Supported data organization and analysis related to disaster and environmental resilience projects.",
      "Contributed to data-driven content development and digital information platforms."
    ]
  },
  {
    company: "Stony Brook University",
    position: "Teaching Assistant",
    location: "Seoul, Korea",
    period: "Feb 2025 – Jun 2025",
    description: [
      "Supported instruction and grading for 50+ students, facilitating problem-solving and improving course comprehension."
    ]
  },
  {
    company: "1325 Women's Peace & Diplomacy Forum",
    position: "Marketing Intern",
    location: "Seoul, Korea",
    period: "Mar 2022 – Jun 2022",
    description: [
      "Supported digital campaign planning using engagement data and performance tracking.",
      "Coordinated lecture programs and assisted in campaign performance analysis."
    ]
  }
];

const leadership: Experience[] = [
  {
    company: "Club LAMBDA",
    position: "President",
    location: "Incheon, Korea",
    period: "Sep 2024 – Aug 2025",
    description: [
      "Oversaw organizational strategy, supervising 4–5 research and project teams.",
      "Created professional development pipelines including office tours, workshops, and mentoring.",
      "Managed large-scale idea-thon events with over 90% satisfaction ratings."
    ]
  },
  {
    company: "World Federation of United Nations Associations (WFUNA)",
    position: "UN College Leader",
    location: "New York, NY",
    period: "Nov 2023 – Jan 2024",
    description: [
      "Led multinational student team on SDG 13 (Climate Action) policy development.",
      "Co-developed and presented policy proposals at the United Nations Headquarters."
    ]
  }
];

function ExperienceGroup({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div className="mb-16">
      <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-8">{title}</h3>
      <div className="space-y-12">
        {items.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-1">{exp.position}</h4>
                <p className="text-gray-600">{exp.company} · {exp.location}</p>
              </div>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-600 leading-relaxed pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-16">Experience</h2>
        <ExperienceGroup title="Research" items={research} />
        <ExperienceGroup title="Professional" items={professional} />
        <ExperienceGroup title="Leadership" items={leadership} />
      </div>
    </section>
  );
}