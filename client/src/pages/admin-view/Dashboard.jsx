import React from "react";
import Layout from "../../components/admin-view/Layout";
import Chart from '../../components/admin-view/Chart';

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Total Sales</h2>
          <p className="text-gray-600">$10,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Total Orders</h2>
          <p className="text-gray-600">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-gray-600">500</p>
        </div>
      </div>
      <div className="mt-6">
        <Chart />
      </div>
    </Layout>
  );
};

export default Dashboard;
