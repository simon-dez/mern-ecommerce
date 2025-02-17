import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    console.log("Stored user data:", storedUser);
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
      // Dummy orders :
      setOrders([
        { id: '12345', date: '2023-07-28', total: 49.99 },
        { id: '67890', date: '2023-08-05', total: 79.00 }
      ]);
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

  const handleOrderClick = (order) => {
    setSelectedOrder(selectedOrder?.id === order.id ? null : order);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Account Page</h1>
      {user && user.name && user.email ? (
        <div className="mb-6">
          <p className="text-lg">Hello, {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
      ) : (
        <p>No valid user data found, please log in.</p>
      )}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Saved Addresses</h2>
        {addresses.length === 0 ? (
          <p>No addresses found.</p>
        ) : (
          <ul className="space-y-2">
            {addresses.map(addr => (
              <li key={addr.id} className="border p-2 rounded">
                <p>{addr.label}</p>
                <p>{addr.street}</p>
                <p>{addr.city}, {addr.zip}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Previous Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map(order => (
              <li
                key={order.id}
                className="border p-2 rounded cursor-pointer"
                onClick={() => handleOrderClick(order)}
              >
                <p>Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Total: €{order.total.toFixed(2)}</p>
                {selectedOrder?.id === order.id && (
                  <div className="mt-2 border-t pt-2 text-sm text-gray-600">
                    <p>Delivery Status: Shipped</p>
                    <p>Items: 3 items in this order</p>
                    <p>Tracking Number: ABC123</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Account;
