
import { features } from '../../../mocks/products';

export default function Features() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Что мы производим
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Полный комплекс оборудования для производства и переработки биомассы и древесных отходов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-red-50 rounded-xl mb-4 sm:mb-6">
                <i className={`${feature.icon} text-2xl sm:text-3xl text-red-600`}></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <i className="ri-check-line text-red-600 text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                    <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
