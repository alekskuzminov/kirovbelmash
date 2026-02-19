import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config/site.config';

export default function SiteFooter() {
  const { contacts, social, assets, company } = SITE_CONFIG;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Column 1: Logo + Description */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={assets.logo}
                  alt={assets.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white">{company.name}</div>
                <div className="text-xs text-gray-400">{company.tagline}</div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
              {company.description}
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={social.telegram}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
                title="Telegram"
              >
                <i className="ri-telegram-fill text-base sm:text-lg"></i>
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
                title="WhatsApp"
              >
                <i className="ri-whatsapp-fill text-base sm:text-lg"></i>
              </a>
              <a
                href={`tel:${contacts.phone}`}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer"
                title="Позвонить"
              >
                <i className="ri-phone-fill text-base sm:text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">
              <Link to="/gallery" className="hover:text-red-400 transition-colors cursor-pointer">Оборудование</Link>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Прессы и грануляторы', 'Сушильное оборудование', 'Дробильное оборудование', 'Транспортёры', 'Вспомогательное'].map((item) => (
                <li key={item}>
                  <Link to="/gallery" className="text-xs sm:text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">Навигация</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { to: '/', label: 'Главная' },
                { to: '/about', label: 'О компании' },
                { to: '/services', label: 'Услуги' },
                { to: '/gallery', label: 'Галерея оборудования' },
                { to: '/projects', label: 'Реализованные проекты' },
                { to: '/calculator', label: 'Калькулятор стоимости' },
                { to: '/contacts', label: 'Контакты' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs sm:text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-sm sm:text-base font-bold mb-4 sm:mb-6">Контакты</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-red-500 text-base sm:text-lg mt-0.5"></i>
                <div>
                  <a href={`tel:${contacts.phone}`} className="text-xs sm:text-sm font-medium hover:text-red-400 transition-colors">
                    {contacts.phoneFormatted}
                  </a>
                  <div className="text-[10px] sm:text-xs text-gray-400">{contacts.workingHours}</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-red-500 text-base sm:text-lg mt-0.5"></i>
                <a href={`mailto:${contacts.email}`} className="text-xs sm:text-sm break-all hover:text-red-400 transition-colors">
                  {contacts.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-500 text-base sm:text-lg mt-0.5"></i>
                <div>
                  <div className="text-xs sm:text-sm">{contacts.address.country}, {contacts.address.region},</div>
                  <div className="text-xs sm:text-sm">{contacts.address.city}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">{contacts.address.street}</div>
                </div>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm text-red-500 hover:text-red-400 transition-colors cursor-pointer mt-1 sm:mt-2"
                >
                  <span>Все контакты</span>
                  <i className="ri-arrow-right-line text-sm sm:text-base"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © {company.copyrightYear} {company.name}. Все права защищены.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {contacts.address.city}, {contacts.address.street}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
