import { projectStats } from '../../../mocks/projects';

export default function ProjectsHero() {
  return (
    <section className="relative pt-20 sm:pt-28">
      <div className="relative w-full h-[350px] sm:h-[480px] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=panoramic%20view%20of%20modern%20industrial%20manufacturing%20facility%20interior%20with%20multiple%20production%20lines%20heavy%20machinery%20and%20equipment%20warm%20lighting%20wide%20angle%20professional%20industrial%20photography%20showing%20scale%20and%20capability&width=1400&height=480&seq=prjhero1&orientation=landscape"
          alt="Реализованные проекты КировБелМаш"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                <a href="/" className="hover:text-white transition-colors cursor-pointer">Главная</a>
                <i className="ri-arrow-right-s-line text-base text-gray-400"></i>
                <span className="text-white font-medium">Проекты</span>
              </nav>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="w-6 sm:w-8 h-0.5 bg-red-500"></div>
                <span className="text-red-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Портфолио
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Реализованные<br />проекты
              </h1>
              <p className="text-sm sm:text-lg text-gray-200 leading-relaxed max-w-lg">
                Более 80 успешно запущенных производственных линий по всей России. Каждый проект —
                индивидуальное решение под задачи клиента.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl sm:text-3xl font-bold text-red-600 mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
