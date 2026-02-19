
import { advantages } from '../../../mocks/products';

export default function Advantages() {
  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://static.readdy.ai/image/256c1827c8dbb947fa0f657e67320584/36fe93e8849544f3cb38c41975189514.jpeg"
          alt="Производственное оборудование"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Почему выбирают КировБелМаш
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Ведущий производитель промышленного оборудования с проверенным опытом
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-red-600/20 rounded-xl mb-4 sm:mb-6">
                <i className={`${advantage.icon} text-2xl sm:text-3xl text-red-500`}></i>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2">{advantage.value}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{advantage.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
