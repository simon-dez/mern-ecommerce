import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin-view/dashboard';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/orders';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/shopping-view/home';
import Account from './pages/shopping-view/account';
import Checkout from './pages/shopping-view/checkout';
import Listing from './pages/shopping-view/listing';
import PageNotFound from './pages/not-found/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Shopping Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Listing />} />

        {/* 404 Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App;
