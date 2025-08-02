import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { SkillsSection } from "./skills-section";
import { ProjectsSection } from "./projects-section";
import { ContactSection } from "./contact-section";
import { FloatingElements } from "./floating-elements";
import { ScrollProgress } from "./scroll-progress";

export default function V2({ proyect, data }: { proyect: any; data: any }) {
  // console.log("ESTE SON LOS PROYECTOS", proyect);
  // console.log("ESTE SON LOS DATOS", data);

  return (
    <main className='relative min-h-screen bg-black text-white overflow-x-hidden'>
      {/* Background Effects */}
      <div className='fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20' />
      <div className='fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' />

      <ScrollProgress />
      <FloatingElements />

      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection proyect={proyect} />
      <ContactSection />
    </main>
  );
}
