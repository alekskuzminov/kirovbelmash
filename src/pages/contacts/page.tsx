
import ContactsHero from './components/ContactsHero';
import ContactDetails from './components/ContactDetails';
import ContactsForm from './components/ContactsForm';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactsHero />
      <ContactDetails />
      <ContactsForm />
    </div>
  );
}
