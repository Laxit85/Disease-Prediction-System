import { Outlet } from 'react-router-dom';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
