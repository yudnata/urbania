import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary tracking-tighter"
        >
          urbania
        </Link>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="primary"
                size="sm"
              >
                Sign up
              </Button>
            </Link>
          </div>

          <Link
            to="/profile"
            className="flex items-center border border-gray-200 rounded-full p-1 pl-3 hover:shadow-md transition-shadow cursor-pointer"
          >
            <FiUser className="w-5 h-5 mr-2 text-gray-500" />
            <div className="w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pravatar.cc/150?u=user"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
