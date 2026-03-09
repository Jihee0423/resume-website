interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Tech Corporation",
    position: "Senior Data Analyst",
    period: "2022 - Present",
    description: [
      "Built predictive models that improved customer retention by 23% using machine learning",
      "Designed SQL data pipelines processing 10M+ records daily",
      "Led analytics initiatives, presenting insights to C-level executives"
    ]
  },
  {
    company: "Financial Analytics Firm",
    position: "Quantitative Analyst",
    period: "2020 - 2022",
    description: [
      "Developed algorithmic trading strategies using statistical arbitrage",
      "Performed risk analysis using Monte Carlo simulations",
      "Created backtesting framework for model performance evaluation"
    ]
  },
  {
    company: "Data Consulting Group",
    position: "Junior Data Analyst",
    period: "2018 - 2019",
    description: [
      "Conducted exploratory data analysis across retail and healthcare sectors",
      "Built interactive dashboards in Tableau and Power BI",
      "Performed statistical hypothesis testing"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-16">Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
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
    </section>
  );
}