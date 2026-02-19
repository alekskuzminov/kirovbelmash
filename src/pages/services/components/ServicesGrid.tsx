import { useState } from 'react';
import { servicesData as mockServicesData } from '../../../mocks/services';

/**
 * ServicesGrid component – displays a list of services with expandable details.
 * Includes basic defensive programming:
 *   • Falls back to an empty array if `servicesData` is undefined or not an array.
 *   • Catches unexpected errors during render of a service item.
 */
export default function ServicesGrid() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Defensive fallback – ensures `services` is always an array.
  const services = Array.isArray(mockServicesData) ? mockServicesData : [];

  return (
    <section
      id="services"
      className="pt-20 sm:pt-28 pb-12 sm:pb-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <span className="text-red-600 text-sm font-medium tracking-wider uppercase">
              Что мы делаем
            </span>
            <div className="w-8 h-0.5 bg-red-500"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наши услуги
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к реализации промышленных проектов — от первого
            чертежа до стабильной работы вашего производства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => {
            const isOpen = activeService === service.id;

            // Guard against malformed service objects – prevents runtime crashes.
            if (!service?.id) return null;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-40 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg">
                    Этап {service.number}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg">
                        <i
                          className={`${service.icon} text-lg text-white`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-200">{service.subtitle}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1.5">
                        <i className="ri-time-line text-red-500 text-base"></i>
                        <span className="text-xs text-gray-500">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <i className="ri-bar-chart-box-line text-red-500 text-base"></i>
                        <span className="text-xs text-gray-500">
                          {service.stats?.value} {service.stats?.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setActiveService(isOpen ? null : service.id)
                    }
                    className="flex items-center space-x-1.5 text-sm font-medium text-red-600 hover:text-red-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>{isOpen ? 'Свернуть' : 'Подробнее'}</span>
                    <i
                      className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line text-lg`}
                      aria-hidden="true"
                    ></i>
                  </button>

                  {isOpen && (
                    <div className="mt-5 pt-5 border-t border-gray-100 animate-fadeIn">
                      <p className="text-sm text-gray-600 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <h4 className="text-sm font-bold text-gray-900 mb-3">
                        <a
                          href="#cta"
                          className="hover:text-red-600 transition-colors"
                        >
                          Что входит в услугу:
                        </a>
                      </h4>
                      <ul className="space-y-2.5">
                        {service.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2"
                          >
                            <i className="ri-check-double-line text-red-500 text-base mt-0.5 flex-shrink-0"></i>
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
