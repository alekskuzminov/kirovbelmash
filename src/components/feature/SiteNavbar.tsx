import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { openRequestPopup } from './RequestPopup';

interface SiteNavbarProps {
  variant?: 'transparent' | 'solid';
}

const linesSubMenu = [
  { label: 'Линии брикетирования', to: '#' },
  { label: 'Линии гранулирования', to: '#' },
  { label: 'Сушильные линии', to: '#' },
];

const equipmentSubMenu = [
  { label: 'Станки для производства брикетов', category: 'Станки для производства брикетов' },
  { label: 'Станки для производства пеллет', category: 'Станки для производства пеллет' },
  { label: 'Рубительные машины', category: 'Рубительные машины' },
  { label: 'Дробильное оборудование', category: 'Дробильное оборудование' },
  { label: 'Бункеры-накопители с ворошителем', category: 'Бункеры-накопители с ворошителем' },
  { label: 'Сушильное оборудование', category: 'Сушильное оборудование' },
  { label: 'Пневмотранспортное оборудование', category: 'Пневмотранспортное оборудование' },
  { label: 'Приемное оборудование', category: 'Приемное оборудование' },
  { label: 'Транспортирующее оборудование', category: 'Транспортирующее оборудование' },
  { label: 'Сортировочно-просеивающее оборудование', category: 'Сортировочно-просеивающее оборудование' },
];

type DropdownId = 'lines' | 'equipment' | null;

const navLinks = [
  { to: '/', label: 'Главная', isAnchor: false, dropdownId: null as DropdownId },
  { to: '/#production-lines', label: 'Линии', isAnchor: true, dropdownId: 'lines' as DropdownId },
  { to: '/gallery', label: 'Каталог оборудования', isAnchor: false, dropdownId: 'equipment' as DropdownId },
  { to: '/about', label: 'О компании', isAnchor: false, dropdownId: null as DropdownId },
  { to: '/services', label: 'Услуги', isAnchor: false, dropdownId: null as DropdownId },
  { to: '/projects', label: 'Проекты', isAnchor: false, dropdownId: null as DropdownId },
  { to: '/calculator', label: 'Калькулятор', isAnchor: false, dropdownId: null as DropdownId },
  { to: '/contacts', label: 'Контакты', isAnchor: false, dropdownId: null as DropdownId },
];

export default function SiteNavbar({ variant = 'transparent' }: SiteNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [mobileOpenSub, setMobileOpenSub] = useState<DropdownId>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenSub(null);
  }, [location.pathname, location.search]);

  const isSolid = variant === 'solid' || isScrolled;

  const isActive = (path: string) => {
    if (path.includes('#')) return false;
    return location.pathname === path;
  };

  const handleDropdownEnter = (id: DropdownId) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleLinesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('production-lines');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#production-lines');
    }
    setOpenDropdown(null);
  };

  const handleEquipmentCategoryClick = (category: string) => {
    navigate(`/gallery?category=${encodeURIComponent(category)}`);
    setOpenDropdown(null);
  };

  const renderDesktopDropdown = (link: typeof navLinks[0]) => {
    if (link.dropdownId === 'lines') {
      return (
        <div
          key={link.to}
          className="relative"
          onMouseEnter={() => handleDropdownEnter('lines')}
          onMouseLeave={handleDropdownLeave}
        >
          <a
            href={link.to}
            onClick={handleLinesClick}
            className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1 ${
              isSolid ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'
            }`}
          >
            <span>{link.label}</span>
            <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${openDropdown === 'lines' ? 'rotate-180' : ''}`}></i>
          </a>
          {openDropdown === 'lines' && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                {linesSubMenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.to}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(null);
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
      );
    }

    if (link.dropdownId === 'equipment') {
      return (
        <div
          key={link.to}
          className="relative"
          onMouseEnter={() => handleDropdownEnter('equipment')}
          onMouseLeave={handleDropdownLeave}
        >
          <Link
            to="/gallery"
            className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center space-x-1 ${
              isActive('/gallery') ? 'text-red-600' : isSolid ? 'text-gray-700 hover:text-red-600' : 'text-gray-100 hover:text-white'
            }`}
          >
            <span>{link.label}</span>
            <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${openDropdown === 'equipment' ? 'rotate-180' : ''}`}></i>
          </Link>
          {openDropdown === 'equipment' && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[300px] max-h-[70vh] overflow-y-auto">
                {equipmentSubMenu.map((sub) => (
                  <a
                    key={sub.category}
                    href={`/gallery?category=${encodeURIComponent(sub.category)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleEquipmentCategoryClick(sub.category);
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
      );
    }

    return null;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Row 1: Logo + Messengers + Email + Phone + CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/854bd2afa0b57ef90d2606cabd510734.png" 
                alt="КировБелМаш" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className={`text-xl font-bold ${isSolid ? 'text-gray-900' : 'text-white'}`}>
                КировБелМаш
              </div>
              <div className={`text-xs ${isSolid ? 'text-gray-500' : 'text-gray-300'}`}>
                Промышленное оборудование
              </div>
            </div>
          </Link>

          {/* Messengers + Email + Phone + CTA (desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Messengers */}
            <div className="flex items-center space-x-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                  isSolid
                    ? 'bg-sky-500 text-white hover:bg-sky-600'
                    : 'bg-white/15 text-white hover:bg-white/25'
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
                  isSolid
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
                title="WhatsApp"
              >
                <i className="ri-whatsapp-fill text-base"></i>
              </a>
            </div>

            {/* Divider */}
            <div className={`w-px h-6 ${isSolid ? 'bg-gray-200' : 'bg-white/20'}`}></div>

            {/* Email */}
            <a
              href="mailto:sale@kirovbelmash.tw1.ru"
              className={`flex items-center space-x-2 text-sm hover:text-red-500 transition-colors cursor-pointer ${
                isSolid ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              <i className="ri-mail-line text-base"></i>
              <span className="whitespace-nowrap">sale@kirovbelmash.tw1.ru</span>
            </a>

            {/* Divider */}
            <div className={`w-px h-6 ${isSolid ? 'bg-gray-200' : 'bg-white/20'}`}></div>

            {/* Phone */}
            <a
              href="tel:+79005218477"
              className={`flex items-center space-x-2 font-medium text-sm hover:text-red-500 transition-colors cursor-pointer ${
                isSolid ? 'text-gray-800' : 'text-white'
              }`}
            >
              <i className="ri-phone-line text-base"></i>
              <span className="whitespace-nowrap">+7 900 521-84-77</span>
            </a>

            {/* CTA */}
            <button
              onClick={openRequestPopup}
              className="px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Получить КП
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center ${
              isSolid ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Меню"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Row 2: Navigation menu (desktop) */}
      <div className={`hidden lg:block border-t ${isSolid ? 'border-gray-100' : 'border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-11">
            {navLinks.map((link) =>
              link.dropdownId ? (
                renderDesktopDropdown(link)
              ) : link.isAnchor ? (
                <a
                  key={link.to}
                  href={link.to}
                  className={`text-sm font-medium hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer ${
                    isSolid ? 'text-gray-700' : 'text-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive(link.to)
                      ? 'text-red-600'
                      : isSolid
                      ? 'text-gray-700 hover:text-red-600'
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) =>
              link.dropdownId === 'lines' ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileOpenSub(mobileOpenSub === 'lines' ? null : 'lines')}
                    className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <span>{link.label}</span>
                    <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${mobileOpenSub === 'lines' ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileOpenSub === 'lines' && (
                    <div className="ml-4 space-y-0.5">
                      <a
                        href="/#production-lines"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (location.pathname === '/') {
                            const el = document.getElementById('production-lines');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate('/#production-lines');
                          }
                        }}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                      >
                        Все линии
                      </a>
                      {linesSubMenu.map((sub) => (
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
              ) : link.dropdownId === 'equipment' ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileOpenSub(mobileOpenSub === 'equipment' ? null : 'equipment')}
                    className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <span>{link.label}</span>
                    <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${mobileOpenSub === 'equipment' ? 'rotate-180' : ''}`}></i>
                  </button>
                  {mobileOpenSub === 'equipment' && (
                    <div className="ml-4 space-y-0.5">
                      <Link
                        to="/gallery"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                      >
                        Всё оборудование
                      </Link>
                      {equipmentSubMenu.map((sub) => (
                        <a
                          key={sub.category}
                          href={`/gallery?category=${encodeURIComponent(sub.category)}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen(false);
                            handleEquipmentCategoryClick(sub.category);
                          }}
                          className="block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.isAnchor ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block py-2.5 px-3 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                    isActive(link.to) ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-2 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-sky-500 rounded-full text-white cursor-pointer"
                >
                  <i className="ri-telegram-fill text-base"></i>
                </a>
                <a
                  href="https://wa.me/79005218477"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full text-white cursor-pointer"
                >
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
