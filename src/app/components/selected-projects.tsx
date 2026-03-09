import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  tags: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Predictive Revenue Model",
    description: "Forecasted quarterly revenue with 94% accuracy using time series analysis and Prophet",
    year: "2023",
    tags: ["Python", "Machine Learning", "Forecasting"]
  },
  {
    title: "Portfolio Optimization Engine",
    description: "Improved risk-adjusted returns by 22% using Modern Portfolio Theory and Monte Carlo simulations",
    year: "2023",
    tags: ["Quantitative Finance", "Python", "Optimization"]
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Automated executive reporting, saving 15+ hours weekly with interactive data visualization",
    year: "2022",
    tags: ["Data Visualization", "React", "D3.js"]
  },
  {
    title: "Customer Churn Analysis",
    description: "Reduced churn by 18% through cohort segmentation and targeted interventions",
    year: "2022",
    tags: ["A/B Testing", "R", "Statistical Analysis"]
  }
];

export function SelectedProjects() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 mb-8">
            Selected projects
          </span>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border-b border-gray-100 pb-8 hover:border-[#2A9D8F] transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-[#2A9D8F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{project.year}</span>
                  <ArrowUpRight className="text-gray-400 group-hover:text-[#2A9D8F] transition-colors" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}