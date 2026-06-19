import React from "react";

const categories = [
  {
    id: 1,
    name: "Fruits",
    emoji: "🍎",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500",
    count: "120+ items",
  },
  {
    id: 2,
    name: "Vegetables",
    emoji: "🥦",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
    count: "90+ items",
  },
  {
    id: 3,
    name: "Dairy",
    emoji: "🥛",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
    count: "60+ items",
  },
  {
    id: 4,
    name: "Bakery",
    emoji: "🍞",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    count: "45+ items",
  },
];

const Categories = () => {
  return (
    <section className="container-main py-20">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{ background: "var(--color-primary-50)", color: "var(--color-primary)" }}
        >
          Categories
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ letterSpacing: "-0.02em" }}>
          Shop By Category
        </h2>
        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Browse through our wide range of fresh and quality products
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{
              animation: `fadeInUp 0.6s ease both`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
              <p className="text-white/60 text-sm">{category.count}</p>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[inset_0_0_30px_rgba(52,211,153,0.1)]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;