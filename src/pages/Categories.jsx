function Categories() {
  const categories = [
    { name: "👟 Shoes", color: "#4a6cf7" },
    { name: "👕 Fashion", color: "#ff4d6d" },
    { name: "👜 Bags", color: "#00c6ff" },
    { name: "⌚ Watches", color: "#ff758f" },
    { name: "📱 Electronics", color: "#4a6cf7" },
    { name: "💄 Beauty", color: "#ff4d6d" },

    { name: "👗 Dresses", color: "#ff69b4" },
    { name: "🧥 Jackets", color: "#4a6cf7" },
    { name: "👖 Jeans", color: "#00c6ff" },
    { name: "👛 Purses", color: "#ff758f" },
    { name: "🕶️ Sunglasses", color: "#4a6cf7" },
    { name: "💍 Jewellery", color: "#ff4d6d" },
    { name: "🧴 Skincare", color: "#00c6ff" },
    { name: "💋 Makeup", color: "#ff69b4" },
    { name: "🎧 Headphones", color: "#4a6cf7" },
    { name: "💻 Laptops", color: "#00c6ff" },
    { name: "📸 Cameras", color: "#ff758f" },
    { name: "🏃 Sportswear", color: "#4a6cf7" },
    { name: "🩴 Sandals", color: "#ff4d6d" },
    { name: "🎒 Backpacks", color: "#00c6ff" },
    { name: "🧸 Toys", color: "#ff69b4" },
    { name: "🏠 Home Decor", color: "#4a6cf7" },
    { name: "🍽️ Kitchen", color: "#ff758f" },
    { name: "🌸 Perfumes", color: "#ff4d6d" },
    { name: "📚 Books", color: "#00c6ff" },
    { name: "🐶 Pet Care", color: "#ff69b4" },
    { name: "🎮 Gaming", color: "#4a6cf7" },
    { name: "🍼 Baby Care", color: "#ff4d6d" },
    { name: "🏋️ Fitness", color: "#00c6ff" },
    { name: "🎁 Gifts", color: "#ff69b4" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #ffd1e8, #a0e7ff)",
        fontFamily: "Arial",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          color: "#ff4d6d",
          marginBottom: "30px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        📂 Shop by Categories
      </h1>

      {/* CATEGORY GRID */}
      <div
        className="category-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "0.3s",
              border: `2px solid ${cat.color}`,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h2 style={{ color: cat.color, fontSize: "18px" }}>
              {cat.name}
            </h2>
          </div>
        ))}
      </div>

      {/* ANIMATION + RESPONSIVE */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* 📱 MOBILE RESPONSIVE */
          @media (max-width: 768px) {

            h1 {
              font-size: 24px !important;
            }

            .category-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
            }

            .category-grid div {
              padding: 12px !important;
            }

            .category-grid h2 {
              font-size: 14px !important;
            }
          }

          @media (max-width: 480px) {

            .category-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Categories;