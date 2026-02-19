import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactsNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-lg">
              <i className="ri-settings-3-line text-2xl text-white"></i>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">КировБелМаш</div>
              <div className="text-xs text-gray-500">Промышленное оборудование</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://t.me/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-sky-500 rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <i className="ri-telegram-fill text-lg"></i>
            </a>
            <a
              href="https://wa.me/79005218477"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <i className="ri-whatsapp-fill text-lg"></i>
            </a>
            <a
              href="tel:+79005218477"
              className="w-10 h-10 flex items-center justify-center bg-violet-600 rounded-full text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <i className="ri-phone-fill text-lg"></i>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              О компании
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Услуги
            </Link>
            <a
              href="/#products"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Продукция
            </a>
            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Галерея
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Проекты
            </Link>
            <a
              href="/#equipment"
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Оборудование
            </a>
            <Link
              to="/contacts"
              className="text-sm font-medium text-red-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Контакты
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+79005218477"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors cursor-pointer"
            >
              <i className="ri-phone-line text-lg"></i>
              <span className="text-sm font-medium whitespace-nowrap">
                +7 900 521-84-77
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-900"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <i
              className={`${
                isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'
              } text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer"
            >
              О компании
            </Link>
            <Link
              to="/services"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Услуги
            </Link>
            <a
              href="/#products"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Продукция
            </a>
            <Link to="/gallery" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">
              Галерея
            </Link>
            <Link to="/projects" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">
              Проекты
            </Link>
            <a
              href="/#equipment"
              className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer"
            >
              Оборудование
            </a>
            <Link
              to="/contacts"
              className="block py-2 text-sm font-medium text-red-600 cursor-pointer"
            >
              Контакты
            </Link>
            <div className="pt-3 border-t border-gray-200 flex items-center space-x-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-sky-500 rounded-full text-white cursor-pointer"
              >
                <i className="ri-telegram-fill text-lg"></i>
              </a>
              <a
                href="https://wa.me/79005218477"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-white cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-lg"></i>
              </a>
              <a
                href="tel:+79005218477"
                className="w-10 h-10 flex items-center justify-center bg-violet-600 rounded-full text-white cursor-pointer"
              >
                <i className="ri-phone-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
