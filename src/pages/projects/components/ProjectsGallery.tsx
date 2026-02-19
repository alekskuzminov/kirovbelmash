import { useState } from 'react';
import { projectsData, projectCategories } from '../../../mocks/projects';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
}

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'Все'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Фотогалерея проектов
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Производственные линии и оборудование, установленные на предприятиях наших клиентов
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              <div className="relative w-full h-44 sm:h-56 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  title={`${project.title} — промышленное оборудование КировБелМаш`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <i className="ri-zoom-in-line text-xl text-gray-800"></i>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                  {project.year}
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <i className="ri-map-pin-line text-red-500"></i>
                  <span>{project.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.specs.slice(0, 2).map((spec, i) => (
                    <span key={i} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-50 text-gray-600 text-[10px] sm:text-xs rounded-md border border-gray-100">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
              <i className="ri-folder-open-line text-2xl text-gray-400"></i>
            </div>
            <p className="text-gray-500">В данной категории пока нет проектов</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
