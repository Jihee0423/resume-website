import profileImage from "@/assets/baa8ac534c07531a3cf29306186b4eb6dd6cf164.png";
import { ArrowUpRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white">
      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <div className="w-full h-[65vh]">
          <img
            src={profileImage}
            alt="Jihee Lee"
            className="w-full h-full object-cover object-[center_8%]"
          />
        </div>
        <div className="px-6 py-12">
          <h1 className="text-4xl leading-[1.15] mb-6 font-light">
            <span className="text-gray-900">I apply </span>
            <span className="text-[#2A7F7F] font-medium">mathematics & data</span>
            <span className="text-gray-900"> to turn complexity into actionable insight</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Quantitative researcher and analyst studying Applied Mathematics & Statistics
            at Stony Brook University, building data pipelines and financial models that drive decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:jihee.lee423@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#102A43] text-white text-base rounded-full hover:bg-[#1a3a57] transition-colors"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>
            <a
              href="/Jihee_Lee_Resume.pdf"
              download="Jihee_Lee_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 text-gray-700 text-base rounded-full hover:border-gray-500 transition-colors"
            >
              Resume
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side layout */}
      <div className="hidden md:flex min-h-[85vh] items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5">
          <div className="relative w-full h-full">
            <img
              src={profileImage}
              alt="Jihee Lee"
              className="w-full h-full object-cover object-[center_5%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-transparent to-transparent w-32"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-7xl leading-[1.1] mb-8 font-light">
              <span className="text-gray-900">I apply </span>
              <span className="text-[#2A7F7F] font-medium">mathematics & data</span>
              <span className="text-gray-900"> to turn complexity into actionable insight</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
              Quantitative researcher and analyst studying Applied Mathematics & Statistics
              at Stony Brook University, building data pipelines and financial models that drive decisions.
            </p>
            <a
              href="mailto:jihee.lee423@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#102A43] text-white text-base rounded-full hover:bg-[#1a3a57] transition-colors"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
