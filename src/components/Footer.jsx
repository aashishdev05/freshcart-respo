import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Company: [
      { label: "About Us", to: "#" },
      { label: "Careers", to: "#" },
      { label: "Blog", to: "#" },
      { label: "Contact", to: "#" },
    ],
    Support: [
      { label: "Help Center", to: "#" },
      { label: "Privacy Policy", to: "#" },
      { label: "Terms of Service", to: "#" },
      { label: "Refund Policy", to: "#" },
    ],
    Shop: [
      { label: "All Products", to: "/products" },
      { label: "Fresh Fruits", to: "/products" },
      { label: "Vegetables", to: "/products" },
      { label: "Dairy & Bakery", to: "/products" },
    ],
  };

  const socials = [
    { icon: <FaInstagram size={16} />, label: "Instagram", color: "#E1306C" },
    { icon: <FaFacebookF size={16} />, label: "Facebook", color: "#1877F2" },
    { icon: <FaTwitter size={16} />, label: "Twitter", color: "#1DA1F2" },
    { icon: <FaYoutube size={16} />, label: "YouTube", color: "#FF0000" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
      <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />

      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🥬</span>
              <span className="text-2xl font-extrabold text-white" style={{ letterSpacing: "-0.02em" }}>
                FreshCart
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted destination for fresh groceries delivered to your doorstep.
              Quality products, amazing prices, lightning-fast delivery.
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 text-sm hover:text-emerald-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} FreshCart. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;