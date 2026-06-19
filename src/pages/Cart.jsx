import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaTag } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, updateQty, removeItem } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");



  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 499 ? 0 : 40;
  const total = subtotal + deliveryFee;
  const freeDeliveryProgress = Math.min((subtotal / 499) * 100, 100);

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 pb-16" style={{ background: "var(--color-surface-dim)" }}>
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
                Shopping Cart
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                {items.length} {items.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              <FaArrowLeft size={12} />
              Continue Shopping
            </Link>
          </div>

          {items.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, i) => (
                  <div
                    key={item.id}
                    className="card p-5 flex flex-col sm:flex-row gap-5"
                    style={{ animation: `fadeInUp 0.5s ease both`, animationDelay: `${i * 0.1}s` }}
                  >
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-28 h-28 object-cover rounded-xl"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h2 className="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors">
                              {item.name}
                            </h2>
                          </Link>
                          <p className="text-sm text-gray-400 mt-0.5">
                            ₹{item.price} per item
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-0 border-2 border-gray-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="w-10 h-9 flex items-center justify-center font-bold text-sm text-slate-800 border-x-2 border-gray-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>

                        <p className="text-lg font-extrabold" style={{ color: "var(--color-primary)" }}>
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="card p-5">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">
                      {subtotal >= 499
                        ? "🎉 You've unlocked free delivery!"
                        : `₹${499 - subtotal} more for free delivery`
                      }
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${freeDeliveryProgress}%`,
                        background: freeDeliveryProgress >= 100 ? "var(--gradient-primary)" : "var(--gradient-warm)",
                      }}
                    />
                  </div>
                </div>

                <div className="card p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-semibold text-slate-700">₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Fee</span>
                      <span className={`font-semibold ${deliveryFee === 0 ? "text-emerald-600" : "text-slate-700"}`}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>
                    </div>

                    <div className="h-px my-2" style={{ background: "#f1f5f9" }} />

                    <div className="flex justify-between">
                      <span className="text-base font-bold text-slate-900">Total</span>
                      <span className="text-xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                        ₹{total}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <div className="relative flex-1">
                      <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={12} />
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-3 text-sm border-2 border-gray-200 rounded-xl outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <button className="px-4 py-3 rounded-xl text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                      Apply
                    </button>
                  </div>

                  <button className="btn-primary w-full mt-6 py-4 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-24 animate-fade-in-up">
              <span className="text-7xl block mb-4">🛒</span>
              <h2 className="text-2xl font-bold text-slate-700">Your cart is empty</h2>
              <p className="text-gray-400 mt-2">Looks like you haven't added anything yet.</p>
              <Link
                to="/products"
                className="btn-primary inline-block mt-8 px-8 py-4 rounded-xl font-bold text-sm"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;