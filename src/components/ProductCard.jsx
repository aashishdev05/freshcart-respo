import React, { useState, useContext } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card group overflow-hidden">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ background: "var(--gradient-warm)" }}
          >
            {product.badge}
          </span>
        )}

        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${liked
              ? "bg-red-500 text-white scale-110"
              : "bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-400 opacity-0 group-hover:opacity-100"
            }`}
          style={{
            transform: liked ? "scale(1.1)" : undefined,
            boxShadow: liked ? "0 4px 12px rgba(239, 68, 68, 0.3)" : "var(--shadow-md)",
          }}
        >
          <FaHeart size={13} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={11}
              className={i < (product.rating || 4) ? "text-yellow-400" : "text-gray-200"}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">
            ({product.reviews || "24"})
          </span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h2 className="text-base font-bold text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {product.name}
          </h2>
        </Link>

        {product.category && (
          <span className="text-xs text-gray-400 font-medium mt-1 block">
            {product.category}
          </span>
        )}

        <div className="flex items-end gap-2 mt-3">
          <p className="text-xl font-extrabold" style={{ color: "var(--color-primary)" }}>
            ₹{product.price}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through mb-0.5">
              ₹{product.originalPrice}
            </p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="btn-primary w-full mt-4 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
        >
          <FaShoppingCart size={13} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;