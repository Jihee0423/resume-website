import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  details?: string;
}

const education: Education[] = [
  {
    school: "SUNY Stony Brook University",
    degree: "Bachelor of Science",
    major: "Technological System Management | Applied Mathematics & Statistics",
    period: "2023 - 2026",
    details: "GPA: 3.95 / 4.0"
  }
];

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Chartered Financial Analyst (CFA) Level I",
    issuer: "CFA Institute",
    date: "2021"
  }
];

export function EducationSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-16">Education</h2>
        
        {education.map((edu, index) => (
          <div key={index} className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-1">{edu.school}</h3>
                <p className="text-gray-600">{edu.degree} · {edu.major}</p>
                {edu.details && (
                  <p className="text-sm text-gray-500 mt-1">{edu.details}</p>
                )}
              </div>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">{edu.period}</span>
            </div>
          </div>
        ))}

        <div className="mt-16">
          <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <div>
                  <h4 className="text-base font-medium text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <span className="text-sm text-gray-400 mt-1 md:mt-0">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}