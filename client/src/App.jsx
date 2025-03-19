import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shopping-view/Footer";
import Navbar from "./components/shopping-view/Navbar";
import ProductOverview from "./pages/shopping-view/ProductOverview";
import ProductDetail from "./pages/shopping-view/ProductDetail";
import Dashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Products";
import AdminOrders from "./pages/admin-view/Orders";
import AdminUsers from "./pages/admin-view/Users";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import Home from "./pages/shopping-view/Home";
import Account from "./pages/shopping-view/Account";
import Checkout from "./pages/shopping-view/Checkout";
import PageNotFound from "./pages/not-found/PageNotFound";
import Cart from "./pages/shopping-view/Cart";
import AboutUs from "./components/shopping-view/AboutUs";
import Orders from "./pages/shopping-view/Orders";
import Addresses from "./pages/shopping-view/Addresses";
import EmailVerificationPage from "./pages/auth/EmailVerficationPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import TestComp from './pages/shopping-view/TestComp'
import Success from "./pages/shopping-view/PaymentSuccess"
import PaymentSuccess from "./pages/shopping-view/PaymentSuccess";
import PaymentFailure from "./pages/shopping-view/PaymentFailure";
import PrivacyTerms from "./pages/shopping-view/PrivacyPolicies";
import Chatbot from "./pages/shopping-view/Chatbot";
import ContactUs from "./pages/shopping-view/ContactUs";
import PayNow from "./pages/shopping-view/PayNow";
import ForgotPassword from './pages/auth/ForgotPassword';






function App() {
  const { ischeckingAuth, checkAuth,isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  // console.log(isAuthenticated);
  // console.log(user);

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
          <Route path="/verify-email" element={<EmailVerificationPage/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          

          {/* Shopping Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:category" element={<TestComp />} />
          <Route path="/category/:category" element={<ProductOverview />} />
          <Route path="/category/:category/:subcategory" element={<ProductOverview />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/cancel" element={<PaymentFailure />} />
          <Route path="/privacy" element={<PrivacyTerms />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/paynow" element={<PayNow />} />
          

          {/* 404 Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </main>
      <Chatbot />
      <Footer />
 main
    </div>
  );
}

export default App;
