
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { openRequestPopup } from '../../../components/feature/RequestPopup';

const subMenuItems = [
  { label: 'Линии брикетирования', to: '#' },
  { label: 'Линии гранулирования', to: '#' },
  { label: 'Сушильные линии', to: '#' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const handleLinesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('production-lines');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-lg">
              <i className="ri-settings-3-line text-2xl text-white"></i>
            </div>
            <div>
              <div className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>КировБелМаш</div>
              <div className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>Промышленное оборудование</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center space-x-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                  isScrolled ? 'bg-sky-500 text-white hover:bg-sky-600' : 'bg-white/15 text-white hover:bg-white/25'
                }`}
                title="Telegram"
              >
                <i className="ri-telegram-fill text-base"></i>
              </a>
              <a
                href="https://wa.me/79005218477"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                  isScrolled ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white/15 text-white hover:bg-white/25'
                }`}
                title="WhatsApp"
              >
                <i className="ri-whatsapp-fill text-base"></i>
              </a>
            </div>
            <div className={`w-px h-6 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
            <a
              href="mailto:sale@kirovbelmash.tw1.ru"
              className={`flex items-center space-x-2 text-sm hover:text-red-500 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              <i className="ri-mail-line text-base"></i>
              <span className="whitespace-nowrap">sale@kirovbelmash.tw1.ru</span>
            </a>
            <div className={`w-px h-6 ${isScrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>
            <a
              href="tel:+79005218477"
              className={`flex items-center space-x-2 font-medium text-sm hover:text-red-500 transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <i className="ri-phone-line text-base"></i>
              <span className="whitespace-nowrap">+7 900 521-84-77</span>
            </a>
            <button
              onClick={openRequestPopup}
              className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Получить КП
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            aria-label="Открыть меню"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Row 2: Navigation */}
      <div className={`hidden lg:block border-t ${isScrolled ? 'border-gray-100' : 'border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-11">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                location.pathname === '/' ? 'text-red-600' : isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'
              }`}
            >
              Главная
            </Link>

            {/* Линии с dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <a
                href="/#production-lines"
                onClick={handleLinesClick}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'
                }`}
              >
                <span>Линии</span>
                <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </a>
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                    {subMenuItems.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.to}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/gallery" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              Каталог оборудования
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              О компании
            </Link>
            <Link to="/services" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              Услуги
            </Link>
            <Link to="/projects" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              Проекты
            </Link>
            <Link to="/calculator" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              Калькулятор
            </Link>
            <Link to="/contacts" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'}`}>
              Контакты
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5">
            <Link to="/" className={`block py-2.5 px-3 text-sm font-medium rounded-lg cursor-pointer transition-colors ${location.pathname === '/' ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'}`}>
              Главная
            </Link>

            {/* Линии mobile */}
            <div>
              <button
                onClick={() => setIsMobileSubOpen(!isMobileSubOpen)}
                className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
              >
                <span>Линии</span>
                <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${isMobileSubOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMobileSubOpen && (
                <div className="ml-4 space-y-0.5">
                  <a
                    href="/#production-lines"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById('production-lines');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                  >
                    Все линии
                  </a>
                  {subMenuItems.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.to}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link to="/gallery" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              Каталог оборудования
            </Link>
            <Link to="/about" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              О компании
            </Link>
            <Link to="/services" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              Услуги
            </Link>
            <Link to="/projects" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              Проекты
            </Link>
            <Link to="/calculator" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              Калькулятор
            </Link>
            <Link to="/contacts" className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
              Контакты
            </Link>

            <div className="pt-3 mt-2 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-2">
                <a href="https://t.me/" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-sky-500 rounded-full text-white cursor-pointer">
                  <i className="ri-telegram-fill text-base"></i>
                </a>
                <a href="https://wa.me/79005218477" target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full text-white cursor-pointer">
                  <i className="ri-whatsapp-fill text-base"></i>
                </a>
              </div>
              <a href="mailto:sale@kirovbelmash.tw1.ru" className="flex items-center space-x-2 text-gray-600 text-sm">
                <i className="ri-mail-line text-base"></i>
                <span>sale@kirovbelmash.tw1.ru</span>
              </a>
              <a href="tel:+79005218477" className="flex items-center space-x-2 text-gray-700 text-sm font-medium">
                <i className="ri-phone-line text-base"></i>
                <span>+7 900 521-84-77</span>
              </a>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openRequestPopup(); }}
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
