import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: isMobile ? "10px" : "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        width: "100%",
        maxWidth: isMobile ? "100%" : "300px",
        margin: "auto",
        transition: "0.3s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: isMobile ? "160px" : "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3 style={{ fontSize: isMobile ? "16px" : "18px" }}>
        {product.name}
      </h3>

      <p
        style={{
          fontWeight: "bold",
          color: "green",
          fontSize: isMobile ? "14px" : "16px",
        }}
      >
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: isMobile ? "8px 12px" : "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#4a6cf7",
          color: "white",
          fontWeight: "bold",
          fontSize: isMobile ? "13px" : "14px",
          width: "100%",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;