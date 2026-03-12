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
    title: "Generative AI for Portfolio Optimization",
    description: "Research at Stony Brook University (AISI): built data pipelines for financial time-series analysis, conducted risk-adjusted performance comparisons, and explored optimization-based approaches to analyze portfolio behavior.",
    year: "2025",
    tags: ["Python", "Optimization", "Time-Series Analysis", "Simulation"]
  },
  {
    title: "Disaster Resilience Data Analysis",
    description: "Supported data organization and analysis for environmental resilience projects at the Asia Pacific Disaster Resilience Center, contributing to data-driven content and digital information platforms.",
    year: "2025",
    tags: ["Data Analysis", "Research", "Environmental Science"]
  },
  {
    title: "SDG 13 Climate Action Policy",
    description: "Led a multinational student team at WFUNA to develop policy proposals on Climate Action (SDG 13), co-presenting at the United Nations Headquarters in New York.",
    year: "2023",
    tags: ["Policy Development", "Research", "United Nations"]
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