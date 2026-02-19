import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { openRequestPopup } from '../../../components/feature/RequestPopup';

export default function CalculatorNavbar() {
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
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-lg">
              <i className="ri-settings-3-line text-2xl text-white"></i>
            </div>
            <div>
              <div className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>КировБелМаш</div>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>Промышленное оборудование</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Главная
            </Link>
            <Link to="/about" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              О компании
            </Link>
            <Link to="/services" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Услуги
            </Link>
            <Link to="/gallery" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Галерея
            </Link>
            <Link to="/projects" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Проекты
            </Link>
            <Link to="/calculator" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-red-600' : 'text-red-400'}`}>
              Калькулятор
            </Link>
            <Link to="/contacts" className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Контакты
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+79005218477" className={`flex items-center space-x-2 hover:text-red-600 transition-colors cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <i className="ri-phone-line text-lg"></i>
              <span className="text-sm font-medium whitespace-nowrap">+7 900 521-84-77</span>
            </a>
            <button
              onClick={openRequestPopup}
              className="px-6 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Получить КП
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            aria-label="Меню"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">Главная</Link>
            <Link to="/about" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">О компании</Link>
            <Link to="/services" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">Услуги</Link>
            <Link to="/gallery" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">Галерея</Link>
            <Link to="/projects" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">Проекты</Link>
            <Link to="/calculator" className="block py-2 text-sm font-medium text-red-600 cursor-pointer">Калькулятор</Link>
            <Link to="/contacts" className="block py-2 text-sm font-medium text-gray-700 hover:text-red-600 cursor-pointer">Контакты</Link>
            <div className="pt-3 border-t border-gray-200">
              <a href="tel:+79005218477" className="flex items-center space-x-2 text-gray-700 mb-3">
                <i className="ri-phone-line text-lg"></i>
                <span className="text-sm font-medium">+7 900 521-84-77</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openRequestPopup();
                }}
                className="block w-full px-6 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors text-center cursor-pointer whitespace-nowrap"
              >
                Получить КП
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
