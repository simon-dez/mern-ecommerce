import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
      // Dummy previous orders for demonstration:
      setOrders([
        { id: '12345', date: '2023-07-28', total: 49.99 },
        { id: '67890', date: '2023-08-05', total: 79.00 }
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
          <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <ul className="space-y-2">
              {orders.map(order => (
                <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <p>Order ID: {order.id}</p>
                  <p>Date: {order.date}</p>
                  <p>Total: €{order.total.toFixed(2)}</p>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;