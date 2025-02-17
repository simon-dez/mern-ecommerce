import React from 'react';
import Layout from '../../components/admin-view/Layout';

const AdminOrders = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Order ID</th>
                            <th className="text-left">Customer</th>
                            <th className="text-left">Total</th>
                            <th className="text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1001</td>
                            <td>John Doe</td>
                            <td>$50</td>
                            <td>Shipped</td>
                        </tr>
                        <tr>
                            <td>#1002</td>
                            <td>Jane Smith</td>
                            <td>$75</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default AdminOrders;