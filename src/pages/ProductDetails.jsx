import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaShoppingCart, FaMinus, FaPlus, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useContext(CartContext);

  const product = {
    name: "Fresh Apples",
    price: 120,
    originalPrice: 160,
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800",
    description:
      "Fresh and juicy apples sourced directly from organic farms in the hills. These premium quality apples are hand-picked and carefully sorted to ensure only the best reach your doorstep. Rich in fiber, vitamins, and antioxidants.",
    features: [
      "100% Organic & Natural",
      "Farm Fresh — Harvested Daily",
      "Fast Delivery within 30 Minutes",
      "Premium Quality Guaranteed",
      "No Artificial Preservatives",
    ],
  };

  const relatedProducts = [
    { id: 2, name: "Bananas", price: 60, rating: 4, reviews: "96", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?w=500" },
    { id: 6, name: "Fresh Orange", price: 90, rating: 5, reviews: "72", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500" },
    { id: 3, name: "Organic Milk", price: 50, rating: 5, reviews: "203", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500" },
  ];

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping" },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16" style={{ background: "var(--color-surface-dim)" }}>
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <FaChevronRight size={10} />
            <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
            <FaChevronRight size={10} />
            <span className="text-slate-700 font-medium">{product.name}</span>
          </nav>

          <div className="card overflow-hidden animate-fade-in-up">
            <div className="grid md:grid-cols-2">
              <div className="relative overflow-hidden group bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14}
                        className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                  <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
                  {product.name}
                </h1>

                <div className="flex items-end gap-3 mt-5">
                  <p className="text-4xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                    ₹{product.price}
                  </p>
                  <p className="text-xl text-gray-400 line-through mb-1">
                    ₹{product.originalPrice}
                  </p>
                </div>

                <p className="text-gray-500 mt-5 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <span className="text-sm font-semibold text-slate-700">Quantity</span>
                  <div className="flex items-center gap-0 border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                    >
                      <FaMinus size={11} />
                    </button>
                    <span className="w-12 h-11 flex items-center justify-center font-bold text-slate-800 border-x-2 border-gray-200">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                    >
                      <FaPlus size={11} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => {
                      for (let i = 0; i < quantity; i++) addToCart(product);
                    }}
                    className="btn-primary flex-1 py-4 rounded-md font-semibold flex items-center justify-center gap-2 text-sm active:scale-[0.97] transition-transform"
                  >
                    <FaShoppingCart size={14} />
                    Add to Cart — ₹{product.price * quantity}
                  </button>

                  <button
                    onClick={() => setLiked(!liked)}
                    className="w-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: liked ? "#fef2f2" : "#f8fafc",
                      color: liked ? "#ef4444" : "#9ca3af",
                      border: liked ? "2px solid #fecaca" : "2px solid #e2e8f0",
                    }}
                  >
                    <FaHeart size={16} />
                  </button>
                </div>

                <div className="mt-8 pt-8" style={{ borderTop: "1px solid #f1f5f9" }}>
                  <div className="grid grid-cols-1 gap-2.5">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          ✓
                        </span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-8 p-8 animate-fade-in-up delay-2">
            <div className="flex gap-1 border-b border-gray-100 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-5 py-3 text-sm font-semibold transition-all duration-200 rounded-t-xl relative"
                  style={{
                    color: activeTab === tab.id ? "var(--color-primary)" : "var(--color-text-muted)",
                    background: activeTab === tab.id ? "var(--color-primary-50)" : "transparent",
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gradient-primary)" }} />
                  )}
                </button>
              ))}
            </div>

            {activeTab === "description" && (
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>{product.description}</p>
                <p>Our apples are carefully sourced from certified organic farms, ensuring that every bite is pure, fresh, and free from harmful chemicals. We maintain cold-chain delivery to preserve freshness from farm to your table.</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {[
                  { name: "Priya S.", rating: 5, text: "Amazing quality! The apples were so fresh and crunchy. Will definitely order again.", date: "2 days ago" },
                  { name: "Rahul M.", rating: 4, text: "Good quality overall. Delivery was super fast. Packaging could be slightly better.", date: "1 week ago" },
                ].map((review, i) => (
                  <div key={i} className="p-5 rounded-2xl" style={{ background: "#f8fafc" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-800">{review.name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, j) => (
                            <FaStar key={j} size={10} className={j < review.rating ? "text-yellow-400" : "text-gray-200"} />
                          ))}
                          <span className="text-xs text-gray-400 ml-1">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
                <p>🚚 <strong>Standard Delivery:</strong> 30 minutes — Free on orders above ₹499</p>
                <p>⚡ <strong>Express Delivery:</strong> 15 minutes — ₹29 extra</p>
                <p>📦 <strong>Return Policy:</strong> Easy returns within 24 hours of delivery</p>
                <p>💰 <strong>COD Available:</strong> Cash on delivery for orders up to ₹2000</p>
              </div>
            )}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8" style={{ letterSpacing: "-0.02em" }}>
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product, i) => (
                <div key={product.id} style={{ animation: `fadeInUp 0.5s ease both`, animationDelay: `${i * 0.1}s` }}>
                  <div className="card group overflow-hidden">
                    <Link to={`/product/${product.id}`}>
                      <div className="overflow-hidden">
                        <img src={product.image} alt={product.name} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </Link>
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={11} className={i < product.rating ? "text-yellow-400" : "text-gray-200"} />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-lg font-extrabold mt-2" style={{ color: "var(--color-primary)" }}>₹{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;