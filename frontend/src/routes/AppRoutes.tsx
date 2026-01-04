import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import PropertyDetailPage from '../pages/properties/PropertyDetailPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ProfilePage from '../pages/profile/ProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/properties/:slug"
          element={<PropertyDetailPage />}
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/profile"
          element={<ProfilePage />}
        />

        {/* Host Routes */}
        <Route
          path="/host/dashboard"
          element={<div className="p-10 text-center">Host Dashboard Placeholder</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
