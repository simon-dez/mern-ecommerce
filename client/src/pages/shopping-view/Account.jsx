import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null;

  const menuItems = [
    { path: '/account', label: 'Account Overview' },
    { path: '/account/orders', label: 'My Orders' },
    { path: '/account/addresses', label: 'My Addresses' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-md ${
                  location.pathname === item.path
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">Account Overview</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Personal Information</h2>
              <p className="text-gray-600">Name: {user.name}</p>
              <p className="text-gray-600">Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
