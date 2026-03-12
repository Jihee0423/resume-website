import profileImage from "@/assets/baa8ac534c07531a3cf29306186b4eb6dd6cf164.png";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Profile Photo - Right Side - More Prominent */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5">
        <div className="relative w-full h-full">
          <img 
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Minimal gradient only for text legibility on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent md:from-white/95 md:via-transparent md:to-transparent md:w-32"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-light">
            <span className="text-gray-900">I apply </span>
            <span className="text-[#2A7F7F] font-medium">mathematics & data</span>
            <span className="text-gray-900"> to turn complexity into actionable insight</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10">
            Quantitative researcher and analyst studying Applied Mathematics & Statistics
            at Stony Brook University, building data pipelines and financial models that drive decisions.
          </p>

          {/* CTA Below Headline */}
          <a
            href="mailto:Jihee.lee@stonybrook.edu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#102A43] text-white text-base rounded-full hover:bg-[#1a3a57] transition-colors"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}