export function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-medium text-gray-900 mb-8">About</h2>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            I'm a double-major student at Stony Brook University studying Applied Mathematics & Statistics and
            Technological Systems Management, with a GPA of 3.95. I'm passionate about using quantitative methods
            to solve real-world problems—from portfolio optimization to disaster resilience research.
          </p>
          <p>
            My work spans financial data pipelines, time-series analysis, and teaching. I bring together
            technical skills in Python and SQL with strong communication to bridge the gap between data and decision-making.
          </p>
          <div className="pt-6 flex gap-8 text-base">
            <a href="mailto:jihee.lee423@gmail.com" className="text-[#2A7F7F] hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/jiheelee1" target="_blank" rel="noopener noreferrer" className="text-[#2A7F7F] hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}