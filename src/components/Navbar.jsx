import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/wishlist", label: "Wishlist" },
    { to: "/cart", label: "Cart" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "glass-strong shadow-lg py-3"
            : "bg-transparent py-5"
          }`}
        style={{
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.04)" : "none",
        }}
      >
        <div className="container-main flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl">🥬</span>
            <span
              className="text-2xl font-extrabold tracking-tight gradient-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              FreshCart
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/wishlist", label: "Wishlist" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200"
                style={{
                  color: location.pathname === link.to ? "var(--color-primary)" : "var(--color-text-secondary)",
                  background: location.pathname === link.to ? "var(--color-primary-50)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-xl transition-all duration-200 hover:bg-red-50 group"
            >
              <FaHeart className="text-gray-400 group-hover:text-red-400 transition-colors" size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                style={{ background: "var(--gradient-warm)" }}
              >
                2
              </span>
            </Link>

            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl transition-all duration-200 hover:bg-emerald-50 group"
            >
              <FaShoppingCart className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                {cartCount}
              </span>
            </Link>

            <div className="w-px h-6 bg-gray-200 mx-2" />

            <Link
              to="/login"
              className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <FaUser size={12} />
              Sign In
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={20} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl md:hidden transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ animation: mobileOpen ? "slideDrawer 0.3s ease" : "none" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="text-lg font-bold gradient-text">FreshCart</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-3 rounded-xl font-medium transition-all duration-200"
              style={{
                color: isActive(link.to) ? "var(--color-primary)" : "var(--color-text-secondary)",
                background: isActive(link.to) ? "var(--color-primary-50)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="p-5 border-t border-gray-100 space-y-3">
          <Link
            to="/login"
            className="btn-primary w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
          >
            <FaUser size={12} />
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;