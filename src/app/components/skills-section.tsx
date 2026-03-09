interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Data",
    skills: ["Python", "R", "SQL", "Julia", "MATLAB"]
  },
  {
    category: "Analytics & ML",
    skills: ["Scikit-learn", "TensorFlow", "XGBoost", "Time Series", "A/B Testing"]
  },
  {
    category: "Visualization",
    skills: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Plotly"]
  },
  {
    category: "Statistical Methods",
    skills: ["Regression", "Hypothesis Testing", "Bayesian Inference", "Forecasting"]
  }
];

export function SkillsSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-16">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">{category.category}</h3>
              <p className="text-gray-700 leading-relaxed">
                {category.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}