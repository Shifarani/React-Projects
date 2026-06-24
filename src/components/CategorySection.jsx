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
        gap: "15px",
        flexWrap: "wrap",
        padding: "30px",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySection;