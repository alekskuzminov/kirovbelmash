
import Hero from './components/Hero';
import Products from './components/Products';
import EquipmentCatalog from './components/EquipmentCatalog';
import Advantages from './components/Advantages';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Products />
      <EquipmentCatalog />
      <Advantages />
      <Projects />
      <ContactForm />
    </div>
  );
}
