
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    equipment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('company', formData.company);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('equipment', formData.equipment);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d6amfgua728k8ctu3d90', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          equipment: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Получить коммерческое предложение
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения требований проекта и подготовки подробного коммерческого предложения.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-red-50 rounded-lg flex-shrink-0">
                  <i className="ri-phone-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-xs sm:text-sm text-gray-600">+7-800-321-44-77</p>
                  <p className="text-xs sm:text-sm text-gray-600">Пн-Пт: 9:00 — 18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-red-50 rounded-lg flex-shrink-0">
                  <i className="ri-mail-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Электронная почта</h3>
                  <p className="text-xs sm:text-sm text-gray-600">sales@kirovbelmash.ru</p>
                  <p className="text-xs sm:text-sm text-gray-600">info@kirovbelmash.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-red-50 rounded-lg flex-shrink-0">
                  <i className="ri-map-pin-line text-xl sm:text-2xl text-red-600"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-xs sm:text-sm text-gray-600">г. Киров, Россия</p>
                  <p className="text-xs sm:text-sm text-gray-600">Производственная площадь: 5000 м²</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-red-50 rounded-xl border border-red-100">
              <div className="flex items-start space-x-3">
                <i className="ri-information-line text-lg sm:text-xl text-red-600 mt-0.5"></i>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2">Что входит в КП:</h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <i className="ri-check-line text-red-600"></i>
                      <span>Консультация по подбору оборудования</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="ri-check-line text-red-600"></i>
                      <span>Технические характеристики</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="ri-check-line text-red-600"></i>
                      <span>Стоимость и сроки поставки</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="ri-check-line text-red-600"></i>
                      <span>Варианты монтажа и обучения</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
            <form id="contact-form" onSubmit={handleSubmit} data-readdy-form>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Ваше имя <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Название компании
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="Введите название компании"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Электронная почта <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Телефон <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="equipment" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Тип оборудования
                  </label>
                  <select
                    id="equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all cursor-pointer"
                  >
                    <option value="">Выберите тип оборудования</option>
                    <option value="briquetting">Линия брикетирования</option>
                    <option value="granulation">Линия гранулирования</option>
                    <option value="drying">Сушильное оборудование</option>
                    <option value="crushing">Дробильное оборудование</option>
                    <option value="custom">Индивидуальное решение</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Расскажите о требованиях вашего проекта..."
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {formData.message.length}/500 символов
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 sm:py-4 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-green-800 text-center">
                      Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-xs sm:text-sm text-red-800 text-center">
                      Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами напрямую.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
