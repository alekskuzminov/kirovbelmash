import { EquipmentItem } from '../../../mocks/equipment';

interface EquipmentCardProps {
  item: EquipmentItem;
  onOpenDetail: (item: EquipmentItem) => void;
  index: number;
}

export default function EquipmentCard({ item, onOpenDetail, index }: EquipmentCardProps) {
  const badgeColors: Record<string, string> = {
    'Хит продаж': 'bg-red-500 text-white',
    'Новинка': 'bg-emerald-500 text-white',
    'Популярное': 'bg-amber-500 text-white',
  };

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => onOpenDetail(item)}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative w-full h-44 sm:h-56 bg-gray-50 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${badgeColors[item.badge] || 'bg-gray-700 text-white'}`}>
            {item.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-lg shadow-sm flex items-center gap-1.5">
            <i className="ri-eye-line text-sm"></i>
            Подробнее
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="text-[10px] sm:text-xs font-medium text-red-600 uppercase tracking-wider mb-1 sm:mb-1.5">
          {item.category}
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-red-600 transition-colors line-clamp-1">
          {item.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 sm:py-2 px-1">
            <i className="ri-flashlight-line text-red-500 text-sm sm:text-base mb-0.5 sm:mb-1"></i>
            <span className="text-[9px] sm:text-[11px] text-gray-500">Мощность</span>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-900">{item.power}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 sm:py-2 px-1">
            <i className="ri-speed-line text-red-500 text-sm sm:text-base mb-0.5 sm:mb-1"></i>
            <span className="text-[9px] sm:text-[11px] text-gray-500">Произв.</span>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-900">{item.capacity}</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg py-1.5 sm:py-2 px-1">
            <i className="ri-scales-3-line text-red-500 text-sm sm:text-base mb-0.5 sm:mb-1"></i>
            <span className="text-[9px] sm:text-[11px] text-gray-500">Масса</span>
            <span className="text-[10px] sm:text-xs font-semibold text-gray-900">{item.weight}</span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetail(item);
          }}
          className="w-full py-2 sm:py-2.5 bg-gray-900 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2"
        >
          Характеристики
          <i className="ri-arrow-right-line text-sm sm:text-base"></i>
        </button>
      </div>
    </div>
  );
}
