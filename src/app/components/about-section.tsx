import { Card } from "./ui/card";

export function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-8">About</h2>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            I'm a data analyst with a quantitative mindset and a passion for turning complex datasets into actionable insights. 
            My work spans financial modeling, predictive analytics, and data infrastructure—always with a focus on measurable impact.
          </p>
          <p>
            I combine technical proficiency in Python, SQL, and statistical methods with strong communication skills to bridge 
            the gap between data and decision-making.
          </p>
          <div className="pt-6 flex gap-8 text-base">
            <a href="mailto:john.doe@example.com" className="text-[#2A7F7F] hover:underline">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2A7F7F] hover:underline">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#2A7F7F] hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}