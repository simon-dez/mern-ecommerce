import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/admin-view/Layout';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);

    // Fetch orders from the backend
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/orders', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setOrders(response.data);
            } catch (err) {
                console.error('Error fetching orders:', err);
            }
        };

        fetchOrders();
    }, []);

    // Delete an order
    const handleDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:3000/api/orders/${orderId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setOrders(orders.filter((order) => order._id !== orderId));
        } catch (err) {
            console.error('Error deleting order:', err);
        }
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Order ID</th>
                            <th className="text-left">Customer Name</th>
                            <th className="text-left">Total Amount</th>
                            <th className="text-left">Status</th>
                            <th className="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="border-t">
                                <td className="py-2">{order.orderId}</td>
                                <td className="py-2">{order.customerName}</td>
                                <td className="py-2">${order.totalAmount}</td>
                                <td className="py-2">{order.status}</td>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleDeleteOrder(order._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default AdminOrders;