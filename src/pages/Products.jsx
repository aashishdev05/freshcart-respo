import React, { useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      originalPrice: 160,
      category: "Fruits",
      badge: "20% OFF",
      rating: 5,
      reviews: "128",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500",
    },
    {
      id: 2,
      name: "Bananas",
      price: 60,
      category: "Fruits",
      rating: 4,
      reviews: "96",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Organic Milk",
      price: 50,
      originalPrice: 65,
      category: "Dairy",
      badge: "Best Seller",
      rating: 5,
      reviews: "203",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
    },
    {
      id: 4,
      name: "Artisan Bread",
      price: 40,
      category: "Bakery",
      rating: 4,
      reviews: "67",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    },
    {
      id: 5,
      name: "Fresh Tomatoes",
      price: 30,
      category: "Vegetables",
      rating: 4,
      reviews: "45",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
    },
    {
      id: 6,
      name: "Fresh Orange",
      price: 90,
      originalPrice: 110,
      category: "Fruits",
      badge: "Sale",
      rating: 5,
      reviews: "72",
      image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500",
    },
    {
      id: 7,
      name: "Fresh Orange Juice",
      price: 150,
      category: "Cold Drinks",
      rating: 5,
      reviews: "112",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
    },
    {
      id: 8,
      name: "Cola Soda 500ml",
      price: 40,
      category: "Cold Drinks",
      badge: "Cold",
      rating: 4,
      reviews: "89",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500",
    },
    {
      id: 9,
      name: "Greek Yogurt",
      price: 80,
      category: "Dairy",
      rating: 5,
      reviews: "210",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
    },
    {
      id: 10,
      name: "Cheddar Cheese Block",
      price: 250,
      category: "Dairy",
      rating: 4,
      reviews: "55",
      image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500",
    },
  ];

  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Cold Drinks"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16" style={{ background: "var(--color-surface-dim)" }}>
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
                style={{ background: "var(--color-primary-50)", color: "var(--color-primary)" }}
              >
                Shop
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
                All Products
              </h1>
              <p className="text-gray-500 mt-2 text-sm">
                Discover fresh groceries at the best prices
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-modern pl-11 pr-4"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: activeCategory === cat ? "var(--gradient-primary)" : "white",
                  color: activeCategory === cat ? "white" : "var(--color-text-secondary)",
                  boxShadow: activeCategory === cat ? "var(--shadow-glow)" : "var(--shadow-sm)",
                  transform: activeCategory === cat ? "scale(1.05)" : "scale(1)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Showing <span className="font-semibold text-slate-700">{filteredProducts.length}</span> products
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <div key={product.id} style={{ animation: `fadeInUp 0.5s ease both`, animationDelay: `${i * 0.08}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <span className="text-6xl block mb-4">🔍</span>
              <h2 className="text-2xl font-bold text-slate-700">
                No Products Found
              </h2>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="btn-primary mt-6 px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;