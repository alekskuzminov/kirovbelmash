
import { useState } from 'react';
import { equipmentCategories } from '../../../mocks/equipment';

interface GalleryFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export default function GalleryFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalCount,
}: GalleryFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <section className="pt-24 sm:pt-32 pb-6 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            <a href="/" className="hover:text-red-600 transition-colors cursor-pointer">Главная</a>
            <i className="ri-arrow-right-s-line text-base"></i>
            <span className="text-gray-900 font-medium">Каталог оборудования</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            <a href="/gallery" className="hover:text-red-600 transition-colors">Каталог оборудования</a>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Детальный каталог промышленного оборудования с техническими характеристиками и описанием
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Мобильная версия: фильтры с переносом строк */}
          <div className="flex flex-col gap-3 sm:hidden">
            <div className="flex items-center gap-2 flex-wrap">
              {equipmentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap cursor-pointer transition-all duration-200 flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base"></i>
              <input
                type="text"
                placeholder="Поиск оборудования..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 pr-4 py-2 w-full text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-gray-50"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-base"></i>
                </button>
              )}
            </div>
          </div>

          {/* Десктопная версия: фильтры и поиск в одной строке */}
          <div className="hidden sm:flex items-start gap-4">
            <div className="flex-1 flex items-center gap-2 flex-wrap">
              {equipmentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  placeholder="Поиск оборудования..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2.5 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-gray-50"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line text-base"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-gray-500">
              Найдено: <strong className="text-gray-900">{totalCount}</strong> единиц оборудования
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
