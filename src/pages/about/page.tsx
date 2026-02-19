
import AboutHero from './components/AboutHero';
import MissionValues from './components/MissionValues';
import HistoryTimeline from './components/HistoryTimeline';
import TeamSection from './components/TeamSection';
import CertificatesSection from './components/CertificatesSection';
import AboutCTA from './components/AboutCTA';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <div className="pt-16">
        <MissionValues />
      </div>
      <HistoryTimeline />
      <TeamSection />
      <CertificatesSection />
      <AboutCTA />
    </main>
  );
}
