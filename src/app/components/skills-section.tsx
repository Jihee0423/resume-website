interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "SQL"]
  },
  {
    category: "Data Analysis",
    skills: ["Statistical Modeling", "Time-Series Analysis", "Optimization", "Simulation"]
  },
  {
    category: "Tools",
    skills: ["Excel", "Microsoft Office"]
  },
  {
    category: "Languages",
    skills: ["Korean (Native)", "English (Fluent)"]
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