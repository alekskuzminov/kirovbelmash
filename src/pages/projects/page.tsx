
import ProjectsHero from './components/ProjectsHero';
import ProjectsGallery from './components/ProjectsGallery';
import Testimonials from './components/Testimonials';
import ProjectsCTA from './components/ProjectsCTA';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      <ProjectsGallery />
      <Testimonials />
      <ProjectsCTA />
    </div>
  );
}
