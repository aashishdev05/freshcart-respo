import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ background: "var(--color-surface-dim)" }}>
      <div className="orb orb-primary w-80 h-80 -top-20 -right-20 opacity-20" />
      <div className="orb orb-teal w-60 h-60 bottom-10 left-10 opacity-15" />

      <div className="text-center relative z-10 animate-fade-in-up">
        <h1
          className="text-[10rem] md:text-[14rem] font-black leading-none gradient-text animate-float"
          style={{
            letterSpacing: "-0.05em",
            lineHeight: "0.85",
          }}
        >
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-4" style={{ letterSpacing: "-0.02em" }}>
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-3 max-w-md mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link
            to="/"
            className="btn-primary px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2"
          >
            ← Back to Home
          </Link>
          <Link
            to="/products"
            className="btn-secondary px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center justify-center"
          >
            Browse Products
          </Link>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid #e2e8f0" }}>
          <p className="text-sm text-gray-400 mb-4">Popular pages</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/cart", label: "Cart" },
              { to: "/login", label: "Sign In" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                style={{ background: "white", border: "1px solid #e2e8f0" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;