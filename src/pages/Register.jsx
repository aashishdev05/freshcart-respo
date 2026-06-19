import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getPasswordStrength = () => {
    if (password.length === 0) return { level: 0, label: "", color: "" };
    if (password.length < 6) return { level: 1, label: "Weak", color: "#ef4444" };
    if (password.length < 10) return { level: 2, label: "Medium", color: "#f59e0b" };
    return { level: 3, label: "Strong", color: "#059669" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="orb orb-teal w-96 h-96 -bottom-20 -right-20 opacity-40" />
        <div className="orb orb-accent w-60 h-60 top-20 left-10 opacity-20" />

        <div className="relative z-10 text-white text-center px-12 max-w-lg">
          <span className="text-6xl block mb-6 animate-float">🛒</span>
          <h2 className="text-4xl font-extrabold leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Join the
            <span className="block mt-1" style={{
              background: "linear-gradient(135deg, #fbbf24, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              FreshCart Family
            </span>
          </h2>
          <p className="mt-4 text-emerald-100/70 leading-relaxed">
            Create your account and start shopping for the freshest groceries delivered straight to your door.
          </p>

          <div className="mt-10 space-y-3">
            {["✨ Exclusive member discounts", "🚚 Free delivery on first order", "⭐ Earn reward points"].map((item, i) => (
              <p key={i} className="text-emerald-100/80 text-sm animate-fade-in-up"
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12" style={{ background: "var(--color-surface-dim)" }}>
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="lg:hidden text-center mb-8">
            <span className="text-3xl">🥬</span>
            <h2 className="text-2xl font-extrabold gradient-text mt-1">FreshCart</h2>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
            Create Account
          </h1>
          <p className="text-gray-400 mt-2">
            Join FreshCart and start shopping for fresh groceries
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-modern"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className="h-1 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background: level <= strength.level ? strength.color : "#e2e8f0",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs mt-1 font-medium" style={{ color: strength.color }}>
                    {strength.label}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="input-modern"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-1">
              <input type="checkbox" className="w-4 h-4 rounded accent-emerald-600 mt-0.5" />
              <span className="text-sm text-gray-500 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="font-semibold" style={{ color: "var(--color-primary)" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="font-semibold" style={{ color: "var(--color-primary)" }}>Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className="btn-primary w-full py-4 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-bold" style={{ color: "var(--color-primary)" }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;