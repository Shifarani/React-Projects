function SearchBar() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        padding: "0 10px",
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: isMobile ? "100%" : "60%",
          padding: isMobile ? "10px" : "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: isMobile ? "14px" : "16px",
          outline: "none",
          transition: "0.3s",
        }}
      />
    </div>
  );
}

export default SearchBar;