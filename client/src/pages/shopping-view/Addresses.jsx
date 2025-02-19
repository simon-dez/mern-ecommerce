import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Addresses() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
      // Dummy address list
      setAddresses([
        {
          id: 1,
          label: "Home",
          street: "123 Main St",
          city: "Sample City",
          zip: "12345"
        },
        {
          id: 2,
          label: "Office",
          street: "456 Business Rd",
          city: "Worktown",
          zip: "67890"
        }
      ]);
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
          <h1 className="text-2xl font-semibold mb-4">My Addresses</h1>
          {addresses.length === 0 ? (
            <p>No addresses found.</p>
          ) : (
            <ul className="space-y-2">
              {addresses.map(addr => (
                <li key={addr.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <p>{addr.label}</p>
                  <p>{addr.street}</p>
                  <p>{addr.city}, {addr.zip}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Addresses;
