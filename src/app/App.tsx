import { ResumeHeader } from "./components/resume-header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SelectedProjects } from "./components/selected-projects";
import { ExperienceSection } from "./components/experience-section";
import { SkillsSection } from "./components/skills-section";
import { EducationSection } from "./components/education-section";
import { Footer } from "./components/footer";
import { ResumeDownloadSection } from "./components/resume-download-section";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ResumeHeader />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="projects"><SelectedProjects /></div>
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ResumeDownloadSection />
      <div id="contact"><Footer /></div>
    </div>
  );
}