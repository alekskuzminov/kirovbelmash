
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ProcessSteps from './components/ProcessSteps';
import ServiceDetails from './components/ServiceDetails';
import ServicesAdvantages from './components/ServicesAdvantages';
import ServicesCTA from './components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSteps />
      <ServiceDetails />
      <ServicesAdvantages />
      <ServicesCTA />
    </main>
  );
}
