
import React, { useEffect } from 'react';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    location: string;
    year: string;
    category: string;
    description: string;
    specs: string[];
    image: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      // Restore scroll behaviour
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Defensive rendering – ensure required fields exist
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-72 sm:h-80 bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            title={`${project.title} — проект КировБелМаш`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full hover:bg-white transition-colors cursor-pointer shadow-md"
            aria-label="Закрыть"
          >
            <i className="ri-close-line text-xl text-gray-800"></i>
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                {project.year}
              </span>
              <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <i className="ri-map-pin-line text-red-500"></i>
            <span>{project.location}</span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              Характеристики проекта
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <i className="ri-checkbox-circle-line text-red-500 text-lg"></i>
                  <span className="text-sm text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contacts"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-send-line text-base"></i>
              <span>Запросить КП</span>
            </a>
            <a
              href="tel:+79005218477"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line text-base"></i>
              <span>Позвонить</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
