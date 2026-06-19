import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { FaTruck, FaLeaf, FaShieldAlt, FaClock, FaApple, FaGooglePlay, FaStar, FaQuoteLeft } from "react-icons/fa";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      originalPrice: 160,
      badge: "20% OFF",
      rating: 5,
      reviews: "128",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500",
    },
    {
      id: 2,
      name: "Bananas",
      price: 60,
      rating: 4,
      reviews: "96",
      image: "https://images.unsplash.com/photo-1574226516831-e1dff420e37f?w=500",
    },
    {
      id: 3,
      name: "Organic Milk",
      price: 50,
      originalPrice: 65,
      badge: "Best Seller",
      rating: 5,
      reviews: "203",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
    },
    {
      id: 4,
      name: "Fresh Orange",
      price: 90,
      rating: 4,
      reviews: "72",
      image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500",
    },
  ];

  const features = [
    { icon: <FaTruck />, title: "Free Delivery", desc: "On orders above ₹499" },
    { icon: <FaLeaf />, title: "100% Organic", desc: "Farm-fresh quality" },
    { icon: <FaShieldAlt />, title: "Secure Payment", desc: "Safe transactions" },
    { icon: <FaClock />, title: "30-Min Delivery", desc: "Lightning fast" },
  ];

  const reviews = [
    { id: 1, name: "Sarah Jenkins", role: "Food Blogger", text: "FreshCart has completely changed how I buy groceries. The quality is unmatched and delivery is insanely fast.", rating: 5 },
    { id: 2, name: "Michael Chen", role: "Fitness Trainer", text: "I need fresh organic produce daily for my meals. The bento box presentation and freshness is just next level.", rating: 5 },
    { id: 3, name: "Emma Thompson", role: "Busy Mom", text: "The 30-minute delivery is a lifesaver. Plus, the UI is so sleek and easy to use, it feels like a premium app.", rating: 4 },
    { id: 4, name: "David Miller", role: "Chef", text: "I am extremely picky about my ingredients. FreshCart sources the best local farms. Highly recommended.", rating: 5 },
  ];

  const chilledProducts = [
    {
      id: 7,
      name: "Fresh Orange Juice",
      price: 150,
      rating: 5,
      reviews: "112",
      badge: "Fresh",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
    },
    {
      id: 8,
      name: "Cola Soda 500ml",
      price: 40,
      rating: 4,
      reviews: "89",
      badge: "Ice Cold",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500",
    },
    {
      id: 9,
      name: "Greek Yogurt",
      price: 80,
      rating: 5,
      reviews: "210",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
    },
    {
      id: 10,
      name: "Organic Milk",
      price: 50,
      rating: 5,
      reviews: "203",
      badge: "Dairy",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
    },
  ];

  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Navbar />

      <Hero />

      <section ref={addRevealRef} className="reveal container-main -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card p-5 flex items-center gap-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800">{feature.title}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Categories />

      <section ref={addRevealRef} className="reveal container-main py-10">
        <div
          className="card-glass relative overflow-hidden rounded-md p-10 md:p-14 text-center border"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700" style={{ letterSpacing: "-0.02em" }}>
              Rollback on Fresh Fruits
            </h2>
            <p className="mt-3 text-emerald-800 max-w-md mx-auto font-medium">
              Every Day Low Prices on farm-fresh produce.
            </p>
            <Link
              to="/products"
              className="inline-block mt-8 bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 transition-colors"
            >
              Shop Rollbacks
            </Link>
          </div>
        </div>
      </section>

      <section ref={addRevealRef} className="reveal container-main py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
              style={{ background: "var(--color-primary-50)", color: "var(--color-primary)" }}
            >
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
              Popular Products
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
            style={{ color: "var(--color-primary)" }}
          >
            View All
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, i) => (
            <div key={product.id} style={{ animation: `fadeInUp 0.6s ease both`, animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            View All Products →
          </Link>
        </div>
      </section>

      <section ref={addRevealRef} className="reveal container-main py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Dairy & Cold Drinks
            </h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-emerald-600 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chilledProducts.map((product, i) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section ref={addRevealRef} className="reveal container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card-glass p-6 flex flex-col justify-between relative min-h-[250px]">
            <div>
              <span className="inline-block p-2 rounded-full bg-emerald-100 mb-4 text-emerald-600">
                <FaLeaf className="text-xl" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Farm to Table</h3>
              <p className="text-slate-600">Fresh produce sourced directly from farmers, guaranteed quality and freshness.</p>
            </div>
          </div>

          <div className="card-glass p-6 flex flex-col justify-between relative min-h-[250px]">
            <div>
              <span className="inline-block p-2 rounded-full bg-emerald-100 mb-4 text-emerald-600">
                <FaClock className="text-xl" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-slate-600">Get your groceries delivered to your door or ready for pickup in store.</p>
            </div>
          </div>

          <div className="card p-6 flex flex-col justify-between relative min-h-[250px] text-white" style={{ background: "var(--gradient-primary)" }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-3">FreshCart+</h3>
              <p className="text-emerald-50">Free delivery from your store. Free shipping with no order minimum. Save on fuel.</p>
              <button className="mt-6 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-bold">Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>

      <section ref={addRevealRef} className="reveal py-20 border-y border-emerald-100/30 overflow-hidden">
        <div className="container-main mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
            Loved by thousands.
          </h2>
          <p className="mt-2 text-slate-500 text-lg">Don't just take our word for it.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x-mandatory px-6 md:px-24 pb-8 -mx-6 md:-mx-24">
          {reviews.map((review) => (
            <div key={review.id} className="snap-center shrink-0 w-[320px] md:w-[400px] card-glass p-8 border border-emerald-100/30 shadow-sm hover:shadow-md transition-shadow">
              <FaQuoteLeft className="text-emerald-100 text-4xl mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-200"} />
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: "var(--gradient-primary)" }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={addRevealRef} className="reveal container-main py-10">
        <div className="card p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm rounded-md" style={{ background: "var(--gradient-primary)" }}>
          <div className="relative z-10 max-w-xl text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Shop faster with the FreshCart App
            </h2>
            <p className="mt-4 text-emerald-50 text-lg">
              Scan items in store, make lists, and track your delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-emerald-600 font-bold px-6 py-2 rounded-full hover:bg-emerald-50 transition-colors">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={addRevealRef} className="reveal card-glass border-t py-16 text-center">
        <div className="container-main max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900">
            Sign up for savings
          </h2>
          <p className="mt-2 text-slate-600">
            Hear about fresh deals and Rollbacks first.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-emerald-300/50 card-glass text-sm outline-none focus:border-emerald-500"
            />
            <button className="btn-primary px-6 py-3 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;