
import { useState, useEffect, FormEvent, useCallback } from 'react';
import { SITE_CONFIG } from '../../config/site.config';
import { submitContactForm } from '../../lib/api';

let openPopupFn: (() => void) | null = null;

export function openRequestPopup() {
  if (openPopupFn) openPopupFn();
}

export default function RequestPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    equipment: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const open = useCallback(() => {
    setIsOpen(true);
    setSubmitStatus('idle');
  }, []);

  useEffect(() => {
    openPopupFn = open;
    return () => {
      openPopupFn = null;
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    if (formData.message.length > 500) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const ok = await submitContactForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      equipment: formData.equipment,
      message: formData.message,
    });

    if (ok) {
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', equipment: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  const { contacts } = SITE_CONFIG;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"></div>

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-scaleIn overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 px-6 py-5">
          <button
            onClick={close}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <i className="ri-close-line text-lg text-white"></i>
          </button>
          <h3 className="text-xl font-bold text-white pr-8">Получить коммерческое предложение</h3>
          <p className="text-sm text-red-100 mt-1">Заполните форму — мы свяжемся с вами в ближайшее время</p>
        </div>

        {/* Body */}
        <div className="px-6 py-5 max-h-[calc(100vh-200px)] overflow-y-auto">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-check-line text-3xl text-green-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h4>
              <p className="text-sm text-gray-500 mb-6">
                Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей.
              </p>
              <button
                onClick={close}
                className="px-8 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form id="popup-request-form" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ваше имя <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Телефон <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Тип оборудования
                  </label>
                  <select
                    name="equipment"
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer"
                  >
                    <option value="">Выберите тип оборудования</option>
                    <option value="Линия брикетирования">Линия брикетирования</option>
                    <option value="Линия гранулирования">Линия гранулирования</option>
                    <option value="Сушильная линия">Сушильная линия</option>
                    <option value="Отдельный агрегат">Отдельный агрегат</option>
                    <option value="Индивидуальное решение">Индивидуальное решение</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Расскажите о требованиях вашего проекта..."
                  ></textarea>
                  <div className="text-xs text-gray-400 text-right mt-1">{formData.message.length}/500</div>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-xs text-red-700 text-center">
                      Произошла ошибка. Попробуйте ещё раз.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full px-6 py-3.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${contacts.phone}`}
                  className="flex items-center space-x-1.5 text-xs text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line text-sm"></i>
                  <span>{contacts.phoneFormatted}</span>
                </a>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a
                  href={`mailto:${contacts.email}`}
                  className="flex items-center space-x-1.5 text-xs text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line text-sm"></i>
                  <span>{contacts.email}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.25s ease-out; }
      `}</style>
    </div>
  );
}
