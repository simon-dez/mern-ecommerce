import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaBars, FaXmark, FaUser, FaCartShopping } from 'react-icons/fa6';
import AboutUs from './AboutUs';




function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const menuItems = [
    {
      label: "WOMEN",
      path: "/category/women",
      submenu: ["Ready-to-Wear", "Dresses", "Shoes", "Accessories", "New Arrivals"]
    },
    {
      label: "MEN",
      path: "/category/men",
      submenu: ["Clothing", "Shoes", "Accessories", "Collections", "New Arrivals"]
    },
    {
      label: "BAGS",
      path: "/category/bags",
      submenu: ["Shoulder Bags", "Tote Bags", "Mini Bags", "Clutches", "Backpacks"]
    },
    {
      label: "JEWELRY",
      path: "/category/jewelry",
      submenu: ["Necklaces", "Bracelets", "Rings", "Earrings", "Collections"]
    },
    {
      label: "BEAUTY",
      path: "/category/beauty",
      submenu: ["Fragrance", "Makeup", "Skincare", "Accessories", "Gift Sets"]
    }
  ];

  return (

    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-[1920px] mx-auto px-4">
        <div className="flex items-center h-16 relative">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-gray-600"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation - Far Left */}
          <div className="hidden md:flex md:items-center space-x-8 absolute left-12">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveCategory(item.label)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={item.path}
                  className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                >
                  {item.label}
                </Link>
                {/* Subcategories Dropdown */}
                {activeCategory === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        to={`${item.path}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-900 hover:text-gray-600"
                        onClick={() => setActiveCategory(null)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              DEDSV
            </Link>
          </div>

          {/* Right Side - Account and Cart */}
          <div className="flex items-center space-x-6 absolute right-12">
            {/* Account Link */}
            <Link to="/account" className="text-gray-900 hover:text-gray-600">
              <FaUser size={20} />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-gray-900 hover:text-gray-600 relative">
              <FaCartShopping size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600">
              About Us
            </Link>



          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-gray-900 hover:text-gray-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="pl-8">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem}
                      to={`${item.path}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-900 hover:text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>

  );
}

export default Navbar;
