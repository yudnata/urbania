import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-primary">
      <Navbar />
      <main className="pt-24 pb-12 px-6 container mx-auto">
        <Outlet />
      </main>
      <footer className="border-t border-border py-8 mt-auto bg-background">
        <div className="container mx-auto px-6 text-center text-sm text-secondary">
          &copy; {new Date().getFullYear()} Urbania. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
