import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-lg">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <div>
                <div className="text-xl font-bold">КировБелМаш</div>
                <div className="text-xs text-gray-400">С 2014 года</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Ведущий производитель промышленного оборудования для линий брикетирования и гранулирования.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Линии брикетирования
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Линии гранулирования
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Сушильное оборудование
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Дробильное оборудование
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-sm text-gray-400 hover:text-red-5 transition-colors cursor-pointer">
                  Вспомогательное оборудование
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Проектирование оборудования
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Монтаж и установка
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Пусконаладка
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Обучение персонала
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                  Реализованные проекты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-red-500 text-lg mt-0.5"></i>
                <div>
                  <div className="text-sm font-medium">+7-800-321-44-77</div>
                  <div className="text-xs text-gray-400">Пн-Пт: 9:00 — 18:00</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-red-500 text-lg mt-0.5"></i>
                <div>
                  <div className="text-sm">sales@kirovbelmash.ru</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-500 text-lg mt-0.5"></i>
                <div>
                  <div className="text-sm">г. Киров, Россия</div>
                  <div className="text-xs text-gray-400">Производство: 5000 м²</div>
                </div>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="inline-flex items-center space-x-2 text-sm text-red-500 hover:text-red-400 transition-colors cursor-pointer mt-2"
                >
                  <span>Все контакты</span>
                  <i className="ri-arrow-right-line text-base"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 КировБелМаш. Все права защищены.
            </p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
