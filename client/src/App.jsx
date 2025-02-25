import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shopping-view/Footer";
import Navbar from "./components/shopping-view/Navbar";
import ProductOverview from "./pages/shopping-view/ProductOverview";
import ProductDetail from "./pages/shopping-view/ProductDetail";
import Dashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminUsers from "./pages/admin-view/Users";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import Home from "./pages/shopping-view/home";
import Account from "./pages/shopping-view/Account";
import Checkout from "./pages/shopping-view/checkout";
import PageNotFound from "./pages/not-found/PageNotFound";
import Cart from "./pages/shopping-view/Cart";
import AboutUs from "./components/shopping-view/AboutUs";
import Orders from "./pages/shopping-view/Orders";
import Addresses from "./pages/shopping-view/Addresses";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />



          {/* Auth Routes */}
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/register" element={<AuthRegister />} />


          {/* Shopping Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<ProductOverview />} />
          <Route path="/category/:category/:subcategory" element={<ProductOverview />} />
          <Route path="/about" element={<AboutUs />} />
          {/* 404 Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />


    </div>
  );
}

export default App;
