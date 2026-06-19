import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar, FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wishlist = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: "128",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500",
    },
    {
      id: 2,
      name: "Orange Juice",
      price: 150,
      rating: 4,
      reviews: "56",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500",
    },
  ]);

  const removeItem = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16" style={{ background: "var(--color-surface-dim)" }}>
        <div className="container-main">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
                style={{ background: "#fef2f2", color: "#ef4444" }}
              >
                ❤️ Wishlist
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
                My Wishlist
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                {products.length} {products.length === 1 ? "item" : "items"} saved
              </p>
            </div>

            {products.length > 0 && (
              <button className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold hidden md:inline-flex items-center gap-2">
                <FaShoppingCart size={13} />
                Move All to Cart
              </button>
            )}
          </div>

          {products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <div
                  key={product.id}
                  className="card group overflow-hidden"
                  style={{ animation: `fadeInUp 0.5s ease both`, animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                    <button
                      onClick={() => removeItem(product.id)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <FaStar key={j} size={11} className={j < product.rating ? "text-yellow-400" : "text-gray-200"} />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h2 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h2>
                    </Link>

                    <div className="flex items-end gap-2 mt-2">
                      <p className="text-xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                        ₹{product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-400 line-through mb-0.5">₹{product.originalPrice}</p>
                      )}
                    </div>

                    <button className="btn-primary w-full mt-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
                      <FaShoppingCart size={13} />
                      Move to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 animate-fade-in-up">
              <div className="inline-block animate-float">
                <span className="text-7xl block">💚</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-700 mt-6">Your wishlist is empty</h2>
              <p className="text-gray-400 mt-2 max-w-sm mx-auto">
                Start saving items you love! Tap the heart icon on any product to add it here.
              </p>
              <Link
                to="/products"
                className="btn-primary inline-block mt-8 px-8 py-4 rounded-xl font-bold text-sm"
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;