import { Link } from 'react-router-dom';

export default function AboutFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo + Description */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/854bd2afa0b57ef90d2606cabd510734.png" 
                  alt="КировБелМаш" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white">КировБелМаш</div>
                <div className="text-xs text-gray-400">Промышленное оборудование</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Производство промышленного оборудования для линий брикетирования и гранулирования.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://t.me/" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-telegram-fill text-lg"></i>
              </a>
              <a href="https://wa.me/79005218477" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill text-lg"></i>
              </a>
              <a href="tel:+79005218477" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-phone-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-6">
              <Link to="/gallery" className="hover:text-red-400 transition-colors cursor-pointer">Оборудование</Link>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Прессы и грануляторы</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Сушильное оборудование</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Дробильное оборудование</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Транспортёры</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Главная</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">О компании</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Галерея оборудования</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Реализованные проекты</Link></li>
              <li><Link to="/contacts" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-red-500 text-lg mt-0.5"></i>
                <div>
                  <div className="text-sm font-medium">+7 900 521-84-77</div>
                  <div className="text-xs text-gray-400">Пн-Пт: 7:30 — 16:30</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-red-500 text-lg mt-0.5"></i>
                <div><div className="text-sm">sale@kirovbelmash.tw1.ru</div></div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-500 text-lg mt-0.5"></i>
                <div>
                  <div className="text-sm">Россия, Кировская область,</div>
                  <div className="text-sm">г. Белая Холуница</div>
                  <div className="text-xs text-gray-400">ул. Глазырина, 112</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© 2025 КировБелМаш. Все права защищены.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
