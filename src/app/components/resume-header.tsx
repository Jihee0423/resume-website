import { ArrowUpRight } from "lucide-react";

export function ResumeHeader() {
  return (
    <header className="bg-white py-6 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900 tracking-wide">
            PORTFOLIO
          </div>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}