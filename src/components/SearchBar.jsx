function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default SearchBar;