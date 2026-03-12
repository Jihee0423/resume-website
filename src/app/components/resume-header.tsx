import { ArrowUpRight } from "lucide-react";
import profileImage from "figma:asset/baa8ac534c07531a3cf29306186b4eb6dd6cf164.png";

export function ResumeHeader() {
  return (
    <header className="bg-white py-6 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900 tracking-wide">
            PORTFOLIO
          </div>
          <div className="flex items-center gap-8">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Work
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              About
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}