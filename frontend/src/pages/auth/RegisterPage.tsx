import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import type { UserRole } from '../../types/auth';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('guest');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt', { fullName, email, password, role });
    // TODO: Implement actual registration logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-primary hover:text-slate-800"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I want to:</label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center space-x-2 transition-all ${
                    role === 'guest'
                      ? 'border-primary bg-slate-50 ring-1 ring-primary'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setRole('guest')}
                >
                  <span
                    className={`font-semibold ${
                      role === 'guest' ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    Book Stays
                  </span>
                </div>
                <div
                  className={`border rounded-lg p-3 cursor-pointer flex items-center justify-center space-x-2 transition-all ${
                    role === 'host'
                      ? 'border-primary bg-slate-50 ring-1 ring-primary'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setRole('host')}
                >
                  <span
                    className={`font-semibold ${
                      role === 'host' ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    Become a Host
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              fullWidth
              size="lg"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
