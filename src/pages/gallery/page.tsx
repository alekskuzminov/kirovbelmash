
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GalleryFilters from './components/GalleryFilters';
import EquipmentCard from './components/EquipmentCard';
import EquipmentModal from './components/EquipmentModal';
import GalleryCTA from './components/GalleryCTA';
import { equipmentItems, equipmentCategories, EquipmentItem } from '../../mocks/equipment';

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'Все';
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && equipmentCategories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'Все') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredItems = useMemo(() => {
    let items = equipmentItems;

    if (activeCategory !== 'Все') {
      items = items.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <GalleryFilters
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={filteredItems.length}
      />

      <section className="pb-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-product-shop>
              {filteredItems.map((item, index) => (
                <EquipmentCard
                  key={item.id}
                  item={item}
                  onOpenDetail={setSelectedItem}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-6">
                <i className="ri-search-line text-3xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ничего не найдено</h3>
              <p className="text-sm text-gray-500 mb-6">
                Попробуйте изменить параметры поиска или выбрать другую категорию
              </p>
              <button
                onClick={() => {
                  handleCategoryChange('Все');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>

      <GalleryCTA />

      <EquipmentModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
