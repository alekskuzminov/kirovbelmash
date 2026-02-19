import { useState, useRef, useEffect } from 'react';
import { equipmentCatalog } from '../../../mocks/products';

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(equipmentCatalog.length / ITEMS_PER_PAGE);

export default function EquipmentCatalog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItems = equipmentCatalog.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const categories = [
    {
      name: 'Станки для производства брикетов',
      icon: 'ri-stack-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/06c995aed2f275191c6fdcdaed326fef.jpeg',
      description: 'Автоматы резки, прессы для брикетов Pini Kay и другое оборудование',
    },
    {
      name: 'Станки для производства пеллет',
      icon: 'ri-recycle-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/aabedc3e162ea526f65a6d6ce3434f17.jpeg',
      description: 'Грануляторы, колонны охлаждения и комплектующие для производства пеллет',
    },
    {
      name: 'Рубительные машины',
      icon: 'ri-scissors-cut-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/388e9f16e9d8ead72e3204bde9d4a257.jpeg',
      description: 'Дисковые и барабанные рубительные машины для первичного измельчения',
    },
    {
      name: 'Дробильное оборудование',
      icon: 'ri-hammer-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/eddc425da9a4d33549212ff9449b108b.jpeg',
      description: 'Молотковые дробилки для измельчения древесных отходов и щепы',
    },
    {
      name: 'Бункеры-накопители с ворошителем',
      icon: 'ri-archive-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/631b36dc4b658c10709412428dde9237.jpeg',
      description: 'Бункеры различного объёма для хранения и равномерной подачи материалов',
    },
    {
      name: 'Сушильное оборудование',
      icon: 'ri-fire-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/3658ca12134a1195329a6c0822b2e0f6.jpeg',
      description: 'Барабанные сушилки и теплогенераторы для снижения влажности сырья',
    },
    {
      name: 'Пневмотранспортное оборудование',
      icon: 'ri-windy-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/165513657912cc9a1dcfb27f886abae1.jpeg',
      description: 'Циклоны-осадители, шлюзовые затворы для транспортировки материалов',
    },
    {
      name: 'Приемное оборудование',
      icon: 'ri-inbox-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/a69af7ba19a7515c15ed0eaef4f342de.jpeg',
      description: 'Стокерные склады с механическим и гидравлическим подвижным дном',
    },
    {
      name: 'Транспортирующее оборудование',
      icon: 'ri-truck-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/a7c04561f337ae0a6f09300351e96a75.jpeg',
      description: 'Ленточные, цепные транспортёры, нории и шнековые питатели',
    },
    {
      name: 'Сортировочно-просеивающее оборудование',
      icon: 'ri-filter-3-line',
      image: 'https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/367be754dd2aadf934537d7deb14c068.jpeg',
      description: 'Барабанные просеиватели и дисковые сепараторы для сортировки материалов',
    },
  ];

  const goToPage = (page: number) => {
    if (isAnimating || page === currentPage) return;
    setSlideDirection(page > currentPage ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const goNext = () => {
    if (currentPage < totalPages - 1) goToPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 0) goToPage(currentPage - 1);
  };

  return (
    <section id="equipment" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Каталог оборудования
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/gallery"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              В каталог
              <i className="ri-arrow-right-line text-base"></i>
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={currentPage === 0}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  currentPage === 0
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                }`}
                aria-label="Предыдущая страница"
              >
                <i className="ri-arrow-left-s-line text-lg"></i>
              </button>
              <button
                onClick={goNext}
                disabled={currentPage === totalPages - 1}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  currentPage === totalPages - 1
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                }`}
                aria-label="Следующая страница"
              >
                <i className="ri-arrow-right-s-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          ref={containerRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-300 ${
            isAnimating
              ? slideDirection === 'right'
                ? 'opacity-0 translate-x-4'
                : 'opacity-0 -translate-x-4'
              : 'opacity-100 translate-x-0'
          }`}
          data-product-shop
        >
          {currentItems.map((item, index) => (
            <a
              key={`${currentPage}-${index}`}
              href="/gallery"
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-52 bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 px-2.5 py-1 rounded-md shadow-sm">
                  {item.count} {item.count === 1 ? 'позиция' : item.count < 5 ? 'позиции' : 'позиций'}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                  {item.category}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentPage
                  ? 'w-8 bg-red-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Страница ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile link */}
        <div className="sm:hidden mt-6 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Перейти в каталог
            <i className="ri-arrow-right-line text-base"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
