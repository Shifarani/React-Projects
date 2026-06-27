function CategorySection() {
  const categories = [
    "Women",
    "Men",
    "Electronics",
    "Shoes",
    "Bags",
    "Accessories",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        flexWrap: "wrap",
        padding: "20px 10px",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          style={{
            padding: window.innerWidth < 480 ? "8px 14px" : "10px 20px",
            border: "1px solid #ddd",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: window.innerWidth < 480 ? "12px" : "14px",
            background: "#fff",
            transition: "0.3s",
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#000";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#000";
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySection;