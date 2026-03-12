import { Download } from "lucide-react";

export function ResumeDownloadSection() {
  return (
    <section className="bg-[#102A43] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-medium text-white mb-2">Resume</h2>
          <p className="text-gray-400 text-base">Download my full resume as a PDF</p>
        </div>
        <a
          href="/Jihee_Lee_Resume.pdf"
          download="Jihee_Lee_Resume.pdf"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#102A43] text-base font-medium rounded-full hover:bg-gray-100 transition-colors self-start md:self-auto"
        >
          <Download size={18} />
          Download PDF
        </a>
      </div>
    </section>
  );
}
