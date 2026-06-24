import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{product.name}</h3>

      <p
        style={{
          fontWeight: "bold",
          color: "green",
        }}
      >
        ₹{product.price}
      </p>

      {/* ✅ STEP 3: ADD TO CART LOGIC */}
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#4a6cf7",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;