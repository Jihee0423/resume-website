interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
  coursework?: string;
}

const education: Education[] = [
  {
    school: "Stony Brook University",
    degree: "Bachelor of Science (Double Major): Applied Mathematics & Statistics and Technological Systems Management",
    period: "Expected May 2026",
    details: "GPA: 3.95 / 4.00",
    coursework: "Optimization, Probability, Statistics, Financial Mathematics, Data Mining"
  },
  {
    school: "Ghent University Global Campus",
    degree: "Coursework in Molecular Biotechnology (Transferred)",
    period: "May 2020 – Jun 2023"
  }
];

const honors = [
  {
    title: "Academic Achievement Award – Stony Brook University (2023–2025)",
    details: [
      "Three-time recipient for achieving a 4.0 semester GPA with 12+ graded credits",
      "Academic Excellence Scholarship ($15,525) | Academic Prestige Scholarship ($6,388)"
    ]
  }
];

export function EducationSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-16">Education</h2>

        <div className="space-y-10 mb-16">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  {edu.details && (
                    <p className="text-sm text-gray-500 mt-1">{edu.details}</p>
                  )}
                  {edu.coursework && (
                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium">Key Coursework:</span> {edu.coursework}
                    </p>
                  )}
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0 shrink-0 ml-8">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-6">Honors & Awards</h3>
          <div className="space-y-4">
            {honors.map((honor, index) => (
              <div key={index}>
                <h4 className="text-base font-medium text-gray-900 mb-2">{honor.title}</h4>
                <ul className="space-y-1">
                  {honor.details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-600 pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}