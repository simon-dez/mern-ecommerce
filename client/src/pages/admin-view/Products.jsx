import React from 'react';
import Layout from '../../components/admin-view/Layout';


const AdminProducts = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">ID</th>
                            <th className="text-left">Name</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Product 1</td>
                            <td>$20</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Product 2</td>
                            <td>$30</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default AdminProducts;