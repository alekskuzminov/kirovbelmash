
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import SiteLayout from '../components/feature/SiteLayout';

const HomePage = lazy(() => import('../pages/home/page'));
const ContactsPage = lazy(() => import('../pages/contacts/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const ProjectsPage = lazy(() => import('../pages/projects/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const CalculatorPage = lazy(() => import('../pages/calculator/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const fallback = (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const routes: RouteObject[] = [
  {
    element: <SiteLayout navbarVariant="transparent" />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={fallback}><HomePage /></Suspense>,
      },
      {
        path: '/about',
        element: <Suspense fallback={fallback}><AboutPage /></Suspense>,
      },
      {
        path: '/services',
        element: <Suspense fallback={fallback}><ServicesPage /></Suspense>,
      },
      {
        path: '/calculator',
        element: <Suspense fallback={fallback}><CalculatorPage /></Suspense>,
      },
    ],
  },
  {
    element: <SiteLayout navbarVariant="solid" />,
    children: [
      {
        path: '/contacts',
        element: <Suspense fallback={fallback}><ContactsPage /></Suspense>,
      },
      {
        path: '/gallery',
        element: <Suspense fallback={fallback}><GalleryPage /></Suspense>,
      },
      {
        path: '/projects',
        element: <Suspense fallback={fallback}><ProjectsPage /></Suspense>,
      },
    ],
  },
  {
    path: '*',
    element: <Suspense fallback={fallback}><NotFoundPage /></Suspense>,
  },
];

export default routes;
