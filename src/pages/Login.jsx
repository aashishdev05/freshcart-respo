import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="orb orb-teal w-96 h-96 -top-20 -left-20 opacity-40" />
        <div className="orb orb-accent w-60 h-60 bottom-20 right-10 opacity-20" />

        <div className="relative z-10 text-white text-center px-12 max-w-lg">
          <span className="text-6xl block mb-6 animate-float">🥬</span>
          <h2 className="text-4xl font-extrabold leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Welcome to
            <span className="block mt-1" style={{
              background: "linear-gradient(135deg, #fbbf24, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              FreshCart
            </span>
          </h2>
          <p className="mt-4 text-emerald-100/70 leading-relaxed">
            Your trusted destination for fresh groceries delivered right to your doorstep. Quality products, amazing prices.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            {["🍎 Fresh Fruits", "🥦 Vegetables", "🥛 Dairy"].map((item, i) => (
              <span key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12" style={{ background: "var(--color-surface-dim)" }}>
        <div className="w-full max-w-md animate-fade-in-up">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <span className="text-3xl">🥬</span>
            <h2 className="text-2xl font-extrabold gradient-text mt-1">FreshCart</h2>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
            Welcome back
          </h1>
          <p className="text-gray-400 mt-2">
            Sign in to continue shopping for fresh groceries
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input-modern pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-emerald-600" />
                <span className="text-sm text-gray-500">Remember me</span>
              </label>

              <button type="button" className="text-sm font-semibold" style={{ color: "var(--color-primary)" }}>
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold" style={{ color: "var(--color-primary)" }}>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;