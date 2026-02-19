
import { Outlet } from 'react-router-dom';
import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';
import RequestPopup from './RequestPopup';

interface SiteLayoutProps {
  navbarVariant?: 'transparent' | 'solid';
}

export default function SiteLayout({ navbarVariant = 'transparent' }: SiteLayoutProps) {
  return (
    <>
      <SiteNavbar variant={navbarVariant} />
      <Outlet />
      <SiteFooter />
      <RequestPopup />
    </>
  );
}
