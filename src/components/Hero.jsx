import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaStar, FaHeadset } from "react-icons/fa";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add("visible");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="orb orb-teal w-96 h-96 -top-32 -left-32 opacity-40" />
      <div className="orb orb-accent w-72 h-72 top-1/3 right-0 opacity-20" />
      <div className="orb orb-primary w-80 h-80 bottom-0 left-1/4 opacity-30" />

      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />

      <div className="container-main py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-white">
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/20"
          >
            <FaTruck className="text-yellow-300" />
            <span>Free Delivery on Orders Above ₹499</span>
          </div>

          <h1
            className="animate-fade-in-up delay-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mt-8"
            style={{ letterSpacing: "-0.03em" }}
          >
            Fresh Groceries
            <span className="block mt-2" style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fde68a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Delivered Fast
            </span>
          </h1>

          <p className="animate-fade-in-up delay-2 mt-6 text-lg md:text-xl text-emerald-100/80 max-w-lg leading-relaxed">
            Order fresh fruits, vegetables, dairy products and daily
            essentials directly from your home. Fast delivery,
            best quality and affordable prices.
          </p>

          <div className="animate-fade-in-up delay-3 flex flex-wrap gap-4 mt-10">
            <Link
              to="/products"
              className="btn-primary px-8 py-4 text-base shadow-lg"
            >
              Shop Now
            </Link>

            <button className="btn-secondary px-8 py-4 text-base backdrop-blur-md" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
              Explore Deals
            </button>
          </div>

          <div className="animate-fade-in-up delay-4 flex gap-10 mt-14">
            {[
              { icon: <FaStar className="text-yellow-300" />, value: "10K+", label: "Happy Customers" },
              { icon: "🛒", value: "500+", label: "Products" },
              { icon: <FaHeadset className="text-emerald-300" />, value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">{stat.icon}</span>
                  <h2 className="text-3xl font-extrabold">{stat.value}</h2>
                </div>
                <p className="text-emerald-200/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="animate-scale-in delay-2 relative">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
                alt="Fresh groceries assortment"
                className="w-2/3 rounded-3xl object-cover shadow-2xl"
                style={{
                  height: "480px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 0 80px rgba(52, 211, 153, 0.15)",
                }}
              />

              <div className="w-1/3 flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400"
                  alt="Fresh orange juice"
                  className="w-full rounded-3xl object-cover shadow-2xl"
                  style={{ height: "232px" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400"
                  alt="Cold cola"
                  className="w-full rounded-3xl object-cover shadow-2xl"
                  style={{ height: "232px" }}
                />
              </div>
            </div>
          </div>

          <div
            className="animate-float-slow absolute -bottom-6 -left-6 glass-strong p-5 rounded-2xl shadow-xl"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "var(--gradient-warm)" }}
              >
                🍎
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800">Fresh Fruits</h3>
                <p className="text-emerald-600 font-semibold text-sm">Up to 30% Off</p>
              </div>
            </div>
          </div>

          <div
            className="animate-float absolute top-6 -right-6 glass-strong p-5 rounded-2xl shadow-xl"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                🚀
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800">Fast Delivery</h3>
                <p className="text-emerald-600 font-semibold text-sm">Within 30 Min</p>
              </div>
            </div>
          </div>

          <div
            className="animate-float-slow absolute top-1/2 -left-10 glass-strong p-4 rounded-2xl shadow-xl"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">⭐</span>
              <div>
                <p className="font-bold text-sm text-slate-800">4.9 Rating</p>
                <p className="text-xs text-gray-500">2k+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 40 1440 40V80H0V40Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;