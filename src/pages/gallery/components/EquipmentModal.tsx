
import { useEffect, useRef, useState } from 'react';
import { EquipmentItem } from '../../../mocks/equipment';

interface EquipmentModalProps {
  item: EquipmentItem | null;
  onClose: () => void;
}

export default function EquipmentModal({ item, onClose }: EquipmentModalProps) {
  const [activeTab, setActiveTab] = useState<'specs' | 'description' | 'features'>('specs');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      setActiveTab('specs');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  const badgeColors: Record<string, string> = {
    'Хит продаж': 'bg-red-500 text-white',
    'Новинка': 'bg-emerald-500 text-white',
    'Популярное': 'bg-amber-500 text-white',
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden animate-modal-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer text-gray-600"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          <div className="lg:w-1/2 bg-gray-50 p-6 lg:p-8 flex flex-col items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-top"
              />
              {item.badge && (
                <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${badgeColors[item.badge] || 'bg-gray-700 text-white'}`}>
                  {item.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 w-full">
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <i className="ri-flashlight-line text-red-500 text-xl mb-1"></i>
                <div className="text-xs text-gray-500">Мощность</div>
                <div className="text-sm font-bold text-gray-900">{item.power}</div>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <i className="ri-speed-line text-red-500 text-xl mb-1"></i>
                <div className="text-xs text-gray-500">Производительность</div>
                <div className="text-sm font-bold text-gray-900">{item.capacity}</div>
              </div>
              <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                <i className="ri-scales-3-line text-red-500 text-xl mb-1"></i>
                <div className="text-xs text-gray-500">Масса</div>
                <div className="text-sm font-bold text-gray-900">{item.weight}</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-6 lg:p-8 lg:overflow-y-auto">
            <div className="text-xs font-medium text-red-600 uppercase tracking-wider mb-2">
              {item.category}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>

            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 mb-6">
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Характеристики
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'features'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Преимущества
              </button>
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'description'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Описание
              </button>
            </div>

            {activeTab === 'specs' && (
              <div className="space-y-0">
                {item.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg ${
                      idx % 2 === 0 ? 'bg-gray-50' : ''
                    }`}
                  >
                    <span className="text-sm text-gray-600">{spec.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-3">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-red-600 text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'description' && (
              <div className="prose prose-sm max-w-none">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg flex-shrink-0">
                      <i className="ri-information-line text-red-600 text-lg"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Индивидуальная комплектация</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Оборудование может быть изготовлено с учётом ваших индивидуальных требований. Свяжитесь с нами для расчёта стоимости.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contacts"
                className="flex-1 py-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-mail-send-line text-base"></i>
                Запросить КП
              </a>
              <a
                href="tel:+79005218477"
                className="flex-1 py-3 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="ri-phone-line text-base"></i>
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
